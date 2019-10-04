import React, {Component} from 'react';
import './ManageCurrentOrders.css'
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import PastOrder from './PastOrder';




//upComingOrder
class ManageCurrentOrders extends Component{

  constructor(props){
    super(props)
    this.state={
      orderState:"",
      pastOrderView:false
    }

  }




  componentWillMount(){

    let owner_id = cookie.load('owner_id')
    

     this.props.upComingRestaurantOrder({id:owner_id});

     
     }

     setPastView=()=>{
       this.setState({
        pastOrderView:true
       })
     }

     valueChange=(event)=>{
      const {name,value} = event.target;
    this.setState({
        [name]:value
    });

     }


     changeOrderState = (orderid)=>{
      let owner_id = cookie.load('owner_id')
      console.log('Order State is',this.state.orderState,orderid)
      this.props.changeOrderStateProps({status:this.state.orderState,id:owner_id,order_id:orderid});

     }
    render(){

    console.log('Upcoming Orders::',this.props.upComingRestaurantOrderData)
    let orders =  this.props.upComingRestaurantOrderData.map((element)=>{
               
  return <li class="list-group-item list-group-item-info">
  
  <h4><b>Customer Name:</b>{element.cust_fname} {element.cust_lname} <b><i>Order ID : {element.orderid} </i></b></h4> 
    
  {element.items.map((elem)=>{
return <div>
<p>Item Name: {elem.item_name}</p>
<p>Item Price:{elem.item_price}</p>
<p>Item Quantity:{elem.item_quantity}</p>

<br></br><hr></hr>
</div>
  })}
  
  Total : {element.order_total}
  <br></br>
  Status:{element.status}  
<br></br>
<form>
<div class="form-group">
<label for="inputState">State</label>
      <select id="inputState" class="form-control" name="orderState" onChange={this.valueChange}>
        <option selected>Choose...</option>
        <option value="Preparing">Preparing</option>
        <option value="Ready">Ready</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancel">Cancel</option>
      </select>
  </div>

</form>
<button class="btn btn-primary" onClick={()=>this.changeOrderState(element.orderid)}>Submit</button>
  </li>
      })
      
        return(  <div class="content">
         <div> <h2>Your Upcoming Orders!! <button class="btn btn-primary" onClick={this.setPastView}>View Past Orders</button></h2> 
          <ul class="list-group">
 
 {orders}
</ul>
</div>
<div>
  {this.state.pastOrderView==true?<PastOrder pastData={ this.props.upComingRestaurantOrderData}></PastOrder>:<div></div>}
</div>
      </div>)
       

    }


}




const mapState = (store) =>{
  console.log('Past Orders',store)
    return{
      upComingRestaurantOrderData:store.upComingRestaurantOrderData,
      loginStatus:store.loginStatus,
      objLogin:store.objLogin,
      updateSuccess:store.updateSuccess
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeObserver:(e) => dispach(actions.valueMapper(e)),
    loadProfileData:(data)=>dispach(actions.loadProfileData(data)),
    changeOrderStateProps:(data)=>dispach(actions.changeOrderStateProps(data)),
    upComingRestaurantOrder:(data)=>dispach(actions.upComingRestaurantOrder(data)),
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
export default connect(mapState,mapDispach) (ManageCurrentOrders);

