import React, {Component} from 'react';
import './ManageCustomer.css'

class ManageCustomer extends Component{



    
    render(){
        return( <div>
            <div class="sidebar">
              <a class="active" href="#home">Home</a>
              <a href="/customer/manageCustomer/pastOrder">Past Orders</a>
              <a href="/customer/manageCustomer/upcomingOrder">Upcoming Orders</a>
              <a href="/customer/manageCustomer/customerProfile">Profile</a>
            </div>
            
           
            </div>)
       

    }


}


export default ManageCustomer;