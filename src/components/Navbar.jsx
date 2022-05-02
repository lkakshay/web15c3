
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";


export const Navbar = () => {

const{status}=useContext(HomeContext)

  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      {status? ( <Link className="nav-logout" to="/logout">
                    Logout
                    </Link>)
                    :
                  (<Link className="nav-login" to="/login">
                   Login
                    </Link>)
      }
    </div>
  );
};
