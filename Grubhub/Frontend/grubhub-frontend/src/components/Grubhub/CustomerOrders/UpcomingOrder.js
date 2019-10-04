import React, {Component} from 'react';
import './Order.css'
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import PastOrder from './PastOrder';




//upComingOrder
class UpcomingOrder extends Component{

  constructor(props){
    super(props)
    this.state={
      orderState:"",
      pastOrderView:false
    }

  }


  componentWillMount(){



    let cust_id = cookie.load('cust_id')
    
     this.props.upComingOrder({id:cust_id});

     
     }


     setPastView=()=>{
      this.setState({
       pastOrderView:!this.state.pastOrderView
      })
    }

    render(){

    console.log('Upcoming Orders::',this.props.upComingOrderData)
    let orders =  this.props.upComingOrderData.map((element)=>{
               
  return <div> 
    <h2><b>Restaurant Name:</b>{element.restname} <b><i>Order ID : {element.orderid} </i></b></h2>
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
return <tr>
<td>{elem.item_name}</td>
<td>{elem.item_price}</td>
<td>{elem.item_quantity}</td>

</tr>
  })}
  
  </tbody></table>
  Status:<font color="red">{element.status}</font>  
  <br></br>
  Total : <b>${element.order_total}</b>
  <br></br><hr></hr>
   </div>
      })
      
        return(  <div class="content">
          {this.props.orderSuccess==true?<div class="alert alert-success">
  <strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.
</div>:<div></div>}
    {this.state.pastOrderView==true?<PastOrder pastData={ this.props.upComingOrderData} switchback={this.setPastView}></PastOrder>: <div>
          <h2> Your Upcoming Orders!! </h2><button class="btn btn-danger float-right" orderData={this.props.upComingOrderData} onClick={this.setPastView}>View Past Orders</button>
          
 {orders}

    </div>}
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

