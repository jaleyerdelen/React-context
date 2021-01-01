import React from 'react'
import {Link} from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";  
import APIButton from "./components/APIButton";

export default function Navbar(props){
const themeContextAPI = React.useContext(ThemeContext);
const {bgColor, textColor, btnColor} = 
themeContextAPI.themeObj;

  return(
     <div className={[bgColor, textColor, "mb-5"].join(" ")}>
<nav className={`navbar navbar-expand-lg navbar-light bg-light ${bgColor}`}>
  <div className="container-fluid">
  
    <a className="navbar-brand" href="#">Navbar </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="./" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="./About" className="nav-link active" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
          <Link to="./Products" className="nav-link active" aria-current="page">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="./Contact" className="nav-link active" aria-current="page">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
)
}