import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes, Route,Link,useNavigate} from "react-router-dom"
import { useState } from 'react';
const Navbar = (props) => {
  const navigate = useNavigate()
  function logout(){
    localStorage.removeItem('login')
    navigate("/")
    props.login(false)
  }
  return (
    <div className='navabar'>
            <h1>TaskManagement-App</h1>
            <div className="button">
            <Link to ="/add"><button>add</button></Link>
            <Link to ="/list"><button>list</button></Link>
            <button onClick={logout}>Logout</button>
            </div>
    </div>
  )
}

export default Navbar
