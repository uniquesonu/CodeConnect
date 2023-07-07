import React, { useState } from 'react'
import Drawer from '../components/Drawer'
import MDEditor from '@uiw/react-md-editor';
import { addNotesToDB } from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [notes, setNotes] = useState("**Welcome to CodeConnect!**");
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const createNotes = async(e) => {
        e.preventDefault();
        setLoading(true)
        const response = await addNotesToDB({
            title: title,
            codeconnect: notes
        });
        if(!response){
            alert("Unable to create! Try again or try logging in again")
            setLoading(false)
            return;
        }
        setLoading(false)
        navigate("/")
        
    };

  return (
    <Drawer>
        <form onSubmit={createNotes} className="min-h-screen w-full flex flex-col p-4 py-16 lg:py-4 gap-4">
            <h1 className="text-3xl">Create your Code/Notes</h1>
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
                <button className="btn btn-error">Cancel</button>
            </div>
            
        </form>
    </Drawer>
  )
}

export default Create