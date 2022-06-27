import Head from 'next/head';
import { RiWhatsappFill } from 'react-icons/ri';
import MainContainer from "../contents/MainContainer";
import Sidebar from "../contents/Sidebar";

const Home = () => {
    return (
        <div>
            <Head>
                <title>WhatsApp 2.0</title>
                <link rel="shortcut icon" href="/WhatsAPP-logo.png" type="image/x-icon" />
            </Head>
            <main className="body py-5 px-4">
                <section className="h-[94vh] flex">
                    <Sidebar />
                    <MainContainer />
                </section>
            </main>
        </div>
    )
}

export default Home;