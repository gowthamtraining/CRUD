import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const [data,setData] = useState({name:"",email:"",password:""})
    const [signup,setSignup] = useState(getItem())
    const changename=(e)=>{
        setData({...data,name:e.target.value})
    }
    const changeEmail=(e)=>{
        setData({...data,email:e.target.value})
    }
    const changePassword=(e)=>{
        setData({...data,password:e.target.value})
    }
    const submitData=()=>{
        const {name,email,password} = data
        if(name === ""){
          toast.error("name is empty")
        }
        else if(email==="" || !email.includes("@")){
          toast.error("email is wrong")
        }
        else if(password === "" || password.length<=5){
          toast.error("password is wrong")
        }
        else{
          setSignup([...signup,data])
          setData({name:"",email:"",password:""})
          toast.success("successfully registor")
        }   
    }
    const uniqueData = signup.filter((item, index, self) =>
    index === self.findIndex(obj => obj.name === item.name)
  );
  console.log(uniqueData)
    localStorage.setItem('userData',JSON.stringify(uniqueData))
      function getItem(){
        let item = localStorage.getItem('userData')
        if(item){
          return JSON.parse(item)
        }
        else{
          return []
        }
      }
    console.log(signup)
  return (
    <>
    <div className='flex h-screen justify-center items-center flex-col gap-3'>
      <h1 className=' text-[25px] border-b border-black border-solid pb-1'>Signup-Page</h1>
    <div className="border-black border border-solid rounded-md p-6 flex flex-col gap-3 w-[276px]">
    <div className=" flex flex-col gap-1">
      <label htmlFor="name" className=' '>Name: </label>  
      <input type="text" name="name" value={data.name} onChange={changename} className=' border-black border border-solid rounded-md' id="" /></div>
    <div className="flex flex-col gap-1">
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={data.email} onChange={changeEmail} id="" className='border-black border border-solid rounded-md' /></div>
    <div className="flex flex-col gap-1">
      <label htmlFor="password">Password: </label>
      <input type="password" onChange={changePassword} value={data.password} name='password' className='border-black border border-solid rounded-md'/></div>
      <div className="flex gap-3 justify-center">
      <button className='' onClick={submitData}>signup</button>
      <button className=''><Link to={"/"}>Login</Link></button>
      </div>
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Signup
