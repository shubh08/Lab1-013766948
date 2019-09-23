import React, {Component} from 'react';


class NavbarOwner extends Component {
    render(){
        return(<nav class="navbar navbar-default navbar-fixed-top">
        
          <div class="navbar-header">
            
            <a class="navbar-brand navbar-left" href="login">GRUBHUB</a>
          </div>
        
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="restaurant/manage/manageOrder">Orders</a></li>
                <li><a href="restaurant/manage/manageMenu">Menu</a></li>
              </ul>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
           
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings<b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">Manage Account</a></li>
              </ul>
            </li>
          </ul>
        </div>
      
       
      </nav>
   )
    }

}


export default NavbarOwner;