import React, {Component} from 'react';
import './CustomerProfile.css';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


class CustomerProfile extends Component{


constructor(){
super();
console.log('Inside Construtor!');
}

getUploadData = (type)=>{
  console.log('type is',type);
  let loggedinID = cookie.load('cust_id')
  console.log('Cookie',loggedinID)
  console.log('Object Value',this.props);
  let object = {
    fname:type==="name"?this.props.cust_fname_holder:this.props.cust_fname,
    lname:type==="name"?this.props.cust_lname_holder:this.props.cust_lname ,
    email:type==="email"?this.props.cust_email_holder:this.props.cust_email ,
    pass:this.props.cust_pass,
    number:type==="number"?this.props.cust_number_holder:this.props.cust_number,
    type:'customer',
    id:loggedinID
};

  return object;
}

componentWillMount(){

   let loggedinID = cookie.load('cust_id')
 console.log('Cookie',loggedinID)
this.props.loadProfileData({id:loggedinID,type:'customer'});

}

changeName=()=>{
    let div = document.getElementById("nameedit");
    console.log(div);
  if (div.style.display === "none") {
    div.style.display = "block";
  } 

  else {
    div.style.display = "none";
  }

}

changeEmail=()=>{
    let div = document.getElementById("emailEdit");
    console.log('Inside email',div);
  if (div.style.display === "none") {
    div.style.display = "block";
  } 

  else {
    div.style.display = "none";
  }

}

changeNumber=()=>{
    let div = document.getElementById("numberEdit");
    console.log('Inside number',div);
  if (div.style.display === "none") {
    div.style.display = "block";
  } 

  else {
    div.style.display = "none";
  }

}

    render(){

     

      console.log('Customer Email',this.props.cust_email)
      if (this.props.cust_email==="") {
        
        return <div />
    }

    console.log('Profile Object Name',this.props.cust_name);

    let defaultName = this.props.cust_fname +" "+this.props.cust_lname ;

    let defaultEmail = this.props.cust_email;

    let defaultNumber = this.props.cust_number;
    

        return(  <div class="content">
        <h3><b>Your Profile</b></h3>
        <br/>
        <div >
            <div class='nameedit' >
                Name:
                <br/>
              {/* <b> {this.props.name===""?this.props.objLogin.cust_name:this.props.objLogin.cust_name} </b> */}
               <b> {defaultName} </b>
                <a onClick={this.changeName} class='customALign'>Edit</a>
            </div>
            <div id='nameedit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="cust_fname_holder">First Name:</label>
    <input type="text" class="form-control" id="cust_fname_holder" onChange = {this.props.valueChangeObserver} name="cust_fname_holder" defaultValue={this.props.cust_fname} placeholder="Enter First Name"/>
  </div>
  <div class="form-group">
    <label for="cust_lname_holder">Last Name:</label>
    <input type="text" class="form-control" id="cust_lname_holder" onChange = {this.props.valueChangeObserver} name="cust_lname_holder" defaultValue={this.props.cust_lname} placeholder="Enter Last Name"/>
  </div>
</form>
<button type="submit" class="btn btn-primary" onClick = {()=>this.props.updateProfileData(this.getUploadData("name"))} >Update Name</button> 
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeName}>Close</button>
            </div>
        </div>
        <br/>
      
        <hr/>
        <div>
        <div class='emailedit'>
            <div>
                Email
                <br/>
               {/* <b> {this.props.email===""?this.props.objLogin.cust_email:this.props.email}</b> */}
               <b> {this.props.cust_email}</b>
                <a onClick={this.changeEmail} class='customALign'>Edit</a>
            </div>
        </div>
        <div id='emailEdit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="cust_email_holder">Email address:</label>
    <input type="email" class="form-control" name="cust_email_holder" onChange = {this.props.valueChangeObserver}  defaultValue={defaultEmail} id="cust_email_holder"/>
  </div>
</form>
<button type="submit" class="btn btn-primary" onClick = {()=>this.props.updateProfileData(this.getUploadData("email"))}>Update Email</button>
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeEmail}>Close</button>
            </div>
        </div>
        <br/>
      
        <hr/>
        <div>
        <div class='numberEdit'>
            <div>
                Number
                <br/>
               {/* <b> {this.props.number===""?this.props.objLogin.cust_number:this.props.number} </b> */}
               <b>{defaultNumber}</b>
                <a onClick={this.changeNumber} class='customALign'>Edit</a>
            </div>
        </div>

        <div id='numberEdit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="cust_number_holder">Phone Number:</label>
    <input type="number" class="form-control" name="cust_number_holder" onChange = {this.props.valueChangeObserver}  defaultValue={defaultNumber} id="cust_number_holder"/>
  </div>
 
</form>
<button type="submit" class="btn btn-primary" onClick = {()=>this.props.updateProfileData(this.getUploadData("number"))}>Update Number</button>
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeNumber}>Close</button>
            </div>

        </div>
      </div>)
       

    }


}


const mapState = (store) =>{
  console.log('CustomerProfile Props',store)
    return{
  
      cust_email:store.cust_email,
      cust_pass:store.cust_pass,
      cust_fname:store.cust_fname,
      cust_lname:store.cust_lname,
      cust_number:store.cust_number,
      cust_fname_holder:store.cust_fname_holder,
      cust_lname_holder:store.cust_lname_holder,
      cust_number_holder:store.cust_number_holder,
      cust_email_holder:store.cust_email_holder,
      loginStatus:store.loginStatus,
      objLogin:store.objLogin,
      updateSuccess:store.updateSuccess
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeObserver:(e) => dispach(actions.valueMapper(e)),
    loadProfileData:(data)=>dispach(actions.loadProfileData(data)),
    updateProfileData:(data)=>dispach(actions.updateProfileData(data)),
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
export default connect(mapState,mapDispach) (CustomerProfile);
