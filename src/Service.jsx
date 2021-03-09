import React from 'react';
import { NavLink } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Service = () => {
    return(
        <>
        <div className="center">
        <h1 className="text_center text-danger text-capitalize my-5"> Our Product</h1>
        <div className="container">
            <div className="row">
                <div className="col-sm"><div class="card">
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoaf4BGOT1BI0zTWHLTN4eA-pk9Eko4WTEo8pCIcYQbPCTvvprbHHqxATgHA&usqp=CAc" alt="..." height="200px"/>
                    <div class="card-body">
                    <h5 class="card-title">Wallpaper</h5>
                    <p class="card-text">Custmize wallpaper also.</p>
                    <NavLink to="/Wallpaper" class="btn btn-primary">Wallpaper</NavLink>
                    </div>
                </div></div>
                
                <div className="col-sm"><div class="card">
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNx1-Nv5rN3eOylmSXppAvIeInHIbVI_TF3c7pkHN5IMtpSnxpqUeDFhKuw&usqp=CAc" alt="..." height="200px"/>
                    <div class="card-body">
                    <h5 class="card-title">Sofa, Dining, Tables..</h5>
                    <p class="card-text">All types of sofas, tables..</p>
                    <NavLink to="/sofa" class="btn btn-primary">Furniture</NavLink>
                    </div>
                </div></div>
                
                <div className="col-sm"><div class="card">
                    <img class="card-img-top" src="https://cdn.vox-cdn.com/thumbor/_5SfnVsoGON8KposzQwHkdx1ZTY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11545893/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.jpg" alt="..." height="200px"/>
                    <div class="card-body">
                    <h5 class="card-title">Interior & Exterior</h5>
                    <p class="card-text">home decorative service</p>
                    <NavLink to="/Interior" class="btn btn-primary">Our project</NavLink>
                    </div>
                </div></div>
            </div></div>
        </div>

        </>
    );
};


export default Service;