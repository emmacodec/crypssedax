import React from 'react';
import {CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon} from '@heroicons/react/solid';
import BackGrnd from '../assets/computer.jpg';

const Main = () => {
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl'>Breath-taking algorithm and Matching</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>CloudStore Management</h1>
            <p className='text-2xl'>This is my brand</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>

        <div>
            <img className='w-full' src={BackGrnd} alt='/' />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform 
        md:-translate-x-1/2 bg-zinc-300 border border-slate-300 rounded-xl text-center shadow-xl'>
            <p>Data Services</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' />Icons, App security</p>
                <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' />Icons, DashBoard</p>
                <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' />Icons, Cloud Data</p>
                <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' />Icons, API</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
