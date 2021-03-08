import React from 'react';
const Signup = () => {
  
    return (
        <>
        <div className="my-6">
        <h3 className="text-center">Signup</h3>
        </div>
        <div className="container contact_div">
            <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form>


            
  <div class="form-row">
  <div class="form-group col-md-6">
  <label for="inputName">First name</label>
  <input type="text" class="form-control" placeholder="First name"/>
  </div>
  <div class="form-group col-md-6">
  <label for="inputName">Last name</label>
  <input type="text" class="form-control" placeholder="Last name"/>
  </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>





                </form>
        </div>
        </div>
    </div>
    
    </>
    );
}








export default Signup;