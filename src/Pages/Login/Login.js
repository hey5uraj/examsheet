import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginStyle from './Login.module.css';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginUser } from '../../services/userService';
import { doLogin } from '../../auth/auth';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [loginDetail, setLoginDetail] = useState({
        username: '',
        password: '',

        // backend formate naming
    })

    const handleChange = (event, field) => {

        let actualValue = event.target.value
        setLoginDetail({
            ...loginDetail, [field]: actualValue
        })
    }
    const handleFormSubmit = (event) =>{
         event.preventDefault();
         console.log(loginDetail);

         //validation
         if(loginDetail.username.trim()=='' || loginDetail.password.trim()){
            console.log("Username or Password is required")
         }

         //submit the data to server to generate token
         loginUser(loginDetail).then((data) => {
            console.log(data)
            console.log("login Sucess")

            //save the data to localstorage
            doLogin(data,()=>{
                console.log("login detail is saved to localstorage");
            })
         }).catch(error =>{
            console.log(error)
            if(error.status==400 || error.status==404){
                console.log(error.response.data.message)
            } else{
                console.log("Something went wrong on server !")

            }
         })
    }

    return (
        <div className={LoginStyle.mainPage}>
            <div className={LoginStyle.container}>
                <div>
                    <img src="https://res.cloudinary.com/da21yifxa/image/upload/v1702148433/Screenshot_2023-12-10_002116_e6v1jo.png" alt="" />
                </div>
                <form action='/'
                    onSubmit={handleFormSubmit}
                    className={LoginStyle.inputForm} >
                    <div className={LoginStyle.inputRow}>

                        <input
                            type="text"
                            placeholder="Email Address / Username"
                            autoComplete="off"
                            name='email'
                            value={loginDetail.username}
                            onChange={(e) => handleChange(e, 'username')}
                        // onBlur={handleValidation}

                        />
                        {/* <span>{formErrors.email}</span> */}
                    </div>
                    <div className={LoginStyle.inputRow} >
                        <input
                            // type="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            // autoComplete="off"
                            name='password'
                            value={loginDetail.password}
                            onChange={(e) => handleChange(e, 'password')}
                        // onBlur={handleValidation}

                        />
                        <div className={LoginStyle.VisiblePass}>
                            {showPassword ? (
                                <VisibilityOff onClick={() => setShowPassword(false)} />
                            ) : (
                                <Visibility onClick={() => setShowPassword(true)} />
                            )}
                        </div>
                    </div>


                    <button type='submit' className={LoginStyle.formPrimarySubmit}>
                        Login
                    </button>

                </form>

                <p className={LoginStyle.registerLink}>Don't have an account? <Link to="/">Sign up</Link> </p>


            </div>

        </div>
    )
}

export default Login
