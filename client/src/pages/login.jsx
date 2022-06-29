import Head from 'next/head';
import TextInput from '../components/TextInput';
import { IoLogoGoogle } from 'react-icons/io';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import Logo from '../components/Logo';
import InitialLoading from '../components/Loader/InitialLoading';


const Login = () => {
    const initialFormData = { email: '', password: '', cpassword: '' };
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [err, setErr] = useState({ id: 0, message: '' });
    const { signUp, signIn, loading, error, user } = useAuth();

    const validateForm = (form) => {
        const { email, password, cpassword } = form;

        if (!email) {
            setErr({ id: 1, message: 'email is required' });
            return false;
        };

        if (!password) {
            setErr({ id: 2, message: 'password is required' });
            return false;
        };

        if (isSignUp && !cpassword) {
            setErr({ id: 3, message: 'confirm your password' });
            return false;
        };

        if (isSignUp && password.length < 6) {
            setErr({ id: 3, message: 'password length should be 6 and more' });
            return false;
        };

        if (isSignUp && password !== cpassword) {
            setErr({ id: 3, message: 'password not matched' });
            return false;
        };

        setErr({ id: 0, message: '' });
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm(formData)) {
            if (isSignUp) {
                await signUp({ email: formData.email, password: formData.password });
            } else {
                await signIn({ email: formData.email, password: formData.password });
            }
        }
    }
    return (
        <>
            <Head>
                <title>{isSignUp ? 'WhatsApp - Sign up' : 'WhatsApp - Log in'}</title>
            </Head>
            {loading ? <InitialLoading /> :
                <div className="flex pt-20 space-y-12 flex-col items-center justify-start w-full h-screen bg-[#0a1014]">
                    <Logo />
                    <div className='flex bg-wp-sidebar-bg rounded-md flex-col min-w-[400px] items-center w-[30%] p-3 pb-6'>
                        <div className='text-xl font-semibold p-2'>{isSignUp ? 'Sign up' : 'Log in'} to WhatsApp</div>
                        <p className='text-sm text-red-400 text-center'>{error}</p>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center w-full py-4 px-6 space-y-6'>
                            <TextInput
                                placeholder="Email address"
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                error={err.id === 1 ? err.message : null}
                            />
                            <TextInput
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                                error={err.id === 2 ? err.message : null}
                            />
                            {isSignUp &&
                                <TextInput
                                    type="password"
                                    placeholder="Confirm password"
                                    value={formData.cpassword}
                                    onChange={e => setFormData({ ...formData, cpassword: e.target.value })}
                                    error={err.id === 3 ? err.message : null}
                                />}
                            <button type='submit' className='w-full bg-[#8696a0] hover:bg-[#86a7a0] text-lg py-1.5 rounded-md text-black'>{isSignUp ? 'Sign up' : 'Log in'}</button>
                        </form>

                        <div className='px-6 w-full flex items-center'>
                            <div className='w-5/12 border-b border-[#8696a050]' />
                            <p className='text-center flex-1 font-bold text-[#aaa]'>OR</p>
                            <div className='w-5/12 border-b border-[#8696a050]' />
                        </div>

                        <div className='flex justify-center my-4 w-full'>
                            <div className='flex items-center justify-center space-x-4 text-secondary hover:text-white cursor-pointer'>
                                <IoLogoGoogle className='text-lg' />
                                <p>{isSignUp ? 'Sign up' : 'Log in'} with Google</p>
                            </div>
                        </div>

                        <div onClick={() => { setIsSignUp(prev => !prev); setFormData(initialFormData) }} className='hover:text-blue-500 hover:underline cursor-pointer'>
                            {isSignUp ?
                                <p>Already have an account? <span>Back to Log in</span></p>
                                :
                                <p>Don't have account? <span>Create a new one</span></p>
                            }
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Login