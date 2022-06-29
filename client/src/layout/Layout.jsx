import Head from 'next/head';
import { AuthProvider } from '../hooks/useAuth';
import { UserProvider } from '../hooks/useConnect';

const Layout = ({ children }) => {

    // useEffect(() => {
    //     socket.onAny((event, ...args) => {
    //         console.log(event, args);
    //     });

    //     const username = prompt('Enter your name:- ');
    //     socket.auth = { username };
    //     socket.connect();

    //     // client-side
    //     socket.on("connect_error", (err) => {
    //         console.log(err.message); // prints the message associated with the error
    //     });

    //     socket.on("connect", () => {
    //         console.log(socket.connected); // true
    //     });



    //     socket.on("disconnect", () => {
    //         socket.emit("leave", socket.id);
    //         console.log(socket.connected); // false
    //     });

    //     return () => {
    //         socket.offAny();
    //         socket.off('connect_error');
    //     }
    // });

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/WhatsAPP-logo.png" type="image/x-icon" />
            </Head>
            <AuthProvider>
                <UserProvider>
                    <div>
                        {children}
                    </div>
                </UserProvider>
            </AuthProvider>
        </>
    )
}

export default Layout