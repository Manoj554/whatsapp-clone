import whatsAppImage from '../assets/images/WhatsApp-logo.png';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex items-center space-x-8'>
            <Image
                src={whatsAppImage.src}
                alt="whatsapp image"
                height={60}
                width={60}
                objectFit="contain"

            />
            <div className='text-4xl font-bold'>WhatsApp</div>
        </div>
    )
}

export default Logo