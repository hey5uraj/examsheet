import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterStyle from './Register.module.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signUp } from '../../services/userService';
// import { ToastContainer,toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })


  useEffect(() => {
  }, [data])

  const handleChange = (event, property) => {
    // console.log(event.target.value)
    setData({ ...data, [property]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    //call server api for sending data
    signUp(data).then((resp) => {
      console.log("sucess resiger");
      // toast.success("User is register Successfully")
      setData({
        name: '',
        email: '',
        password: '',
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
    {/* <ToastContainer/> */}
        <div className={RegisterStyle.mainPage}>
      <div className={RegisterStyle.container}>
        <div>
          <img src="https://res.cloudinary.com/da21yifxa/image/upload/v1702148433/Screenshot_2023-12-10_002116_e6v1jo.png" alt="" />
        </div>

        {/* { JSON.stringify(data)} */}
        <form action='/'
          onSubmit={handleSubmit}
          className={RegisterStyle.inputForm} >
          <div className={RegisterStyle.inputRow}>

            <input
              type="text"
              placeholder="Name"
              autoComplete="off"
              name='name'
              value={data.name}
              onChange={(e) => handleChange(e, 'name')}
              // onBlur={handleValidation}
            />
            {/* <span>{formErrors.email}</span> */}
          </div>
          <div className={RegisterStyle.inputRow}>

            <input
              type="email"
              placeholder="Email Address / Username"
              autoComplete="off"
              name='email'
              value={data.email}
              onChange={(e) => handleChange(e, 'email')}
            // onBlur={handleValidation}

            />
            {/* <span>{formErrors.email}</span> */}
          </div>
          <div className={RegisterStyle.inputRow} >
            <input
              // type="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              // autoComplete="off"
              name='password'
              value={data.password}
              onChange={(e) => handleChange(e, 'password')}
            // onBlur={handleValidation}

            />
            <div className={RegisterStyle.VisiblePass}>
              {showPassword ? (
                <VisibilityOff onClick={() => setShowPassword(false)} />
              ) : (
                <Visibility onClick={() => setShowPassword(true)} />
              )}
            </div>
          </div>


          <button type='button'
          //  onClick={(e) => {e.preventDefault(); toast("User registed sucessfully")}}
            className={RegisterStyle.formPrimarySubmit}>
            Register
          </button>

        </form>

        <p className={RegisterStyle.registerLink}>Home <Link to="/login">Login</Link> </p>


      </div>

    </div>
    </>

  )
}

export default Register
