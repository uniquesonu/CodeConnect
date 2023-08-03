import React, { useEffect, useState } from 'react'
import Drawer from '../components/Drawer'
import MDEditor from '@uiw/react-md-editor';
import { addNotesToDB } from '../appwrite/appwriteConfig';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const [notes, setNotes] = useState("");
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const EditNotes = async(e) => {
        e.preventDefault();
        setLoading(true)
        
        setLoading(false)
        navigate("/+id")
        
    };
    useEffect(()=>{

    },[id])

  return (
    
        <form onSubmit={EditNotes} className="min-h-screen w-full flex flex-col p-4 py-16 lg:py-4 gap-4">
            <h1 className="text-3xl">Edit your Code/Notes</h1>
            <div className="form-control gap-2">
                <label htmlFor="title">Title*</label>
                <input 
                type="text" 
                id='title' 
                className='input border-white bg-base-200 max-w-lg' 
                placeholder='Enter your title'
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                </div>
                <div className="form-control gap-2">
                    <label htmlFor="code-connect">CodeConnect*</label>
                        <MDEditor 
                            value={notes} 
                            onChange={setNotes} 
                            preview='edit'
                            height={450}
                            visibleDragbar={false}
                            id='code-connect'
                            
                            />
                </div>
            <div className="grid grid-cols-2 max-w-xs gap-4">
                <button disabled={!notes} className={`btn btn-success ${loading ? "loading" : ""}`}>Save</button>
                <button className="btn btn-error" onClick={()=>navigate("/")}>Cancel</button>
            </div>
            
        </form>
    
  )
}

export default Edit