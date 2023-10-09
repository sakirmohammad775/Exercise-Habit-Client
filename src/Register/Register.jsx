import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useState } from "react";



const Register = () => {
    const[RegisterError,setRegisterError]=useState('');
    const [success,setSuccess]=useState('')
    const handleRegister=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        setRegisterError('');
        setSuccess('');



        createUserWithEmailAndPassword(auth ,email,password)
        .then(submit=>{
            console.log(submit.user);
            setSuccess('successfully created')
        })
        .catch(error=>{
            console.error(error);
            setRegisterError(error.message)
        })
    }
   


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <input type="text" name="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Resister</button>
        </div>
      </form>
      {/* showing the error message */}
        {
            RegisterError && <p className="text-cyan-950">{RegisterError}</p>
        }
        {/* showing the success message */}
        {
            success && <p className="text-green-500">{success}</p>
        }

    </div>
  </div>
</div>
        </div>
    );
};

export default Register;