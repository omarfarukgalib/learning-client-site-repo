import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Contexts/UserContext';

const Login = () => {
  const navigate = useNavigate()
    const {logIn,logOut} = useContext(authContext)
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        logIn(email,password)
        .then((userCredential) => {
            // Signed in 
            
            const user = userCredential.user;
            console.log(user)
            form.reset();
            navigate('/courses')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error)
          });
          logOut()
          .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.error(error)
          });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="mb-3 text-center lg:text-left">
            <h1 className=" text-4xl font-bold">Please Login now!</h1>
            
          </div>
          <div className="mb-32 card flex-shrink-0 lg:w-[1000px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit ={handleSubmit} className="card-body">
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
                <div className="form-control mt-6">
                
              </div>
               
                <button className="btn btn-primary">Google</button>
                <button className="mt-3 btn btn-primary">Github</button>
              </div>
              <div className="form-control mt-6">
              
                <button className="btn btn-primary">Login</button>
              </div>
             
              <label className="label">
                  <Link to="#"  className=" label-text-alt link link-hover">Forgot password?</Link>
                </label>
                <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">Haven't your account? Register Now</Link><br />
                </label>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;