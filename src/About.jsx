import React from 'react';
import web from "../src/image/Three.jpg";
import {NavLink} from "react-router-dom";
const About = () => {
    return (
        <>
        <section id="header" className="d-flex alig-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-contect-center flex-column">
                    <h1>
                    Reasons to love <strong className="brand-name"><br/>Floor & More</strong> 
                    </h1><br/>
                    <h2 className="my-3"> 
                    we are the team of interior design</h2>
                    <div className="mt-3">

                      <NavLink to="/contact" className="btn-get-started">Contact Now
                      </NavLink>
                    </div>
                    <div className="mt-3">

                      <NavLink to="" className="btn-get-started">Book Free Online Demo
                      </NavLink>
                    </div>

                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="About img"/>

                    </div>
                  </div>

                </div>
            </div>
        </div>

        </section>
        </>
    );
};

export default About;

