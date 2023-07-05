import React, { useEffect, useState } from 'react'
import Drawer from '../components/Drawer'
import { FaLaptopCode } from 'react-icons/fa'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [name, setName] = useState("User")
  const navigate = useNavigate();
  useEffect(()=>{
    const user = account.get();
    user.then((res=>{
      setName(res.name)
    })).catch(()=>{
      navigate('/landing')
    })
  },[navigate])
  return (
    <Drawer>
        <div className='min-h-screen flex flex-col items-center justify-center text-primary-content text-center gap-4 p-4 '>
        <FaLaptopCode size={108} className='mx-auto'/>
            <h1 className="mb-5 text-5xl font-bold">Hello, {name}👋🏻</h1>
            <p>
            Start by creating/opening a new CodeConnect.
            </p>
        </div>
    </Drawer>
  )
}

export default Dashboard