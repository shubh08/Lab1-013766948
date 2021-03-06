import React, {Component} from 'react';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone }  from '@ant-design/icons';
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
      <br/><br/>
      <br/>    <p align='center'><b>Created with <HeartTwoTone twoToneColor="#eb2f96" /> by <a href='https://www.linkedin.com/in/shubhamkumar567'>Shubham Kumar</a> <SmileTwoTone /></b></p>
      <img alt = "Welcome Grubhub" src = "https://media-cdn.grubhub.com/image/upload/c_scale,w_1650/q_50,dpr_auto,f_auto,fl_lossy,c_crop,e_vibrance:20,g_center,h_900,w_800/v1534256595/Onboarding/Burger.jpg"/>
      
      </div>
   )
    }

}


export default NavbarInitial;
