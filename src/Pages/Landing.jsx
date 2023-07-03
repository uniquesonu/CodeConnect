import React from 'react';
import {FaLaptopCode} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Landing() {
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
            <button className="btn btn-primary"><Link to='/'>Get Started</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
