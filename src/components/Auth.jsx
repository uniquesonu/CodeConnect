import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../appwrite/appwriteConfig';
import {FcGoogle} from 'react-icons/fc'

function Auth({
  title, 
  description, 
  button,
  bottomQn,
  bottomLabel,
  bottomLink,
  email,
  password,
  setEmail,
  setPassword,
  name,
  setName
}){
  const navigate = useNavigate();
  const handleGoogle = async() =>{
    account.createOAuth2Session(
      'google',
      "http://localhost:5173",
      "http://localhost:5173/login"
      );
    
  }
  useEffect(()=>{
    const user = account.get();
    user.then(()=>{
      navigate('/')
    }).catch()
  },[navigate])
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">
        {description}
      </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        {setName && <div className="form-control">
          <label className="label">
            <span 
            className="label-text">
              Name: 
              </span>
          </label>
          <input 
          type="text" 
          placeholder="Enter your name" 
          className="input input-bordered" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>}
        <div className="form-control">
          <label className="label">
            <span 
            className="label-text">
              Email: 
              </span>
          </label>
          <input 
          type="email" 
          placeholder="Enter your email" 
          className="input input-bordered" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span 
            className="label-text">
              Password: (Min 8 characters)
              </span>
          </label>
          <input 
          type="password" 
          placeholder="Enter your Password" 
          className="input input-bordered" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        
        {button}
        <span className='text-center'>or</span>
        <button className='btn btn-neutral' onClick={handleGoogle}><span className='flex text-center items-center gap-2'><FcGoogle size={24}/> Login with Google</span></button>
        <span className='text-center'>
          {bottomQn}
          <br />
          <Link to={bottomLink} className='link'>{bottomLabel}</Link>
        </span>
       

      </div>
    </div>
  </div>
</div>
  )
}

export default Auth