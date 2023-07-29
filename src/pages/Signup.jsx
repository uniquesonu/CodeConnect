import React, { useState } from 'react'
import Auth from '../components/Auth'
import { Account, ID } from 'appwrite'
import { account, client } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom'

const SingupBtn = ({onClick}) =>{
  return (
    <button onClick={onClick} className="btn btn-primary">Signup</button>
  )
}



export default function Signup() {
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  const createAccount = async() =>{
    const promise = account.create(
      ID.unique(),
      email,
      password,
      name
  );

  promise.then((response)=>{
    console.log(response)
    navigate('/login')
  }).catch(err=>{
    alert(err)
  })
  }
  

  return (
    <Auth 
    title={"Create an account"} 
    description={"Sign Up to Unlock Unlimited Coding Collaboration and Learning!"} 
    button={<SingupBtn onClick={createAccount}/>}
    bottomQn={"Already have an account?"}
    bottomLabel={"Login Instead"}
    bottomLink={"/login"}
    email={email}
    password={password}
    setEmail={setEmail}
    setPassword={setPassword}
    name={name}
    setName={setName}
    />
  )
}