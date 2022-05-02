import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Routes } from "react-router-dom";

import { HomeContext } from "./context/HomeContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data,setdata]=useState([])
  const [total,settotal]=useState([])
  const [terminated,setterminated]=useState(0)
  const [promoted,setpromoted]=useState(0)
  const [newem,setnewem]=useState(0)
  const [status,setstatus]=useState(false)

  useEffect(()=>{
    axios.get("http://localhost:8080/employee")
    .then((res)=>{
    settotal(res.data.length)
    setdata(res.data)
    })

  },[newem])

  console.log(status)
  
  return (
    <HomeContext.Provider value={{total,terminated,setterminated,promoted,setpromoted
    ,newem,setnewem,data,setdata,status,setstatus}} >
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employees" element={<EmployeeList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/employees/:id" element={status?<EmployeeDetails/>:<ProtectedRoute/>} />
        <Route path="/admin" element={status?<Admin/>:<ProtectedRoute/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </div>
    </HomeContext.Provider>
  );
}

export default App;
