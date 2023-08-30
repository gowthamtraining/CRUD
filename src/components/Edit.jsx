import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
const Edit = (props) => {
    let param = useParams()
    const {Id} = param
    let indexId = Number(Id)
    let indexs =0
    props.data.map((item,index)=>{
        if(item.id===indexId){
            indexs+=index
        }
    })
    const [taskValue,setTaskValue] = useState({title:"",description:"",priority:"A",duedate:"",id:indexId})
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
        props.data[indexs] = taskValue
        setTaskValue({title:"",description:"",priority:"",duedate:""})
    }
    useEffect(()=>{
        let editdata = props.data.filter((item)=>item.id === indexId)
        setTaskValue({title:editdata[0].title,description:editdata[0].description,priority:editdata[0].priority,duedate:editdata[0].duedate})
    },[])
    console.log(taskValue)
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
        <button onClick={submitdata}>submit</button>
    </div>
        </div>
    
    </span>
    </div>
  )
}

export default Edit
