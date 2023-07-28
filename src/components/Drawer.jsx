import React, { useEffect, useState } from 'react'
import { MdLogout, MdMenu } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { account, database } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Drawer({children}) {
  const [notesTitle,setNotesTitle] = useState([])
  const navigate = useNavigate();
  const logout = () =>{
    const user = account.get()
    const promise = account.deleteSession('current')
    promise.then(()=>{
      navigate('/landing')
    }
    ).catch(err=>{
      alert(err);
    })
    
  }

      const user = await getCurrUser();
      const promise = database.listDocuments(
        "64a6153ba681e8b32e3d",
        "64a616860b18b3ad068f",
        [Query.equal("owner", user)]
      );
      const res = await promise;
      setNotesTitle(res.documents);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotesData();
  }, [navigate, fetchingData]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]);

>>>>>>> 5608d44 (data bases added)
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
        <Link to={"/create"} className="btn btn-primary">
            <FaPlus size={18}/>
            <span>Create</span>
          </Link>
          <hr />

          {/* Lists of data */}
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-4">
            {loading ? (
              <div className="flex self-center">Loading...</div>
            ) : (
              notesTitle.map((title) => (
                <li key={title.$id} className="bg-base-100 rounded-lg">
                  <Link to={"/" + title.$id}>{title.title}</Link>
                </li>
              ))
            )}
          </div>
          <div className="mt-auto">
            <div className="form-control block">
              <label htmlFor="theme" className="block font-bold mb-2">
                Select Theme:
              </label>

        {
          notesTitle.map((title)=>{
            return(
              <li key={title.$id} className='bg-base-100 rounded-lg'>
            <Link to={"/"+title.$id}>{title.title}</Link>
            
        </li>
            )
          })
        }

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

export default Drawer;
