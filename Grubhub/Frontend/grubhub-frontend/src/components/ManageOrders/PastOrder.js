import React, {Component} from 'react';
import './ManageCurrentOrders.css'

class PastOrder extends Component{

constructor(props)
{
    super(props)
}

render(){

    console.log('Upcoming Orders::',this.props.pastData)
    let orders =  this.props.pastData.map((element)=>{
    if(element.status==='Delivered') {        
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
return<tr>
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
  <br></br><br/><hr/>
  </div>}

      })

    return(
        <div>  <div ><button class="btn btn-danger" onClick={this.props.switchback}>View Current Orders</button>  </div>
        <h2 ><b>Your Past Orders!! </b></h2>
         
 
 {orders}

        
        
            </div>

    )

}
}

export default PastOrder;