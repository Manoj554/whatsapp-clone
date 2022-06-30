import React, { useState } from 'react';
import InitialLoading from '../components/Loader/InitialLoading';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import useAuth from '../hooks/useAuth';

const GetUserName = () => {
    const { setUserName, loading, error } = useAuth();
    const [displayName, setDisplayName] = useState('');

    const SubmitUserName = async () => {
        if (!displayName) {
            alert('please set a display name');
            return;
        }
        await setUserName(displayName);
    };

    return (
        <>
            {loading ? <InitialLoading /> :
                <div className='w-full pt-20 flex items-center justify-center'>
                    <div className="w-1/3 min-w-[380px] bg-wp-sidebar-bg py-8 px-6 md:px-10 rounded-xl flex flex-col items-start space-y-6 ">
                        <Logo />
                        <hr className=' w-full' />
                        <h1 className='text-2xl font-bold'>Set Your User Name</h1>
                        <p className='text-sm text-red-400 text-center'>{error}</p>
                        <TextInput
                            name="userName"
                            placeholder="Enter your display name"
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)}
                        />
                        <button onClick={SubmitUserName} className='bg-blue-800 py-2 px-8 rounded-lg text-normal md:text-lg font-semibold hover:bg-blue-600'>Next</button>
                    </div>
                </div>}
        </>
    )
}

export default GetUserName