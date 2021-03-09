import React from 'react';
import {NavLink} from "react-router-dom";
const Contact = () => {





    return (
    <>
    
    <div className="my-5">
    <h3 className="text-center">Contact US</h3>
    </div>
    <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form>

                <div class="mb-3">
                <label for="exampleFormControlInput1" 
                class="form-label">
                FullName
                </label>
                <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlTextarea1" 
            
                placeholder="Enter Your Name"
                />
                </div>

                <div class="mb-3">
                <label for="exampleFormControlInput1" 
                class="form-label">
                Phone
                </label>
                <input 
                type="number" 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                
                placeholder="Enter Your Mobile Number"
                />
                </div>

                <div class="mb-3">
                <label for="exampleFormControlInput" 
                class="form-label">
                Email address
                </label>
                <input 
                type="email" 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                
                placeholder="name@example.com"
                />
                </div>

                <div class="mb-3">
                <label for="exampleFormControlTextarea1" 
                class="form-label">
                Message
                </label>
                <textarea class="form-control"
                id="exampleFormControlTextarea1"
                rows="3">
                
                </textarea>
                </div>

                

                <div className="mt-3">

                      <NavLink to="Submit"  type="Submit" className="btn-get-started">Submit My Message
                      </NavLink>
                    </div><br/>
                

            </form>
        </div>
        </div>
    </div>
  
    </>
    );
}
export default Contact;