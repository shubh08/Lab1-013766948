import React, {Component} from 'react';
import './signup.css';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'
class Signup extends Component {


    render(){

        const dataSignup ={
            fname:this.props.fname,
            lname:this.props.lname ,
            email: this.props.email,
            pass: this.props.pass
        }

        return(
             <div>      
               <nav class="navbar navbar-default navbar-fixed-top">
        
        <div class="navbar-header">
          <a class="navbar-brand navbar-left logo" href="login"><p><font color="red"><b>GRUBHUB</b></font></p></a>
        </div>
    </nav>
                <div className='logincontainer'>
                    {if(this.props.loginStatus==='failure'){

                    }
                    }
                {this.props.loginStatus==='failure'?<div id='invalidLogin'><p><font color="red">Email id already exists!</font></p></div>:<div id='invalidLogin'><p><font color="green">Account created successfully. Please login with your username and password!</font></p></div>}               
                    <form>
                    <h2><b>Create your account</b></h2>
                <div className="form-row">
    <div className="form-group col-md-6">
    <label for="fname">First name</label>
      <input type="text" class="form-control" id="fname" name="fname" onChange = {this.props.valueChangeHandler} placeholder="First name" required/>
    </div>

    <div className="form-group col-md-6">
    <label for="lname">Last name</label>
      <input type="text" class="form-control" id="lname" name="lname" onChange = {this.props.valueChangeHandler} placeholder="Last name"  required/>
    </div>
</div>
      <div className="form-group">
          <label for="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange = {this.props.valueChangeHandler} aria-describedby="emailHelp" placeholder="Enter email" required/>
          </div>      

          <div className="form-group">
          <label for="password">Password</label>
      <input type="password" className="form-control" id="pass" name="pass" onChange = {this.props.valueChangeHandler} placeholder="Password" required/>
          </div>  
         
          </form>
          <button type="submit" onClick = {()=>this.props.signUp(this.dataSignup)} className="btn btn-primary">Create your account</button>
          <br></br>
          <p id='account'><font>Have an account? <a href='login'>Sign in</a></font></p>
          <p class="u-text-center caption"><span>By creating your Grubhub account, you agree to the</span> <a href="/legal/terms-of-use" target="_blank" rel="noopener">Terms of Use</a> <span>and</span> <a href="/legal/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>.</p>
                </div>
                </div>
        )
    }
}

const mapState = (store) =>{
    return{
      email:store.email,
      pass:store.pass,
      fname:store.fname,
      lname:store.lname,
      loginStatus:store.loginStatus
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeHandler:(e) => dispach(actions.valueMapper(e)),
    signUp:(dataSignup)=>dispach(actions.signUp(dataSignup))
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
  export default connect(mapState,mapDispach) (Signup);
