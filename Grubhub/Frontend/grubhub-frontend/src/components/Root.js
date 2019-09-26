import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar'
import Grubhub from './Grubhub/Grubhub';
import Signup from './Signup/Signup';
import ManageCustomer from './Manage/ManageCustomer'
import PastOrder from './Grubhub/CustomerOrders/PastOrder';
import UpcomingOrder from './Grubhub/CustomerOrders/UpcomingOrder';
import CustomerProfile from './CustomerProfile/CustomerProfile';
import NavbarOwner from './NavbarOwner/NavbarOwner';
import ManageRestaurantMenu from './Grubhub/ManageRestaurant/ManageRestaurantMenu';
import NavbarInitial from './NavbarInitial/NavbarInitial';
import OwnerLogin from './Login/OwnerLogin';
import OwnerSignup from './Signup/OwnerSignup';
import ManageRestaurant from './Grubhub/ManageRestaurant/ManageRestaurant';
import OwnerProfile from './OwnerProfile/OwnerProfile';
// import Home from './Home/Home';
// import Delete from './Delete/Delete';
// import Create from './Create/Create';
// import Navbar from './LandingPage/Navbar';
//Create a Main Component
class Root extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                
                <Route path="/restaurant" component={NavbarOwner}/>
                <Route path="/restaurant/home" component={NavbarOwner}/>  
                {/* <Route path="/restaurant/manage" component={ManageRestaurant}/>  
                <Route path="/restaurant/manage/manageOrder" component={ManageRestaurantOrder}/>  */}
                <Route path="/restaurant/manage" component={ManageRestaurant}/> 
                
                <Route path="/restaurant/manage/profile" component={OwnerProfile}/>  
                <Route path="/restaurant/manage/menu" component={ManageRestaurantMenu}/> 

                <Route exact path="/" component={NavbarInitial}></Route>
                <Route exact path="/buyer/login" component={Login}></Route>
                <Route exact path="/buyer/signup" component={Signup}></Route>
                <Route exact path="/owner/login" component={OwnerLogin}></Route>
                <Route exact path="/owner/signup" component={OwnerSignup}></Route>
                
                 <Route path="/customer" component={Navbar}/>
                 <Route path="/customer/home" component={Navbar}/>
{/*                 
                <Route path="/customer/login" component={Login}/>
                <Route path="/customer/create-account" component={Signup}/> */}
                <Route path="/customer/manageCustomer" component={ManageCustomer}/>
                <Route path="/customer/manageCustomer/pastOrder" component={PastOrder}/>
                <Route path="/customer/manageCustomer/upcomingOrder" component={UpcomingOrder}/>
                <Route path="/customer/manageCustomer/customerProfile" component={CustomerProfile}/>

                {/* <Route path="/home" component={Home}/>
                <Route path="/delete" component={Delete}/>
                <Route path="/create" component={Create}/> */}
            </div>
        )
    }
}
//Export The Main Component
export default Root;