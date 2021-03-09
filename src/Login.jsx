import React from 'react';
import {NavLink} from "react-router-dom";
const Login = () => {
return (
    <>
    
<div className="my-6">
   
    <h3 className="text-center">Login</h3>
    </div>
    <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form>
   <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="mt-3">

                    
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
<div class="btn-group mr-2" role="group" aria-label="First group">
<button type="button" class="btn btn-secondary">Login</button>

</div>
</div>

<div className="mt-3">
<div class="btn-group mr-2" role="group" aria-label="Second group">
<NavLink to="/Signup"><button type="button" class="btn btn-secondary">New Signup</button>
</NavLink>
</div>
</div>
</div>





            </form>

 </div>
        </div>
    </div>
   
    </>
    );
}
export default Login;