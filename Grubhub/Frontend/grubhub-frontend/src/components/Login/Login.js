import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import './login.css';

class Login extends Component {
    render(){
        return(
             <div >      
            
                <div className='container'>
                <div className='jumbotron' id='format'>
                <form>
                    <h2><b>Sign in with your Grubhub account</b></h2>
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
<p id='account'><font><a href='create-account'><b>Create your account</b></a></font></p>
                </div>
                </div>
                </div>
        )
    }
}

export default Login;