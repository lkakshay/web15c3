import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

export const Admin = () => {
  const {setnewem,newem}=useContext(HomeContext)

  const [formdata ,setformdata]=useState({})

  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }

  const handletasks=(e)=>{
    let task= e.target.value.split(",")
    setformdata({...formdata,[e.target.name]:task})

    
  }

  const handlesubmitt=(e)=>{
    e.preventDefault()
    
    axios.post("http://localhost:8080/employee",formdata)
    .then((res)=>{
      console.log(res)
    })

    setnewem(newem+1)
  }

 
  return (
    <form className="createEmployee">
      <input onChange={handlechange} type="text" placeholder="Employee Name" name="employee_name" />
      <input onChange={handlechange} type="text" placeholder="Employee id" name="employee_id" />
      <select onChange={handlechange} name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input onChange={handlechange} type="number" placeholder="Salary" name="salary" />
      <input onChange={handlechange} type="text" placeholder="Image" name="image" />
      <input onChange={handlechange} type="text" placeholder="User Name" name="username" />
      <input onChange={handlechange} type="password" placeholder="Password" name="password" />
      <input onChange={handletasks}
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select onChange={handlechange} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={handlechange} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input onClick={ handlesubmitt} className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
