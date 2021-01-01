import React from "react";
import "./style.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";
import Products from "./components/Products";
import Footer from "./components/Footer";
import {Context, ThemeContext} from "./context/ThemeContext";
import APIButton from "./components/APIButton";


export default function App() {
  return (
      <Context>
    <Router>
      <div>
      <Navbar/>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
           <Route path="/Products">
            <Products />
          </Route>
          <Route path="/">
          <Card />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
       <APIButton/>
     </Context>
  );
}
