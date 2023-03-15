import React from 'react'
import Playbar from './Components/Playbar'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'

const App = () => (
  <div className='layout'>
    <Sidebar />
    <Content />
    <Playbar />
  </div>
)



export default App

