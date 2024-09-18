import React,{ useState } from 'react'
import {Link} from 'react-router-dom'


const MainPage = ()=> {
  //const backgroundImageUrl = 'https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <div>
        <Link to='/landing-page'>
          <button className='bg-blue-300'>Landing Page</button>
        </Link>
    </div>
  )
}

export default MainPage
