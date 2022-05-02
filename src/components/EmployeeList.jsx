import { useContext} from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "../context/HomeContext";

export const EmployeeList = () => {
  
const{data} =useContext(HomeContext)
 
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}

      {data.map((e)=>{

        return( 
        <Link to={`/employees/:${e.id}`}  key={e.id} >
        <div className="employee_card" >
        <img src={e.image} alt="" className="employee_image" />
        <span  className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div>
      </Link>)
      })}
      

    </div>
  );
};
