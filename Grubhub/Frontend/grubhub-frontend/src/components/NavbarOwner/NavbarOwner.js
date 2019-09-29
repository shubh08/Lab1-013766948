import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';


class NavbarOwner extends Component {

  
 handleLogout = () => {
  cookie.remove('owner_id', { path: '/' });
}


    render(){

      let redirectVar = null;
      if(!cookie.load('owner_id')){
        console.log('loggin out owner id');
          redirectVar = <Redirect to= "/"/>
      }
        return(
        <div>
          {redirectVar}
        <nav class="navbar navbar-default navbar-fixed-top">
        
          <div class="navbar-header">
            
            <a class="navbar-brand navbar-left" href="#"><p><font color="red"><b>GRUBHUB</b></font></p></a>
          </div>
        
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-left">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Hi {this.props.owner_fname} <b class="caret"></b></a>
              <ul class="dropdown-menu">
                  <li><Link to="/restaurant/manage/profile">Manage Account</Link></li> 
                  <li><Link to="/restaurant/manageSection">Manage Restaurant</Link></li> 
                  {/* <li class="dropdown-submenu"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Manage Orders</a>
                  <ul class="dropdown-menu">
                          <li><Link to="/restaurant/manageOrders">Manage Past Orders</Link> </li>
                          <li><Link to="/restaurant/manageOrders">Manage Current Orders</Link></li>
                         
                        </ul>
                  </li>  */}
                  <li><Link to="/restaurant/managePastOrders">Manage Past Orders</Link> </li>
                  <li><Link to="/restaurant/manageCurrentOrders">Manage Current Orders</Link></li>
                  <li><Link to="/" onClick = {this.handleLogout}>Logout</Link></li>
              </ul>
            </li>
          </ul>

          {/* <ul class="nav navbar-nav navbar-right">
           
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings<b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">Manage Account</a></li>
              </ul>
            </li>
          </ul> */}
        </div>
      
       
      </nav>
      </div>
   )
    }

}



const mapState = (store) =>{
  console.log('Navbar Props',store)
    return{
      owner_email:store.owner_email,
      owner_fname:store.owner_fname,
      owner_lname:store.owner_lname,
      loginStatus:store.loginStatus,
      objLogin:store.objLogin
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeHandler:(e) => dispach(actions.valueMapper(e))
    // decAge:() => dispach({type:'Agedo'})
  }
  }

  export default connect(mapState,mapDispach) (NavbarOwner);

