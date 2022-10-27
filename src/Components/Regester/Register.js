import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const names = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,names)
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
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">Already i have an coount</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;