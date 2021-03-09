import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Login from "./Login";
import Signup from "./Signup"; 
import Footer from "./Footer";
import Wallpaper from "./Wallpaper";
import Sofa from "./Sofa";
import Interior from "./Interior";





const App =() => {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Service" component={Service}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/Login" component={Login}/>
    <Route exact path="/Signup" component={Signup}/>
    <Route exact path="/Wallpaper" component={Wallpaper}/>
    <Route exact path="/Sofa" component={Sofa}/>
    <Route exact path="/Interior" component={Interior}/>
    <Redirect to="/"/>

   
   
    </Switch>
    <Footer/>
    </>
  );
};

export default App;
