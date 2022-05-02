import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

export const Login = () => {
  
  const {setstatus}=useContext(HomeContext)

  const handlesubmitt=()=>{
    setstatus(true)  
  }

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input onClick={handlesubmitt} type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
