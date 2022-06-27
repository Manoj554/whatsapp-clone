import Image from "next/image";
import { HiDotsVertical } from 'react-icons/hi';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import Contact from "../components/Contact";
import Search from "../components/Search";
import DropDownForSideBar from "../components/DropDownForSideBar";
import { useState } from "react";

const Sidebar = () => {
    const [toggleDropDownload, setToggleDropDownload] = useState(false);

    return (
        <section className="relative contact-section min-w-[350px] w-[30%] bg-wp-sidebar-bg">
            <div className="w-full z-10 sticky top-0">
                {toggleDropDownload && <DropDownForSideBar />}
                <header className="flex items-center py-2 px-4 justify-between bg-[#202c33]">
                    <div className="flex items-center space-x-4">
                        <div className="temp h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full">
                            <FaUser className='h-5 w-5 text-[#cfd4d6]' />
                        </div>
                        <h1>Manoj (you)</h1>
                    </div>
                    <div className="flex text-xl space-x-8">
                        <button title="New chat">
                            <BsChatLeftTextFill />
                        </button>
                        <button className={`rounded-full p-2 ${toggleDropDownload && "bg-[#374248]"}`} title="Menu" onClick={() => setToggleDropDownload(prev => !prev)}>
                            <HiDotsVertical />
                        </button>
                    </div>
                </header>
                <div className="w-full border bg-wp-sidebar-bg border-[#8696a026] py-3 ">
                    <Search
                        placeholder="Search or start a new chat"
                    />
                </div>
            </div>
            <section className="absolute top-32 h-[80%] flex flex-col flex-1 overflow-y-scroll">
                <Contact />
                <Contact />
                <Contact />
            </section>
        </section>
    )
}

export default Sidebar;