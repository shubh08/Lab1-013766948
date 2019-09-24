import React, {Component} from 'react';
import './login.css';

class OwnerLogin extends Component {
    render(){
        return(
             <div >      
               <nav class="navbar navbar-default navbar-fixed-top">
        
        <div class="navbar-header">
          <a class="navbar-brand navbar-left logo" href="login"><p><font color="red"><b>GRUBHUB</b></font></p></a>
        </div>
      
    </nav>
                <div className='logincontainer'>
              
                <form>
                    <h3><b>Sign in with your Grubhub account</b></h3>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="pass">Password</label>
    <input type="password" className="form-control" id="pass" placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-danger">Sign in</button>
</form>
<p id='account'><font><a href='signup'><b>Create your account</b></a></font></p>
                
                </div>
                </div>
        )
    }
}

export default OwnerLogin;