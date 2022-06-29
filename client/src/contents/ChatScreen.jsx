import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiDotsVertical, HiOutlineSearch } from 'react-icons/hi';
import ChatInput from '../components/ChatInput';
import LeftMessage from '../components/Messages/LeftMessage';
import Message from '../components/Messages/Message';
import RightMessage from '../components/Messages/RightMessage';
import useConnect from '../hooks/useConnect';

const ChatScreen = ({ userDetails, messageContainer }) => {
    const { sendMessage } = useConnect();
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        sendMessage(input);
        setInput('');
    };

    return (
        <div className='relative flex-1 h-full bg-black  border-l border-[#8696a060]'>
            <header className="flex items-center py-2 px-4 justify-between bg-[#202c33]">
                <div className="flex items-center space-x-4">
                    <div className="temp h-10 w-10 flex items-center justify-center bg-yellow-600 rounded-full">
                        <FaUser className='h-5 w-5 text-[#cfd4d6]' />
                    </div>
                    <h1>{userDetails?.name}</h1>
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
                {messageContainer.length > 0 && messageContainer.map((val, index) => {
                    if (val.incoming) {
                        return <LeftMessage key={index} message={val.message} time={val.time} />
                    } else {
                        return <RightMessage key={index} message={val.message} time={val.time} />
                    }
                })}
            </section>
            <ChatInput input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </div>
    )
}

export default ChatScreen