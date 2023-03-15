
import React from 'react'
import Trends from './Trends'
import MyPlaylist from './MyPlaylist'
import Shortcut from './Shortcut'
import FavouriteArtist from './FavouriteArtist'
import { HiSearch} from 'react-icons/hi'

const Content = ({ children }) => (
  <div
    className="Content">
    <div className='main'>
      <div className='img-div'>
        <HiSearch  className='i-search' />
        <input  className='search' placeholder='search' type="serch">
          </input> 
      </div>
      <Trends />
      <MyPlaylist />
      {children}
    </div>

    <div className='side'>
        <Shortcut />
      <FavouriteArtist />
    </div>

  </div>
)

export default Content