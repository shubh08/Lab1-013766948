import React, {Component} from 'react';
import './Order.css'
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';




//upComingOrder
class UpcomingOrder extends Component{




  componentWillMount(){

    let cust_id = cookie.load('cust_id')
    
     this.props.upComingOrder({id:cust_id});

     
     }


    render(){

    console.log('Upcoming Orders::',this.props.upComingOrderData)
    let orders =  this.props.upComingOrderData.map((element)=>{
               
  return <li class="list-group-item list-group-item-info">
  
  <h2><b>Restaurant Name:</b>{element.restname} <b><i>Order ID : {element.orderid} </i></b></h2> 
    
  {element.items.map((elem)=>{
return <div>
<p>Item Name: {elem.item_name}</p>
<p>Item Price:{elem.item_price}</p>
<p>Item Quantity:{elem.item_quantity}</p>
<br></br><hr></hr>
</div>
  })}
  
  Total : {element.order_total}
  
  </li>
      })
      
        return(  <div class="content">
          <h2>Your Upcoming Orders!!</h2>
          <ul class="list-group">
 
 {orders}
</ul>
      </div>)
       

    }


}




const mapState = (store) =>{
  console.log('Past Orders',store)
    return{
      upComingOrderData:store.upComingOrderData,
      loginStatus:store.loginStatus,
      objLogin:store.objLogin,
      updateSuccess:store.updateSuccess
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeObserver:(e) => dispach(actions.valueMapper(e)),
    loadProfileData:(data)=>dispach(actions.loadProfileData(data)),
    upComingOrder:(data)=>dispach(actions.upComingOrder(data)),
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
export default connect(mapState,mapDispach) (UpcomingOrder);

