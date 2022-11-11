import React, { useEffect, useState } from "react";
import { Link , useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [verticalNav, setVerticalNav] = useState(false);

  const location = useLocation();

  useEffect(()=>{
    setVerticalNav(false);
  },[location]);

  return (
    <div className="navbar" id={verticalNav ? "open" : "close"}>
      <div className="toggleButton">
        <button 
        onClick={ () => {
             setVerticalNav( (prev) => !prev);
             }}>
          <ReorderIcon></ReorderIcon>
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
