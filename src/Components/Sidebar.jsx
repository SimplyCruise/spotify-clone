import React from 'react';
import img from '../img/burna.jpeg'
import { HiOutlineHashtag, HiOutlineHeart, HiOutlineHome, HiOutlinePhotograph,} from 'react-icons/hi';
//import logo from '../../img/spotify-white.png'

const Sidebar = ({ children }) => (
  <div className="Sidebar">
    <div className='sidebar-nav'>
      <div className='first-nav'>
        <div className='home'>
          <HiOutlineHome className='icon' />
          Home
        </div>

        <div className='trends'>
          <HiOutlineHashtag className='icon' />
          Trends
        </div>

        <div className='liked'>
          <HiOutlineHeart className='icon' />
          Liked Songs
        </div>

         <div className='liked'>
          <HiOutlinePhotograph className='icon' />
          Playlist
        </div>

      </div>
    </div>

    <img src={img} alt="" />
    {children}
  </div>
)

export default Sidebar