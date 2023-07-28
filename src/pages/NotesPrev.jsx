import React, { useEffect, useState } from 'react'
import Drawer from '../components/Drawer'
import { useNavigate, useParams } from 'react-router-dom'
import { database } from '../appwrite/appwriteConfig';
import MDEditor from '@uiw/react-md-editor';
import { FaLink } from 'react-icons/fa';

const NotesPrev = () => {
  const [notes,setNotes] = useState({})
  const navigate = useNavigate();
  const {id} = useParams();

  const deleteNotes = () => {
    const isConfirm = confirm("Are you sure do you want to delete?")
    if(!isConfirm) return;
    const promise = database.deleteDocument(
      '64a6153ba681e8b32e3d',
      '64a616860b18b3ad068f',
      id
    )
    promise.then(()=>{
      alert("Your document deleted successfully")
      navigate('/')
    }).catch(err=>{
      alert(err)
    })
  }

  useEffect(()=>{
    const promise = database.getDocument(
      '64a6153ba681e8b32e3d',
    '64a616860b18b3ad068f',
    id
    );
    promise.then((response)=>{
      setNotes(response)
    }).catch(()=>{
      alert("Unable to find that document")
      navigate("/")
    })
  },[id,navigate])
  return (
    
        <div className="min-h-screen w-full flex flex-col p-4 py-16 lg:py-4 gap-4">

            <h1 className='text-3xl flex gap-2 items-end'><span>{notes.title}</span> 
            <button 
            onClick={()=>{
              navigator.clipboard.writeText(window.location.href)
              alert("Link copied to your clipboard")
            }} 
            className='btn btn-ghost rounded-full btn-sm'>
              <FaLink />
              </button></h1>
            <div className="div flex-1 bg-base-200 p-4 rounded-md ">
              <MDEditor.Markdown 
              source={notes.codeconnect}
              style={{background: 'transparent',fontSize: '24px'}}
              />
            </div>
            <div className="grid grid-cols-2 max-w-xs gap-4">
                <button disabled={!notes} className={`btn btn-warning`}>Edit</button>
                <button onClick={deleteNotes} className="btn btn-error">Delete</button>
            </div>
        </div>
  )
}

export default NotesPrev