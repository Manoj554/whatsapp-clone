import React from 'react'

const DropDownForSideBar = () => {
    return (
        <div className="absolute top-14 z-20 text-sm bg-[#233138] right-4 w-52 flex flex-col items-start py-2">
            <div className='w-full cursor-pointer hover:bg-[#182229] pl-6 py-3 '>
                <button className=''>
                    New Group
                </button>
            </div>
            <div className='w-full cursor-pointer hover:bg-[#182229] pl-6 py-3 '>
                <button className=''>
                    Setting
                </button>
            </div>
            <div className='w-full cursor-pointer hover:bg-[#182229] pl-6 py-3 '>
                <button className=''>
                    Log out
                </button>
            </div>
        </div>
    )
}

export default DropDownForSideBar