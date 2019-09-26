
import React, {Component} from 'react';
import './ManageRestaurantMenu.css';

import cookie from 'react-cookies';
import {Redirect} from 'react-router';



class ManageRestaurant extends Component{



    
    render(){
        let redirectVar = null;
      if(!cookie.load('owner_id')){
        console.log('loggin out owner id');
          redirectVar = <Redirect to= "/"/>
      }
        return( <div>
            {redirectVar}
            <div class="sidebar">
              <a class="active" href="/restaurant/home">Home</a>
              <a href="/restaurant/manage/profile">Profile</a>
            </div>
            
           
            </div>)
       

    }


}


export default ManageRestaurant;