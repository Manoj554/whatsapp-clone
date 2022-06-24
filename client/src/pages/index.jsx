import io from 'socket.io-client';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const socket = io(process.env.NEXT_PUBLIC_SERVER_URL);
const userId = nanoid(5);

const Home = () => {
    const [input, setInput] = useState('');
    const [messages, setMessage] = useState([]);

    const joinTheChat = () => {
        socket.emit('join-chat', userId);
    }

    const sendMessage = () => {
        socket.emit('send-message', { message: input, sender: userId });
        setInput('');
    }

    useEffect(() => {
        socket.on('receive', (data) => {
            setMessage([...messages, data]);
        });
        return () => socket.off('receive');
    });

    return (
        <div>
            <section className="roomjoin">
                <button onClick={joinTheChat} className='border border-black p-2 bg-blue-400'>join</button>
            </section>
            <section className="chatArea mt-10">
                <input type="text" placeholder='send your message here' className='outline p-2' value={input} onChange={e => setInput(e.target.value)} />

                <button onClick={sendMessage} className='border border-black ml-3 p-2'>send</button>
            </section>

            <section className="chatSection mt-10 bg-slate-300 min-w-full min-h-[100px] ">
                <h1 className='text-center font-bold'>chat section</h1>
                <div className='w-full'>
                    <p className='text-blue-600'>messages ...</p>
                    {messages.map((val, index) => (
                        <p key={index} className="text-red-600 text-2xl">{val.text}
                            <span className='text-black text-sm'> {val.sender}</span>
                        </p>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home