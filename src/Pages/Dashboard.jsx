import React from 'react'
import Drawer from '../components/Drawer'
import { FaLaptopCode } from 'react-icons/fa'

function Dashboard() {
  return (
    <Drawer>
        <div className='min-h-screen flex flex-col items-center justify-center text-primary-content text-center gap-4 p-4 '>
        <FaLaptopCode size={108} className='mx-auto'/>
            <h1 className="mb-5 text-5xl font-bold">Hello, Sonu👋🏻</h1>
            <p>
            Start by creating/opening a new CodeConnect.
            </p>
        </div>
    </Drawer>
  )
}

export default Dashboard