
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase'
const Login = () => {
    const navigate = useNavigate();
    const [error ,setError] = useState("")
    const [form, setForm] = useState({
        email:"",password:""
    });
    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

   const handleSubmission = (e) => {
    e.preventDefault()
    if(!form.email || !form.password){
        setError("Fill all fields")
        return;
    }
    setError("");
    signInWithEmailAndPassword(auth , form.email ,form.password)
    .then( async(res)=>{
        
        navigate('/account')
    })
    .catch((err)=>setError(err.message))
    }
   

    return (
        <div className='login-main'>

            <div className='login-left'>
                <div className='form-section'>
                    <div className='form'>
                        <form onSubmit={handleSubmission}>
                            <label>Email</label><br />
                            <input type='email' name='email' onChange={handleForm} placeholder='Enter your email' />
                            <br />
                            <label>Password</label><br />
                            <input type='password' name='password' onChange={handleForm} placeholder='Enter your password' />
                            <br />
                            <b className='error'>{error}</b>
                            <div className='btn'>
                                <button type='submit'>Login</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <div className='login-right'>
                <div className='login'>
                    <h2>Login</h2>
                </div>

            </div>

        </div>
    )
}

export default Login