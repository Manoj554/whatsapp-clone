import Image from 'next/image';
import whatsappWelcomePic from '../assets/images/welcomepic.png';

const Welcome = () => {
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

            <p className='m-4 text-secondary font-thin'>
                Click a contact to start conversection or you can start a new chat.
            </p>


        </section>
    )
}

export default Welcome