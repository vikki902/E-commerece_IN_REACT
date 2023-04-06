import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import {login_context} from '../App';


const Login = () => {

  // React States
  
  const { loggedin , login_update} = useContext(login_context);
  const login = loggedin
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(loggedin);

  const logoutHandel= () =>{
    localStorage.setItem('loggedin',0);
    login_update(localStorage.getItem("loggedin"));
    setIsSubmitted(localStorage.getItem('loggedin'));


  }
  
    // User Login info
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
   
    const handleSubmit = (event) => {
      
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          localStorage.setItem('loggedin',1);
          setIsSubmitted(localStorage.getItem('loggedin'));
           login_update(localStorage.getItem("loggedin"));
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
        localStorage.setItem('loggedin',0);

        login_update(localStorage.getItem("loggedin"));
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

       // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname"  className='inpt' required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" className='inpt' required />
          {renderErrorMessage("pass")}
        </div>
        <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
        <div className="button-container">
          <input type="submit"  className='inpt-submit'/>
        </div>
      </form>
    </div>
  );

  return (
    <>
    <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted == 1 ? <div>User is successfully logged in <button onClick={logoutHandel}>logout</button></div> : renderForm}
      </div>
    </div>
      </div>
    </>
  )
}

export default Login
