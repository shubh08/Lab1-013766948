import React, {Component} from 'react';


class NavbarInitial extends Component {
    render(){
        return(<nav class="navbar navbar-default navbar-fixed-top">
        
          <div class="navbar-header">
            <a class="navbar-brand navbar-left" href="login">GRUBHUB</a>
          </div>
      
         
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown"> 
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Hi Shubham!<span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="/customer/manageCustomer/pastOrder">Past Order</a></li>
                  <li><a href="/customer/manageCustomer/upcomingOrder">Upcoming Orders</a></li>  
                  <li><a href="customer/manageCustomer/customerProfile">Account</a></li>
                </ul>
              </li>
              <li><i class="fa fa-shopping-cart" aria-hidden="true"> </i> </li>
            </ul>
      
          </div>
        
      </nav>
   )
    }

}


export default NavbarInitial;