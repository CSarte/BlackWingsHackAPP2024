import React,{useState} from 'react';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
  return (
    <div className='sign-in-container'>
      <form>
        <h1>Log In</h1>
        <input 
          type ="email" 
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input 
          type ="password" 
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        ></input>
        <button type = "submit">Log in</button>
      </form>
    </div>
  );
};

export default SignIn;
