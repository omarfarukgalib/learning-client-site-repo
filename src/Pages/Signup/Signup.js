import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(authContext)
    const { register, handleSubmit, formState:{errors} } = useForm()
    
    const handleLogin = (data) => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className=' mt-2 rounded-lg border-4 border-gray-400 p-16 w-[550px] mx-auto'>
            <p className='text-center text-2xl font-semibold'>Signup</p>
            <div className=' max-w[400] flex justify-center items-center'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text-alt">Full Name</span></label>
                        <input type="text" {...register('name',{
                            required:'Full Name is required'
                        })} placeholder="Full Name" className="input input-bordered w-96" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text-alt">Email</span></label>
                        <input type="email" {...register('email',{
                            required:'Email is required'
                        })} placeholder="Email Address" className="input input-bordered w-96" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text-alt">password</span></label>
                        <input type="password" {...register('password',{
                            required:'password is required',
                            minLength:{value:6,message:'password must be six character long'}
                        })} placeholder="password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <button className='mt-2 btn btn-primary w-full'>Signup</button>
                    <button className='mt-2 btn btn-primary w-full'>Google</button>
                    <small className='font-semibold'>Already Have An Account? <Link to="/login" className='text-primary'>Login</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Signup;