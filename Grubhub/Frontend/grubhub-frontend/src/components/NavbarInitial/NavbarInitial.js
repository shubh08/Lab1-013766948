import React, {Component} from 'react';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class NavbarInitial extends Component {
    render(){

      let redirectVar = null;
      if(cookie.load('cust_id')){
          redirectVar = <Redirect to= "/customer/home"/>
      }

      if(cookie.load('owner_id')){
        redirectVar = <Redirect to= "/restaurant/home"/>
    }
        return(
        <div>
          {redirectVar}
        <nav class="navbar navbar-default navbar-fixed-top">
        
          <div class="navbar-header">
            <a class="navbar-brand navbar-left logo" href="login" id="linka"><p><font color="red"><b>GRUBHUB</b></font></p></a>
          </div>
        
          <ul class="nav navbar-nav">
      <li><a href="buyer/login">Customer Login</a></li>
      <li><a href="owner/login">Owner Login</a></li>
      {/* <li><a href="#">Page 3</a></li> */}
    </ul>
      </nav>
      </div>
   )
    }

}


export default NavbarInitial;