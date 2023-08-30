import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, json, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
function Login1(){
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const navigate = useNavigate()
    function changelogin(){
        const data = localStorage.getItem('userData')
        const userdata = JSON.parse(data)
        if(userdata && userdata.length){
          let filter = userdata.filter((item,index)=>{
            return item.email === email && item.password === password  
          })
          if(filter.length){
            localStorage.setItem("login",true)
            navigate("/header")
            toast.success("login successfull")
          }
          else{
            toast.error("login unsuccessfull")
          }
        }
    }
  return (
    <>
    <div className='flex h-screen justify-center items-center flex-col gap-3'>
      <h1 className=' text-black text-[24px] border-b border-black border-solid pb-1'>Login-Page</h1>
    <div className="border-black border border-solid rounded-md p-6 flex flex-col gap-3">
    <div className=" flex flex-col gap-1">
      <label htmlFor="email" className=' '>Email: </label>  
      <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className=' border-black border border-solid rounded-md' id="" /></div>
    <div className="flex flex-col gap-1">
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="" className='border-black border border-solid rounded-md' /></div>
      <div className="flex gap-3 flex-col">
      <button className='self-center' onClick={changelogin}><Link to={"/"}>Login</Link></button>
      <p>Don't have an account?  <Link to={"/signup"} className=' text-blue-900'>Sign-Up</Link></p>
      </div>
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Login1