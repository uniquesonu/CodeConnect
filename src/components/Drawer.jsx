import React from 'react'
import { MdLogout, MdMenu } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom'

function Drawer({children}) {
  const navigate = useNavigate();
  const logout = () =>{
    const user = account.get()
    const promise = account.deleteSession('current')
    promise.then(()=>{
      navigate('/landing')
    }
    ).catch(err=>{
      alert(err)
    })
    
  }
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {children}
    <label htmlFor="my-drawer-2" className="absolute top-2 left-2 btn btn-ghost rounded-full drawer-button lg:hidden">
        <MdMenu size={32}/>
    </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 gap-4 h-full bg-base-200 text-base-content">
      {/* Create Button */}
        <button className="btn btn-primary">
            <FaPlus size={18}/>
            <span>Create</span>
        </button>
        <hr />

      {/* Lists of data  */}
        <li className='bg-base-100 rounded-lg'>
            <a>index.html</a>
        </li>

        <li className='bg-base-100 rounded-lg'>
            <a>index.html</a>
        </li>

        <li className='bg-base-100 rounded-lg'>
            <a>index.html</a>
        </li>

        <li className='bg-base-100 rounded-lg'>
            <a>index.html</a>
        </li>

        <li className='bg-base-100 rounded-lg'>
            <a>index.html</a>
        </li>

        <li className='bg-base-100 rounded-lg'>
            <a>index.html</a>
        </li>

        {/* logout button */}
        <button onClick={logout} className="btn btn-error mt-auto">
          <MdLogout size={24}/>
          <span>Logout</span>
        </button>
    </ul>
  
  </div>
</div>
  )
}

export default Drawer