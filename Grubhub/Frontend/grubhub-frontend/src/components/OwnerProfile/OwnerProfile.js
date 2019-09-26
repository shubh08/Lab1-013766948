import React, {Component} from 'react';
import './OwnerProfile.css';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


class OwnerProfile extends Component{


constructor(){
super();
console.log('Inside Construtor!');
}

getUploadData = (type)=>{
  console.log('type is',type);
  let loggedinID = cookie.load('owner_id')
  console.log('Cookie',loggedinID)
  console.log('Object Value hererere',this.props);
  let object = {
    fname:type==="name"?this.props.owner_fname_holder:this.props.owner_fname,
    lname:type==="name"?this.props.owner_lname_holder:this.props.owner_lname ,
    email:type==="email"?this.props.owner_email_holder:this.props.owner_email ,
    number:type==="number"?this.props.owner_number_holder:this.props.owner_number,
    owner_image:type==="ownerimage"?this.props.owner_image_holder:this.props.owner_image,
    type:'owner',
    rest_name:type==="restname"?this.props.rest_name_holder:this.props.rest_name,
    rest_zipcode:type==="restzip"?this.props.rest_zipcode_holder:this.props.rest_zipcode,
    rest_image:type==="restimage"?this.props.rest_image_holder:this.props.rest_image,
    rest_cuisine:type==="restcuisine"?this.props.rest_cuisine_holder:this.props.rest_cuisine,
    id:loggedinID
};
console.log('final object to send to db for owner profile updatehererere',object);
  return object;
}

componentWillMount(){

   let loggedinID = cookie.load('owner_id')
 console.log('Cookie',loggedinID)
this.props.loadProfileData({id:loggedinID,type:'owner'});

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



changeRestName=()=>{
    let div = document.getElementById("restedit");
    console.log('Inside number',div);
  if (div.style.display === "none") {
    div.style.display = "block";
  } 

  else {
    div.style.display = "none";
  }

}

changeRestZip=()=>{
    let div = document.getElementById("restzip");
    console.log('Inside number',div);
  if (div.style.display === "none") {
    div.style.display = "block";
  } 

  else {
    div.style.display = "none";
  }

}


changeRestCuisine=()=>{
    let div = document.getElementById("restcuisine");
    console.log('Inside number',div);
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




     let redirectVar=null

      console.log('Customer Email',this.props.owner_email)
      if (this.props.owner_email==="") {
        
        return <div />
    }

    if(!cookie.load('owner_id')){
        console.log('Not logged in owner')
        redirectVar = <Redirect to= "/"/>
    }
  

    console.log('Profile Object Name',this.props.cust_name);

    let defaultName = this.props.owner_fname +" "+this.props.owner_lname ;

    let defaultEmail = this.props.owner_email;

    let defaultNumber = this.props.owner_number;
    

        return( <div>  <div class="content">
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
    <label for="owner_fname_holder">First Name:</label>
    <input type="text" class="form-control" id="owner_fname_holder" onChange = {this.props.valueChangeObserver} name="owner_fname_holder" defaultValue={this.props.owner_fname} placeholder="Enter First Name"/>
  </div>
  <div class="form-group">
    <label for="owner_lname_holder">Last Name:</label>
    <input type="text" class="form-control" id="owner_lname_holder" onChange = {this.props.valueChangeObserver} name="owner_lname_holder" defaultValue={this.props.owner_lname} placeholder="Enter Last Name"/>
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
               {/* <b> {this.props.email===""?this.props.objLogin.owner_email:this.props.email}</b> */}
               <b> {this.props.owner_email}</b>
                <a onClick={this.changeEmail} class='customALign'>Edit</a>
            </div>
        </div>
        <div id='emailEdit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="owner_email_holder">Email address:</label>
    <input type="email" class="form-control" name="owner_email_holder" onChange = {this.props.valueChangeObserver}  defaultValue={defaultEmail} id="owner_email_holder"/>
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
               {/* <b> {this.props.number===""?this.props.objLogin.owner_number:this.props.number} </b> */}
               <b>{defaultNumber}</b>
                <a onClick={this.changeNumber} class='customALign'>Edit</a>
            </div>
        </div>

        <div id='numberEdit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="owner_number_holder">Phone Number:</label>
    <input type="number" class="form-control" name="owner_number_holder" onChange = {this.props.valueChangeObserver}  defaultValue={defaultNumber} id="owner_number_holder"/>
  </div>
 
</form>
<button type="submit" class="btn btn-primary" onClick = {()=>this.props.updateProfileData(this.getUploadData("number"))}>Update Number</button>
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeNumber}>Close</button>
            </div>

        </div>

        <br/>
      
      <hr/>
        <div >
            <div class='restedit' >
                Restaurant Name:
                <br/>
              {/* <b> {this.props.name===""?this.props.objLogin.cust_name:this.props.objLogin.cust_name} </b> */}
               <b> {this.props.rest_name} </b>
                <a onClick={this.changeRestName} class='customALign'>Edit</a>
            </div>
            <div id='restedit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="rest_name_holder">Restaurant Name:</label>
    <input type="text" class="form-control" id="rest_name_holder" onChange = {this.props.valueChangeObserver} name="rest_name_holder" defaultValue={this.props.rest_name} placeholder="Enter Restaurant Name"/>
  </div>
</form>
<button type="submit" class="btn btn-primary" onClick = {()=>this.props.updateProfileData(this.getUploadData("restname"))} >Update Restaurant Name</button> 
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeRestName}>Close</button>
            </div>
        </div>
        <br/>
      
      <hr/>
        <div >
            <div class='restzip' >
            Restaurant Zipcode:
                <br/>
             
               <b> {this.props.rest_zipcode} </b>
                <a onClick={this.changeRestZip} class='customALign'>Edit</a>
            </div>
            <div id='restzip' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="rest_zipcode_holder">Restaurant Zipcode:</label>
    <input type="text" class="form-control" id="rest_zipcode_holder" onChange = {this.props.valueChangeObserver} name="rest_zipcode_holder" defaultValue={this.props.rest_zipcode} placeholder="Enter Restaurant ZipCode"/>
  </div>
</form>
<button type="submit" class="btn btn-primary" onClick = {()=>this.props.updateProfileData(this.getUploadData("restzip"))} >Update Restaurant ZipCode</button> 
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeRestZip}>Close</button>
            </div>
        </div>

