import React, {Component} from 'react';
import './signup.css';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'

class OwnerSignup extends Component {

    getDataSignup = ()=>{

        return {
            fname:this.props.owner_fname,
            lname:this.props.owner_lname ,
            email: this.props.owner_email,
            pass: this.props.owner_pass,
            restname:this.props.rest_name,
            zip:this.props.rest_zipcode,
            type:'owner'
            
        }
    }

    render(){

        let signUpStatus ;
        if (this.props.loginStatus==='failure') {
            signUpStatus = <div id='invalidLogin'><h2><font color="red">Email id already exists!</font></h2></div>;
          }
          else if(this.props.loginStatus==='success')
          signUpStatus = <div id='invalidLogin'><p><font color="green">Account created successfully. Please login with your username and password!</font></p></div>   
        return(
             <div>      
               <nav class="navbar navbar-default navbar-fixed-top">
        
        <div class="navbar-header">
          <a class="navbar-brand navbar-left logo" href="login"><p><font color="red"><b>GRUBHUB</b></font></p></a>
        </div>
    </nav>
                <div className='logincontainer'>
                {signUpStatus}
                    <form>
                    <h2><b>Create your account</b></h2>
                <div className="form-row">
    <div className="form-group col-md-6">
    <label for="owner_fname">First name</label>
      <input type="text" class="form-control" id="owner_fname" name="owner_fname" onChange = {this.props.valueChangeHandler} placeholder="First name" required/>
    </div>

    <div className="form-group col-md-6">
    <label for="owner_lname">Last name</label>
      <input type="text" class="form-control" id="owner_lname" name="owner_lname" onChange = {this.props.valueChangeHandler} placeholder="Last name"  required/>
    </div>
</div>
      <div className="form-group">
          <label for="owner_email">owner_Email address</label>
    <input type="email" className="form-control" id="owner_email" name="owner_email" onChange = {this.props.valueChangeHandler} placeholder="Enter owner_email" required/>
          </div>      

          <div className="form-group">
          <label for="owner_pass">Password</label>
      <input type="password" className="form-control" id="owner_pass" name="owner_pass" onChange = {this.props.valueChangeHandler} placeholder="Password" required/>
          </div>  
          <div className="form-group">
    <label for="rest_name">Restaurant Name</label>
    <input type="text" className="form-control" id="rest_name" name="rest_name" onChange = {this.props.valueChangeHandler} placeholder="Enter Restaurant Name" required/>
  </div>
  <div className="form-group">
    <label for="rest_zipcode">Zipcode</label>
    <input type="number" className="form-control" id="rest_zipcode" name="rest_zipcode"  onChange = {this.props.valueChangeHandler} placeholder="Zip Code" required/>
  </div>
         
          </form>
          <button type="submit" onClick = {()=>this.props.signUp(this.getDataSignup())} className="btn btn-primary">Create your account</button>
          
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
      owner_email:store.owner_email,
      owner_pass:store.owner_pass,
      owner_fname:store.owner_fname,
      owner_lname:store.owner_lname,
      loginStatus:store.loginStatus,
      rest_name:store.rest_name,
      rest_zipcode:store.rest_zipcode
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeHandler:(e) => dispach(actions.valueMapper(e)),
    signUp:(dataSignup)=>dispach(actions.signUp(dataSignup))
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
  export default connect(mapState,mapDispach) (OwnerSignup);
