import React from 'react'
import {Link} from 'react-router-dom'

import '../App.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='nav'>
        <Link className='homeLink' >FinMate</Link>
        <div className='navbar'>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/Blogs"}>Blogs</Link>
        </div>
      </div>
    </div>
  )
}

export default Header