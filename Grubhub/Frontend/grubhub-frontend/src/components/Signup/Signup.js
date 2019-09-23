import React, {Component} from 'react';
import './signup.css';

class Signup extends Component {
    render(){
        return(
             <div>      
            
                <div className='container'>
                <div className='jumbotron' id='format'>
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
          <button type="submit" className="btn btn-primary">Create your account</button>
          </form>
          <br></br>
          <p id='account'><font>Have an account? <a href='create-account'>Sign in</a></font></p>
                </div>
                </div>
                </div>
        )
    }
}

export default Signup;