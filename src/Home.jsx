import React from 'react';
import web from "../src/image/two.jpg";
import {NavLink} from "react-router-dom";
const Home = () => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-contect-center flex-column">
                    <h1>
                    Make your Heaven with<strong className="brand-name"><br/>Floor & More</strong> 
                    </h1><br/>
                    <h2 className="my-3"> 
                    we are the team of interior designr</h2>
                    <div className="mt-3">

                      <NavLink to="/service" className="btn-get-started">Get started
                      </NavLink>
                    </div>

                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="home img"/>

                    </div>
                  </div>

                </div>
            </div>
        </div>

        </section>
        </>
    );
};
export default Home;