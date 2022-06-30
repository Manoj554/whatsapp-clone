import Image from 'next/image';
import whatsappWelcomePic from '../assets/images/welcomepic.png';

const Welcome = ({ setToogleWelcome, handleToogleScreen }) => {
    return (
        <section className='flex flex-col items-center justify-center h-full'>
            <Image
                src={whatsappWelcomePic.src}
                alt="Welcome Image"
                height={300}
                width={550}
                objectFit="contain"
            />

            <h1 className='text-4xl font-thin text-primary-title'>WhatsApp</h1>
            <p className='text-sm text-secondary my-4'>
                Use WhatsApp to send and receive message faster & secure
            </p>

            <div className='test mt-4 border-[#77777025] w-[50%]'></div>

            <p className='hidden md:block m-4 text-secondary font-thin'>
                Click a contact to start conversection or you can start a new chat.
            </p>

            <button onClick={() => { setToogleWelcome(true); handleToogleScreen(true); }} className='mt-4 w-[150px] bg-[#8696a0] hover:bg-[#86a7a0] text-md py-2 rounded-md text-black'>
                Getting started
            </button>


        </section>
    )
}

export default Welcome