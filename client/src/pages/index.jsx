import Head from "next/head";
import { useEffect } from "react";
import GetUserName from "../contents/GetUserName";
import MainContainer from "../contents/MainContainer";
import Sidebar from "../contents/Sidebar";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { user, loading } = useAuth();

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    return (
        <div>
            <Head>
                <title>WhatsApp</title>
            </Head>
            {user?.displayName ? (
                <main className="body py-5 px-4">
                    <section className="h-[94vh] flex">
                        <Sidebar />
                        <MainContainer />
                    </section>
                </main>
            ) : <GetUserName />}
        </div>
    )
}

export default Home;