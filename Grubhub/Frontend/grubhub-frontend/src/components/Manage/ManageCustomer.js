import React, {Component} from 'react';
import './ManageCustomer.css'
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class ManageCustomer extends Component{



    
    render(){
        return( <div>
            <div class="sidebar">
              <a class="active" href="#home">Home</a>
              <Link to="/customer/manageCustomer/upcomingOrder">Upcoming Orders</Link>
              {/* <a href="/customer/manageCustomer/pastOrder">Past Orders</a>
              <a href="/customer/manageCustomer/upcomingOrder">Upcoming Orders</a> */}
              <a href="/customer/manageCustomer/customerProfile">Profile</a>
            </div>
            
           
            </div>)
       

    }


}


export default ManageCustomer;