import React from 'react'

const LeftMessage = ({ message, time }) => {
    return (
        <div className='text-sm font-normal py-1 px-3 max-w-sm rounded-md bg-[#202c33] self-start'>
            <div className='py-1' >
                <p className='flex-1'>{message}</p>
                <div className='float-right px-1 text-xs text-[#729798]'>{time}</div>
            </div>
        </div>
    )
}

export default LeftMessage