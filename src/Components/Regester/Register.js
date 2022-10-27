import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Contexts/UserContext';

const Register = () => {
    const[error,setError] = useState('')
    const {createUser} = useContext(authContext)
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const names = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,names,confirm)
        if(password !==confirm){
            setError('Error: This password did not match')
        }else if(password.length < 6){
            setError('Error: More than 6 character long')
        }

        createUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            form.reset();
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error)
          });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="mb-3 text-center lg:text-left">
            <h1 className=" text-4xl font-bold">Please Register now!</h1>
            
          </div>
          <div className="mb-32 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit= {handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" required/>
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">Already i have an coount. Login</Link>
                </label>
                <p className='text-red-600'>{error}</p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;