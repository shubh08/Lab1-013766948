import React, {Component} from 'react';
import './signup.css';

class OwnerSignup extends Component {
    render(){
        return(
             <div>      
               <nav class="navbar navbar-default navbar-fixed-top">
        
        <div class="navbar-header">
          <a class="navbar-brand navbar-left logo" href="login"><p><font color="red"><b>GRUBHUB</b></font></p></a>
        </div>
    </nav>
                <div className='logincontainer'>
                
                    <form>
                    <h2><b>Create your account</b></h2>
                <div className="form-row">
    <div className="form-group col-md-6">
    <label for="fname">First name</label>
      <input type="text" class="form-control" id="fname" placeholder="First name" required/>
    </div>

    <div className="form-group col-md-6">
    <label for="lname">Last name</label>
      <input type="text" class="form-control" id="lname" placeholder="Last name"  required/>
    </div>
</div>
      <div className="form-group">
          <label for="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
          </div>      

          <div className="form-group">
          <label for="pass">Password</label>
      <input type="password" className="form-control" id="pass" placeholder="Password" required/>
          </div>  
          <div className="form-group">
    <label for="restname">Restaurant Name</label>
    <input type="text" className="form-control" id="restname" placeholder="Enter Restaurant Name" required/>
  </div>
  <div className="form-group">
    <label for="zip">Zipcode</label>
    <input type="number" className="form-control" id="zip" placeholder="Zip Code" required/>
  </div>
          <button type="submit" className="btn btn-primary">Create your account</button>
          </form>
          <br></br>
          <p id='account'><font>Have an account? <a href='login'>Sign in</a></font></p>
          <p class="u-text-center caption"><span>By creating your Grubhub account, you agree to the</span> <a href="/legal/terms-of-use" target="_blank" rel="noopener">Terms of Use</a> <span>and</span> <a href="/legal/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>.</p>
                </div>
                </div>
        )
    }
}

export default OwnerSignup;