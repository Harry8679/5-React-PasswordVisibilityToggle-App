import React, { useState } from 'react';
import './Login.scss';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <section className='login --100vh --center-all'>
        <div className="--card --bg-light">
            <h2 className='--color-success'>Login</h2>
            <div className="--form-control mySpace">
                <input type="email" placeholder='Email' className='--width-100' />
                <div className="password">
                    <input type={!showPassword ? 'password' : 'text'} placeholder='Password' className='--width-100' />
                    <div className="icon" onClick={handleTogglePassword}>
                        {!showPassword ? (
                            <IoIosEye />
                        ): (
                            <IoIosEyeOff />
                        )}
                    </div>
                </div>
                <button className='--btn --btn-success --btn-block'>Login</button>
            </div>
        </div>
    </section>
  )
}

export default Login;
