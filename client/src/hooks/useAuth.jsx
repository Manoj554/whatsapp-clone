import { useRouter } from 'next/router';
import { useState, createContext, useContext, useMemo, useEffect } from "react";
import { auth } from "../utils/firebase";
import { db } from '../utils/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "firebase/auth";
import { ref, set, update, push, child } from 'firebase/database';
import InitialLoading from '../components/Loader/InitialLoading';;
import socket from '../utils/socket';

const AuthContext = createContext({
    user: null,
    loading: false,
    error: null,
    initialLoading: true,
    signIn: async () => { },
    signUp: async () => { },
    logOut: async () => { },
    setUserName: async () => { },
    setInitialLoading: () => { }
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        setInitialLoading(true);
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
                router.push('/login');
            }
        });
    }, [auth]);

    useEffect(() => {
        const setTime = setTimeout(() => {
            setError('');
        }, 15000);

        return () => {
            clearTimeout(setTime);
        };
    }, [error]);

    const signIn = async ({ email, password }) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            router.push('/');
        } catch (error) {
            setError(error.code);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async ({ email, password }) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            set(ref(db, `users/${userCredential.user.uid}`), {
                name: userCredential.user.displayName,
                email: userCredential.user.email,
                id: userCredential.user.uid,
            });
            router.push('/');
        } catch (error) {
            setError(error.code);
        } finally {
            setLoading(false);
        }
    };

    const logOut = async () => {
        setLoading(true);

        try {
            await signOut(auth);
            socket.disconnect();
        } catch (error) {
            setError(error.code);
        } finally {
            setLoading(false);
        }
    };

    const setUserName = async (userName) => {
        setLoading(true);

        try {
            await updateProfile((auth.currentUser), {
                displayName: userName
            });
            await update(ref(db, `users/${auth.currentUser.uid}`), {
                name: userName
            });
            router.push('/');
        } catch (error) {
            setError(error.code);
        } finally {
            setLoading(false);
        }
    }

    const memoedValue = useMemo(() => ({
        user, loading, error, signIn, signUp, logOut, setUserName, initialLoading, setInitialLoading
    }), [user, loading, error, initialLoading]);

    return <AuthContext.Provider value={memoedValue}>
        {children}
    </AuthContext.Provider>
}

export default function useAuth() {
    return useContext(AuthContext);
}