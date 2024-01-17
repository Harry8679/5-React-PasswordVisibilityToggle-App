import React from 'react';
import './Login.scss';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

const Login = () => {
  return (
    <section className='login'>
        <div className="--card">
            <h2>Login</h2>
            <div className="--form-control">
                <input type="email" placeholder='Email' />
                <div className="password">
                    <input type="password" placeholder='Password' />
                    <div className="icon">
                        <IoIosEye />
                    </div>
                </div>
                <button>Login</button>
            </div>
        </div>
    </section>
  )
}

export default Login;
