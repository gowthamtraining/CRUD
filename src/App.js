import './App.css';
import { BrowserRouter as Router,Routes, Route, Navigate} from "react-router-dom"
import Data from "./components/Data"
import List from "./components/List"
import Edit from "./components/Edit"
import { useEffect, useState } from 'react';
import Navbar from './components/Header';
import Login1 from "./components/Login1";
import "./components/Data.css"
import Signup from './components/Signup';
import Header from './components/Header';
function App() {
  const [task,SetTask] = useState(getItem())
  const [islogin,setlogin] = useState(localStorage.getItem('login') === 'true')
  console.log(islogin)
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(task))
  },[task])
  useEffect(()=>{
    localStorage.setItem('login',islogin)
  },[])
  function getItem(){
    let item = localStorage.getItem('list')
    if(item){
      return JSON.parse(item)
    }
    else{
      return []
    }}
  return(
    <Router>
      <Routes>
        <Route path='/header' element={islogin?<Header login = {setlogin}></Header>:<Navigate to="/"/>}></Route>
        <Route path='/add' element ={islogin ?<Data setData = {SetTask} data ={task} ></Data>:<Navigate to="/"/>}/>
        <Route path='/list' element={islogin ?<List data = {task} setData ={SetTask}></List>:<Navigate to="/"/>}></Route>
        <Route path='/edit/:Id' element={islogin ?<Edit data = {task}></Edit>:<Navigate to="/login"/>}></Route>
        <Route path='/' element={!islogin?<Login1 login = {setlogin}/>:<Navigate to ="/header"/>}/>
        <Route path='/signup' element ={!islogin?<Signup/>:<Navigate to ="/header"/>}/>
      </Routes>
    </Router>
  )
}
export default App;
