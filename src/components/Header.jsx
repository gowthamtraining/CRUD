import React from 'react'
import { BrowserRouter as Router,Routes, Route,Link} from "react-router-dom"
import "./Navbar.css"
import Navbar from "./Navbar"
const Header = () => {
  return (
    <div className='NavbarMain'>
      <div className='main-content'>
          <Navbar></Navbar>
      </div>
      <div className="h1"><h1 className='h1'>This is my first project1</h1></div>
    </div>
  )
}

export default Header
