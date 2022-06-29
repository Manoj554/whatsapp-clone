import React from 'react'

const RightMessage = ({ message, time }) => {
    return (
        <div className="py-1 px-3 rounded-md text-sm font-normal max-w-sm bg-[#005c4b] inline-block self-end" >
            <div className='py-1' >
                <p className='flex-1'>{message}</p>
                <div className='float-right px-1 text-xs text-[#729798]'>{time}</div>
            </div>
        </div >
    )
}

export default RightMessage