import React, { useEffect, useState } from 'react'
import "./Data.css"
import Navbar from './Navbar'
import { BrowserRouter as Router,Routes, Route,Link, useNavigate, Navigate} from "react-router-dom"
const Data = (props) => {
    const [taskValue,setTaskValue] = useState({title:"",description:"",priority:"A",duedate:""})
    function setttitlevalue(e){
        setTaskValue({...taskValue,title:e.target.value})
    }
    function setdescriptionValue(e){
        setTaskValue({...taskValue,description:e.target.value})
    }
    function setpriorityvalue(e){
        setTaskValue({...taskValue,priority:e.target.value})
    }
    function setdateValue(e){
        setTaskValue({...taskValue,duedate:e.target.value})
    }
    function submitdata(){
        props.setData([...props.data,{...taskValue,id:new Date().getUTCMilliseconds()}])
        if(taskValue.title==="" || taskValue.description===""||taskValue.priority===""||taskValue.duedate===""){
            alert(`kindly enter value`)
        }

        setTaskValue({title:"",description:"",priority:"",duedate:""})
    }
    const navigate = useNavigate()
    useEffect(()=>{
        if(props.login === false){
            navigate("/")
        }
        console.log(props.login)
        
    },[])
  return (
    <div className='header'>
        <Navbar></Navbar>
    <span className='taskManagement'>
        <h1>AddBlock:</h1>
        <div className="addcontent">
        <div className="title">
        <label htmlFor="">Title: </label>
        <input type="text" name="" id="" value={taskValue.title} onChange={setttitlevalue}/>
    </div>
    <div className="description">
        <label htmlFor="">Description: </label>
        <textarea name="" id="" cols="30" rows="10" value={taskValue.description} onChange={setdescriptionValue}></textarea>
    </div>
    <div className="priority">
        <label htmlFor="">priority: </label>
        <select value = {taskValue.priority} onChange={setpriorityvalue}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
    </div>
    <div className="duedate">
        <label htmlFor="">Due-Date: </label>
        <input type="date" name="" id="" value={taskValue.duedate} onChange={setdateValue}/>
    </div>
    <div className="submit">
        <Link to="/list" ><button onClick={submitdata}>submit</button></Link>
    </div>
        </div>
    
    </span>
    </div>
  )
}

export default Data
