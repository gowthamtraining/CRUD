import './App.css';
import { BrowserRouter as Router,Routes, Route,Link, Navigate, useNavigate} from "react-router-dom"
import Data from "./components/Data"
import List from "./components/List"
import Edit from "./components/Edit"
import { useEffect, useState } from 'react';
import Navbar from './components/Header';
import Login1 from "./components/Login1";
import "./components/Data.css"
import Signup from './components/Signup';
function App() {
  const [task,SetTask] = useState(getItem())
  const login = localStorage.getItem("login")
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(task))
  },[task])
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
        <Route path='/header' element={login ?<Navbar></Navbar> : <Navigate to="/"/>}></Route>
        <Route path='/add' element ={login ?<Data setData = {SetTask} data ={task} login ={login}></Data>:<Navigate to="/"/>}/>
        <Route path='/list' element={login ?<List data = {task} setData ={SetTask}></List>:<Navigate to="/"/>}></Route>
        <Route path='/edit/:Id' element={login ?<Edit data = {task}></Edit>:<Navigate to="/"/>}></Route>
        <Route path='/' element={!login?<Navigate to="/header"/>:<Login1  />}/>
        <Route path='/signup' element ={!login?<Navigate to="/header"/>:<Signup/>}/>
      </Routes>
    </Router>
  )
}
/*setIsLoggedIn={setIsLoggedIn} isLoggedIn ={isLoggedIn}*/

export default App;
