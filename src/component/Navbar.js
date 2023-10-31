import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../Firebase'

const Navbar = () => {

    const navigate = useNavigate();
    const [userauth,setUserAuth]= useState('');
    useEffect(()=>{
        auth.onAuthStateChanged(function(user) {
            if (user) {
                setUserAuth(user)
            } else {
                setUserAuth('')
            }
          });
    })
    const logout =()=>{
        signOut(auth).then(()=>{
            setUserAuth("")
            navigate('/signup')


        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <div>
            <nav className='main-nav'>
                <div className='navbar'>
                    <div className='nav-logo'>

                    {!userauth &&  <Link className='link' to='/'>AuthDB</Link>}
                    </div>
                    <div className='links'>
                        <ul>

                            <>
                                {
                                    userauth ?
                                        <>
                                            <li><Link className='link' to='/account'>Account</Link></li>
                                            <li><Link className='link' onClick={logout} >LogOut</Link></li>

                                        </> :
                                        <>
                                            <li><Link className='link' to='/signup'>SignUp</Link></li>
                                            <li><Link className='link' to='/login'>Login</Link></li>


                                        </>

                                }





                            </>





                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar