
import React from 'react'
import Trends from './Trends'

const Content = ({ children }) => (
  <div
    className="Content">
      <div className='img-div'>
        <div></div>
      <input className='search' placeholder='search' type="serch" />
      </div>
      <Trends />
    {children}
  </div>
)

export default Content