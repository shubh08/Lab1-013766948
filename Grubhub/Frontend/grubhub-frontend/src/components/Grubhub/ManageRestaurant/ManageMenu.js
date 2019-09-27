import React, {Component} from 'react';
import './ManageRestaurantMenu';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


class ManageMenu extends Component{


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
  

    

        return( <div>  <div class="content">
       
    <h1>Hello World!!!</h1>
    
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
  
  
export default connect(mapState,mapDispach) (ManageMenu);
