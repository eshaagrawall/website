import React from "react";
import { NavLink } from "react-router-dom";


const card = (props) =>{
    return(
        <>
       <div className="col-md-4 col-10 mx-auto">
            <div className="card">
            <div className="cards">
          <div class="row">
                <img src={props.imgsrc} className="card_img"  alt="Card image cap"/>
                    <div className="card-body">
                    <div class="center">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.p}</p>
                        <NavLink to={props.NavLink}><button>Click For More</button></NavLink>
                        </div>
                        </div>
                        </div>
                        </div>
            </div>
        </div>
        </>
    );
};
               


                        
                          
                    
export default card;






       