
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";


export const EmployeeDetails = () => {

  const{terminated,setterminated,promoted,setpromoted}=useContext(HomeContext)

  const input=useParams()
  const search=input.id.split(":")
  
  const [data,setdata]=useState({})
  const [tasks,settasks]=useState([])
  useEffect(()=>{
    
    axios.get(`http://localhost:8080/employee?id=${search[1]}`)
    .then((res)=>{
       setdata(res.data[0])
       settasks(res.data[0].tasks)
    })

  },[search])

  const promote=()=>{
    setpromoted(promoted+1)
  }

  const fire=()=>{
    setterminated(terminated+1)
  }
 

  return (
    <div className="user_details">
      <img src={data.image} alt="" className="user_image" />
      <h4 className="user_name">{data.employee_name}</h4>
      <span className="user_salary">${data.salary}</span>
      <span className="tasks">
        {tasks.map((e)=>{
          return(
            <li className="task" key={e}>{e}</li>
          )
        })}
        
      </span>
      Status: <b className="status">{data.status}</b>
      Title: <b className="title">{data.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      { data.status==="working"? <button onClick={fire} className="fire">Fire Employee</button>:<></>}
     
      {/* Show this button only if user is not already team lead or terminated */}
      {data.status==="terminated" ||data.title==="Team Lead"?<></>:<button onClick={(promote)} className="promote">promote</button>}
      
    </div>
  );
};
