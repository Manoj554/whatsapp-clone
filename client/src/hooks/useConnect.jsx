import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import socket from '../utils/socket';
import useAuth from './useAuth';
import { db } from '../utils/firebase';
import moment from 'moment';

const UserContext = createContext({
    chatType: '', //private or group
    chatId: null, //Other's id or room id
    userInfo: null,
    allUsers: [],
    allUsersMessages: [],
    helperToggle: false,
    lastMessagesenderId: null,
    ReloadUsers: () => { },
    connectToChat: () => { },
    sendMessage: () => { }

});

export const UserProvider = ({ children }) => {
    const [chatId, setChatId] = useState('');
    const [chatType, setChatType] = useState('private');
    const [allUsers, setAllUsers] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [allUsersMessages, setAllUsersMessages] = useState([]);
    const [helperToggle, setHelperToggle] = useState(false);
    const [lastMessagesenderId, setLastMessageSenderId] = useState('');
    const { user } = useAuth();

    const userDetails = useMemo(() => ({
        name: user?.displayName,
        id: user?.uid,
        socketId: socket.id
    }), [user]);

    useEffect(() => {
        if (user?.displayName) {
            socket.auth = { name: user.displayName };
            socket.connect();
            setUserInfo(userDetails);
            socket.on("connect", () => {
                console.log("Socket connection successful :- " + socket.connected);
            });
        }

        socket.on("connect_error", (err) => {
            console.log(err.message); // prints the message associated with the error
        });

        socket.on("all-users", payload => {
            setAllUsers([...payload]);
            // console.log(payload);
        });

        socket.on("receive-message", ({ from, message }) => {
            let msgObj = {
                incoming: true,
                message: message,
                time: moment().format('LT')
            };

            setAllUsersMessages(old => {
                let id = old.filter(val => val.socketId === from)[0];
                if (!id) {
                    let newUserConnect = {
                        socketId: from,
                        messages: [msgObj],
                    };
                    return [...old, newUserConnect];
                };
                id.messages = [...id.messages, msgObj];
                return old;
            });
            setHelperToggle(prev => !prev);
            new Audio('/notification2.mp3').play();
            setLastMessageSenderId(from);
        });

        return () => {
            socket.off("connect_error");
            socket.off("all-users");
            socket.off("connect");
            socket.off("receive-message");
        }
    });

    const sendMessage = (message) => {
        socket.emit("send-message", { to: chatId, message });
        let msgObj = {
            incoming: false,
            message: message,
            time: moment().format('LT')
        };
        setAllUsersMessages(old => {
            let id = old.filter(val => val.socketId === chatId)[0];
            id.messages = [...id.messages, msgObj];
            return old;
        });
        setHelperToggle(prev => !prev);
    };

    const ReloadUsers = () => {
        socket.emit("users-request");
    };

    const connectToChat = (id) => {
        if (lastMessagesenderId === id) {
            setLastMessageSenderId('');
        }
        setChatId(id);
        setChatType('individual');
        let newUserConnect = {
            socketId: id,
            messages: [],
        };
        let findId = allUsersMessages.filter(val => val.socketId === id);
        if (findId.length === 0) {
            setAllUsersMessages(old => [...old, newUserConnect]);
        }
    };

    const memoedValue = useMemo(() => ({
        chatId, chatType, allUsers, userInfo, allUsersMessages, lastMessagesenderId, helperToggle, ReloadUsers, connectToChat, sendMessage
    }
    ), [chatId, chatType, allUsers, userInfo, allUsersMessages, helperToggle, lastMessagesenderId]);

    return <UserContext.Provider value={memoedValue}>
        {children}
    </UserContext.Provider>
};

export default function useConnect() {
    return useContext(UserContext);
};