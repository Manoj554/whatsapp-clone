import { MdAttachment, MdEmojiEmotions, MdSend } from 'react-icons/md';

const ChatInput = ({ input, setInput, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className='absolute bottom-0 left-0 py-2 px-4  bg-[#202c33] w-full flex items-center justify-between space-x-5'>
            <div className='flex space-x-4 text-3xl text-[#8696a0]'>
                <button type='button'>
                    <MdEmojiEmotions />
                </button>
                <button type='button'>
                    <MdAttachment />
                </button>
            </div>
            <div className='flex-1'>
                <input
                    className='w-full bg-[#2a3942] py-2 px-4 rounded-lg focus:outline-none'
                    placeholder='Type a message'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
            </div>

            <div className='text-2xl'>
                <button type='submit'>
                    <MdSend />
                </button>
            </div>
        </form>
    )
}

export default ChatInput