import React from "react";
import {ThemeContext} from "../context/ThemeContext";

function APIButton(props) {
  const themeContextAPI = React.useContext (ThemeContext);
  const {toggleTheme} = themeContextAPI;

  return (
    <div> <button type="button" className="btn btn-dark" onClick={toggleTheme}>off
    </button> 
      <div> <button type="button" className="btn btn-light" onClick={toggleTheme}>on
    </button> </div> </div>
     
  );    
}


export default APIButton;