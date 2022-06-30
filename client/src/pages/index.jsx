import Head from "next/head";
import { useEffect, useState } from "react";
import InitialLoading from "../components/Loader/InitialLoading";
import GetUserName from "../contents/GetUserName";
import MainContainer from "../contents/MainContainer";
import Sidebar from "../contents/Sidebar";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { user, initialLoading, setInitialLoading } = useAuth();
    const [toogleScreen, setToggleScreen] = useState(false);
    const [toogleWelcome, setToogleWelcome] = useState(false);

    useEffect(() => {
        setInitialLoading(false);
    }, [user]);

    const handleToogleScreen = () => {
        setToggleScreen(prev => !prev);
    }

    return (
        <div>
            <Head>
                <title>WhatsApp</title>
            </Head>
            {initialLoading ? <InitialLoading /> : user?.displayName ? (
                <main className="body md:py-5 md:px-4">
                    <section className="hidden md:flex h-[94vh]">
                        <Sidebar />
                        <MainContainer />
                    </section>

                    <section className="md:hidden flex h-screen">
                        {toogleScreen ? <Sidebar handleToogleScreen={handleToogleScreen} /> : <MainContainer handleToogleScreen={handleToogleScreen} toogleWelcome={toogleWelcome} setToogleWelcome={setToogleWelcome} />}
                    </section>
                </main>
            ) : <GetUserName />}
        </div>
    )
}

export default Home;