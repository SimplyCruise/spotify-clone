import React from 'react'
import {  HiMusicNote, HiPause, HiRefresh, HiRewind , HiHeart,  HiOutlineVolumeUp, HiFastForward  } from 'react-icons/hi'


const Playbar = ({ children }) => (
  <div
    className="playbar">
      <div className='icons'>
        <div className='i-1'>
         <HiHeart className='heart'/>
        <HiMusicNote className='music'/> 
        </div>

        <div className='i-2'>
        <HiRefresh className='refresh'/>
          <HiFastForward className='foward' />
        <HiPause className='pause'/>
        <HiRewind className='rewind' />
        </div>
        
        <div className='i-3'>
        <HiOutlineVolumeUp className='volume'/>
        </div>
      </div>
    {children}
  </div>
)

export default Playbar