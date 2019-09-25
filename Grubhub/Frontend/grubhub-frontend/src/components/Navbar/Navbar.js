import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'
import { Link } from 'react-router-dom'
class Navbar extends Component {



    render(){
        return(
        <div>
         
        <nav class="navbar navbar-default navbar-fixed-top">
       
          <div class="navbar-header">
            <a class="navbar-brand navbar-left" href="/"><p><font color="red"><b>GRUBHUB</b></font></p></a>
          </div>
          
         
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown"> 
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Hi {this.props.cust_fname+" "+this.props.cust_lname}<span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                <li><Link to="/customer/manageCustomer/customerProfile">Account</Link></li>
                  <li> <Link to="/customer/manageCustomer/pastOrder">Past Orders</Link> </li>
                  <li><Link to="/customer/manageCustomer/upcomingOrder">Upcoming Orders</Link></li>  
                  
                </ul>
              </li>
              <li><i class="fa fa-shopping-cart" aria-hidden="true"> </i> </li>
            </ul>
      
          </div>
        
      </nav>
      </div>
      
   )
    }

}

const mapState = (store) =>{
  console.log('Navbar Props',store)
    return{
      cust_email:store.cust_email,
      cust_fname:store.cust_fname,
      cust_lname:store.cust_lname,
      loginStatus:store.loginStatus,
      objLogin:store.objLogin
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeHandler:(e) => dispach(actions.valueMapper(e)),
    signUp:(dataSignup)=>dispach(actions.signUp(dataSignup))
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
export default connect(mapState,mapDispach) (Navbar);
