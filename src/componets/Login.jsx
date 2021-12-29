import React from 'react'
import { useState } from 'react'
import '../sass/components/login.scss';

const Login = () => {
    const [typeinput, setType] = useState('password')
    const [eye,setEye] = useState('bxs')
    const handelClick = ()=>{
        console.log(typeinput)
        setType(typeinput==='password' ? 'text':'password')
        setEye(eye==='bxs' ? 'bx':'bxs')
    }
    return (
        <div className="singup">
            <form action="">
            <h1 className="singup-heading">Sing up</h1>
            
            <label htmlFor="username" className="singup-title">Ten dang nhap</label>
            <div className="singup-input">
                
                <input type="text" id='username' className="singup-input-custom" placeholder='eg:user name'/>
            </div>
            <label htmlFor="password" className="singup-title">Mat khau</label>
            <div className="singup-input">
                
                <input type={typeinput} id="password" className="singup-input-custom" placeholder='eg:pass word'/>
                <i className={`bx ${eye}-low-vision singup-social-icon-eye`} onClick={()=>handelClick()}></i>
            </div>
            <button type="submit" className="singup-btn">Sing up</button> 
            </form>
            <div className="singup-s">
            <button className="singup-social">
            <i className="bx bxl-google singup-social-icon" ></i>
            <span className='singup-social-text'>Singup with Google</span>
            </button>
            <button className="singup-social">
            <i className="bx bxl-facebook-square singup-social-icon" ></i>
            <span className='singup-social-text'>Singup with Facebook</span>
            </button>
            </div>
        </div>
    )
}

export default Login
