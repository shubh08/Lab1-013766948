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
        pastOrderView:!this.state.pastOrderView
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
      if(element.status!='Delivered') {
               
  return <div>
    <h4><b>Customer Name:</b>{element.cust_fname} {element.cust_lname} <b><i>Order ID : {element.orderid} </i></b></h4> 
    <p>Customer Address:{element.cust_address}</p>
   
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th class="tableh">Item Name</th>
      <th class="tableh">Item Price</th>
      <th class="tableh">Item Quantity</th>
    </tr>
  </thead>
  <tbody> 
  {element.items.map((elem)=>{

    
return  <tr>
<td>{elem.item_name}</td>
<td>{elem.item_price}</td>
<td>{elem.item_quantity}</td>

</tr>
  })}
  
</tbody>
</table>

Status:<font color="red">{element.status}</font>  
  <br></br>
  Total : <b>${element.order_total}</b>
 <br></br>

<form>
<div class="form-group">
<label for="inputState">Change Order Status</label>
      <select id="inputState" class="form-control" name="orderState" onChange={this.valueChange}>
        <option selected>Choose...</option>
        <option value="Preparing">Preparing</option>
        <option value="Ready">Ready</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancel">Cancel</option>
      </select>
  </div>

</form>
<button class="btn btn-danger" onClick={()=>this.changeOrderState(element.orderid)}>Submit</button>
<br></br><br/><hr/>
  </div>
      }
      })
      
        return(  <div class="content">
      {this.state.pastOrderView==true?<PastOrder pastData={ this.props.upComingRestaurantOrderData} switchback={this.setPastView}></PastOrder>: <div> <h2><b>Your Upcoming Orders!!</b> <button class="btn btn-danger" orderData={this.props.upComingRestaurantOrderData} onClick={this.setPastView}>View Past Orders</button></h2> 
         
 
 {orders}

</div>
}  
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

