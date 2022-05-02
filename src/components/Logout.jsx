import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

export const Logout = () => {

  const {setstatus}=useContext(HomeContext)

  const change=()=>{
    setstatus(false)

  }
  // log user out. it's just an inmemory value in context api
  return <div><button onClick={change}>Logout</button></div>;
};
