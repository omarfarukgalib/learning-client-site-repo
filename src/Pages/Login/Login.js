import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginError,setLoginError] = useState('')
    const { register, handleSubmit } = useForm()
    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div className=' mt-10 rounded-lg border-4 border-gray-400 p-16 w-[550px] mx-auto'>
            <p className='text-center text-2xl font-semibold'>Login</p>
            <div className='mt-8 max-w[400] flex justify-center items-center'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text-alt">Email</span></label>
                        <input type="email" {...register('email')} placeholder="Email Address" className="input input-bordered w-96" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text-alt">password</span></label>
                        <input type="password" {...register('password')} placeholder="password" className="input input-bordered w-full" />
                        <small><Link>Forget Password?</Link></small>
                    </div>
                    <button className='mt-2 btn btn-primary w-full'>Login</button>
                    <small className='font-semibold'>Have An Account? <Link to="/signup" className='text-primary'>Signup</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Login;