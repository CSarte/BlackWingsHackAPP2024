import React, { useState } from 'react';
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();
  const [signInSuccess, setSignInSuccess] = useState(null); 


  function doLogin(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully logged in ${userCredential.user.email}!`)
        navigate('/Login')})
      .catch((error) => {
        setSignInSuccess(`There was an error logging in: ${error.message}!`)
      
      })
  }
  return (
    <div>
    {signInSuccess}
      <div>
        <h3>Log in</h3>
      </div>
      <form onSubmit={doLogin}>
        <textinput
          type='text'
          name='signInEmail'
          placeholder='Email' />
        <textinput
          type='password'
          name='signInPassword'
          placeholder='Password' />
         { <h6>Not registered? Register <Link to="/">here</Link></h6> }
       <button type= 'submit'>Log in!</button>
      </form>
    </div>
  );
}

export default Login
