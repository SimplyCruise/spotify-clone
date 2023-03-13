import React from 'react';
import { useState } from 'react';

import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
//import logo from '../../img/spotify-white.png'

const Sidebar = ({ children }) => (
  <div className="Sidebar">
    <div className='sidebar-nav'>
      <div className='first-nav'>
        <li> Home</li>
        <li>Trends</li>
        <li>Feeds</li>
      </div>

      <div className='discover-nav'>
        <li> New and Notables </li>
        <li> release and calender</li>
        <li> Events</li>
      </div>

      <div className='col-nav'>
  <li> Liked Songs </li>
        <li> Playlist</li>
        <li>Albums</li>
      </div>
    </div>
    {children}
  </div>
)

export default Sidebar