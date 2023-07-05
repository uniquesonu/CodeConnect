import React, { useEffect } from 'react';
import {FaLaptopCode} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwriteConfig';

function Landing() {
  const navigate = useNavigate();
  useEffect(()=>{
    const user = account.get();
    user.then(()=>{
      navigate('/')
    }).catch()
  },[navigate])
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: 'url(https://i.imgur.com/l3pRctb.jpg)' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white bg-black p-8 rounded-xl bg-opacity-50 backdrop-blur-sm flex flex-col gap-2">
            <FaLaptopCode size={108} className='mx-auto'/>
            <h1 className="mb-5 text-5xl font-bold">CodeConnect</h1>
            <p>
            A Sharable Code Community for Developers Worldwide.
            </p>
            <Link to={"/signup"} className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
