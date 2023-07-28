import React, { useState } from 'react'
import Auth from '../components/Auth'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom'

const LoginBtn = ({onClick}) =>{
  return (
    <button onClick={onClick} className="btn btn-primary">Login</button>
  )
}

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();
  const loginAccount=async()=>{
    const promise = account.createEmailSession(
      email,
      password
  );
  promise.then((response)=>{
    navigate('/');
  }).catch(err=>{
    alert(err)
  });
  
  }
  return (
    <Auth 
    title={"Login Now"} 
    description={"Log In to Access Your Collaborative Coding Experience!"} button={<LoginBtn onClick={loginAccount}/>}
    bottomQn={"Didn't have an account?"}
    bottomLabel={"Signup Instead"}
    bottomLink={"/signup"}
    email={email}
    password={password}
    setEmail={setEmail}
    setPassword={setPassword}
    />
  )
}

export default Login