import { FaUser } from 'react-icons/fa';
import { HiDotsVertical, HiOutlineSearch } from 'react-icons/hi';
import bgImage from '../assets/images/chatScreenBg.jpg';
import ChatInput from '../components/ChatInput';
import LeftMessage from '../components/Messages/LeftMessage';
import Message from '../components/Messages/Message';
import RightMessage from '../components/Messages/RightMessage';

const ChatScreen = () => {
    return (
        <div className='relative flex-1 h-full bg-black  border-l border-[#8696a060]'>
            <header className="flex items-center py-2 px-4 justify-between bg-[#202c33]">
                <div className="flex items-center space-x-4">
                    <div className="temp h-10 w-10 flex items-center justify-center bg-yellow-600 rounded-full">
                        <FaUser className='h-5 w-5 text-[#cfd4d6]' />
                    </div>
                    <h1>Nilesh </h1>
                </div>
                <div className="flex text-xl space-x-8">
                    <button title="New chat">
                        <HiOutlineSearch />
                    </button>
                    <button title="Menu" >
                        <HiDotsVertical />
                    </button>
                </div>
            </header>

            {/* bg-[url('/chatScreenBg.jpg')] */}
            <section className="-z-0 bg-[url('/chatScreenBg.jpg')] bg-cover bg-no-repeat bg-center opacity-40 absolute h-[92%] top-14 left-0"></section>

            <section className='px-20 py-8 absolute top-14 left-0 h-[80%] flex flex-col space-y-1 items-center overflow-y-auto'>
                <Message />
                <LeftMessage />
                <RightMessage />
                <LeftMessage />
                <RightMessage />
                <Message />
                <LeftMessage />
                <RightMessage />
                <LeftMessage />
                <RightMessage />
            </section>
            <ChatInput />
        </div>
    )
}

export default ChatScreen