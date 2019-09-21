import React, {Component} from 'react';
import './login.css';

class Login extends Component {
    render(){
        return(
             <div >      
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="grubhub.com"><p><font color='red'><b>GRUBHUB</b></font></p></a>
                </nav>
                <div className='container'>
                <div className='jumbotron' id='format'>
                <form>
                    <h3><b>Sign in with your Grubhub account</b></h3>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-danger">Sign in</button>
</form>
<p id='account'><font><a href='signup'>Create your account</a></font></p>
                </div>
                </div>
                </div>
        )
    }
}
//Export The Main Component
export default Login;