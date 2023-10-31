import React, { useEffect } from 'react'
import { useState } from 'react';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../Firebase'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

    const navigate = useNavigate();
    const [error ,setError] = useState("")
    const [form,setForm]= useState({
        name: "",email:"",password:""
    });
    const handleForm = (e) =>{
        setForm({...form ,[e.target.name] : e.target.value})
       
    }
    const handleSubmission = (e) => {
        e.preventDefault()
        if(!form.email || !form.email || !form.password){
            setError("Fill all fields")
            return;
        }
        setError("");
        createUserWithEmailAndPassword(auth,form.email  ,form.password)
        .then(async (res)=>{
            const user =res.user;
            await updateProfile(user ,{
                displayName : form.name,
            });
            navigate('/account')
        })
        .catch((err)=>{
            setError(err.message)
        })
        }
    
    
    return (
        <div className='signup-main'>
            <div className='signup-left'>
                <div className='form-section'>
                <div className='form'>
                    <form onSubmit={handleSubmission}>
                        

                        <label>Name</label><br />
                        <input type='text'  name='name' onChange={handleForm} placeholder='Enter your password' />
                        <br />
                        <label>Email</label><br />
                        <input type='email' name='email' onChange={handleForm} placeholder='Enter your email' />
                        <br />

                        <label>Password</label><br />
                        <input type='password' name= 'password' onChange={handleForm} placeholder='Enter your password' />
                        <br />
                        <b className='error'>{error}</b>
                        <div className='btn'>
                        <button type='submit'>SignUp</button>
                        </div>
                        
                    </form>
                    </div>
                </div>
            </div>
            <div className='signup-right'>
                <div className='signup'>
                    <h2>SignUp</h2>
                </div>

            </div>
        </div>
    )
}

export default SignUp