        <br/>
      
      <hr/>
        <div >
            <div class='restcuisine' >
                Restaurant Cuisine:
                <br/>
              {/* <b> {this.props.name===""?this.props.objLogin.cust_name:this.props.objLogin.cust_name} </b> */}
               <b> {this.props.rest_cuisine} </b>
                <a onClick={this.changeRestCuisine} class='customALign'>Edit</a>
            </div>
            <div id='restcuisine' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="rest_cuisine_holder">Restaurant Cuisine:</label>
    <input type="text" class="form-control" id="rest_cuisine_holder" onChange = {this.props.valueChangeObserver} name="rest_cuisine_holder" defaultValue={this.props.rest_cuisine} placeholder="Enter Restaurant Cuisine"/>
  </div>
</form>
<button type="submit" class="btn btn-primary" onClick = {()=>this.props.updateProfileData(this.getUploadData("restcuisine"))} >Update Cuisine</button> 
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeRestCuisine}>Close</button>
            </div>
        </div>
      </div>
      </div>)
       

    }


}


const mapState = (store) =>{
  console.log('OwnerProfile Props',store)
    return{
  
      owner_email:store.owner_email,
      owner_fname:store.owner_fname,
      owner_lname:store.owner_lname,
      owner_number:store.owner_number,
      owner_fname_holder:store.owner_fname_holder,
      owner_lname_holder:store.owner_lname_holder,
      owner_number_holder:store.owner_number_holder,
      owner_email_holder:store.owner_email_holder,

      rest_name:store.rest_name,
      rest_zipcode:store.rest_zipcode,
      rest_image:store.rest_image,
      rest_cuisine:store.rest_cuisine,

      rest_name_holder:store.rest_name_holder,
      rest_zipcode_holder:store.rest_zipcode_holder,
      rest_image_holder:store.rest_image_holder,
      rest_cuisine_holder:store.rest_cuisine_holder,

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
  
  
export default connect(mapState,mapDispach) (OwnerProfile);
