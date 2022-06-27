import { FaUser } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='flex py-2.5 cursor-pointer active:bg-[#2a3942] hover:bg-[#202c33]'>
            <div className='mx-5'>
                <div className='h-12 w-12 flex items-center  justify-center rounded-full bg-[#6a7175]'>
                    <FaUser className='h-7 w-7 text-[#cfd4d6]' />
                </div>
            </div>
            <div className=" pb-2.5 w-full pr-5 flex border-b border-[#8696a026] items-start justify-between">
                <div className=''>
                    <h1 className='text-base text-primary'>Sammer Shah</h1>
                    <h2 className='text-sm text-secondary'>this is your offer letter</h2>
                </div>
                <div className="text-xs text-secondary">
                    23/04/2022
                </div>
            </div>
        </div>
    )
}

export default Contact