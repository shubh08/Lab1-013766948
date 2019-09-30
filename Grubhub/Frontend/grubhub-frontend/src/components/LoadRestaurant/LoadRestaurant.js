import React, { Component } from 'react';
import './LoadRestaurant.css';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


class LoadRestaurant extends Component {


    constructor() {

        super();

        this.state = {
            restaurantid: "",
            rest_name: "",
            orderData:[]
        }

    }

    increase=(item)=>{
       let orderDatatemp = this.state.orderData;
       for(let  i =0;i<orderDatatemp.length;i++)
       {
           if(orderDatatemp[i].menu_id===item.menu_id)
           {console.log('here matched')
            orderDatatemp[i].quantity += 1
            document.getElementById(item.menu_id).innerHTML = orderDatatemp[i].quantity
            this.setState({
                orderData:orderDatatemp
            });
            console.log(this.state);
            return
           }
       }

       document.getElementById(item.menu_id).innerHTML = 1
       orderDatatemp.push({...item,quantity:1})
       this.setState({
        orderData:orderDatatemp
    });
       console.log(this.state);
    }


    decrease=(item)=>{
        let orderDatatemp = this.state.orderData;
        console.log('orderDatatemp',orderDatatemp.length)
        for(let  i =0;i<orderDatatemp.length;i++)
        {
            console.log('hereree in the decrease')
            if(orderDatatemp[i].menu_id===item.menu_id)
            {
                orderDatatemp[i].quantity -= 1
                if( orderDatatemp[i].quantity===0)
                {
                    document.getElementById(item.menu_id).innerHTML = 0
                    orderDatatemp.splice(i, 1);
                   
       
                }
                else
              {  document.getElementById(item.menu_id).innerHTML = orderDatatemp[i].quantity}
                this.setState({
                 orderData:orderDatatemp
             });

             console.log(this.state);
             return
            }
        }
 
        
        console.log(this.state);
     }

    valueChangedHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


    orderNow = ()=>{

        let orderItems = this.state.orderData;
       // let metaData = {cust_id:}

       //this.props.order()
    }

    viewSection = (data) => {

        let reDirect = <Redirect to={{
            pathname: '/customer/loadRestaurant',
            state: {
                restaurantid: data.restaurant_id,
            }
        }}
        />

        this.setState({
            reDirect: reDirect
        })



    }


    componentWillMount() {

        let restaurantid = this.props.location.state.restaurantid;
        let rest_name = this.props.location.state.rest_name;
        this.setState({
            restaurantid: restaurantid,
            rest_name: rest_name
        })
        this.props.loadRestaurant({ id: restaurantid });

    }

    componentDidMount() {

        //   let restaurant_id = cookie.load('restaurant_id')

        //   this.setState({
        //       restaurant_id:restaurant_id
        //   })

    }


    render() {
        let breakfastmenu = null
        let lunchmenu = null
        let appetizersmenu = null
        let currentOrders = null
        
        let redirectVar = null
        if (!cookie.load('owner_id')) {

            redirectVar = <Redirect to="/" />
        }

        let breakFast = []
        let lunch = []
        let appetizers = []

        this.props.restaurantData.forEach((restItem) => {

            if (restItem.section_name === 'Breakfast')
                breakFast.push(restItem)
            else if (restItem.section_name === 'Lunch')
                lunch.push(restItem)
            else if (restItem.section_name === 'Appetizers')
                appetizers.push(restItem)
        });

        if (breakFast.length > 0) {
            breakfastmenu = breakFast.map((item) => {
                
                return <div class="columnCard"><div class="card">
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_price}</p>
                    <p>{item.menu_description}</p>
                    <input type='button' value='-' class='qtyminus' onClick={()=>this.decrease(item)} field='quantity' />
    <p id={item.menu_id}>0</p>
    <input type='button' value='+' class='qtyplus' onClick={()=>this.increase(item)} field='quantity' />
                </div> </div>
            })
            breakfastmenu = <div><h2>BreakFast Menu: <br/></h2><div class="rowCard">{breakfastmenu}
            
            <br/><hr/></div>
            
             </div> 
        }
        if (lunch.length > 0) {
            lunchmenu = lunch.map((item) => {
                return <div class="columnCard"> <div class="card">
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_price}</p>
                    <p>{item.menu_description}</p>
                    <input type='button' value='-' class='qtyminus' onClick={()=>this.decrease(item)} field='quantity' />
    <p id={item.menu_id}>0</p>
    <input type='button' value='+' class='qtyplus' onClick={()=>this.increase(item)} field='quantity' />
                </div> </div>
            })
            lunchmenu = <div><h2>Lunch Menu:</h2><div class="rowCard">{lunchmenu}<br/><hr/></div>   </div>
        }
        if (appetizers.length > 0) {
            appetizersmenu = appetizers.map((item) => {
                return <div class="columnCard"> <div class="card">
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_price}</p>
                    <p>{item.menu_description}</p>
                    <input type='button' value='-' class='qtyminus' onClick={()=>this.decrease(item)} field='quantity' />
    <p id={item.menu_id}>0</p>
    <input type='button' value='+' class='qtyplus' onClick={()=>this.increase(item)} field='quantity' />
                    </div>
                </div>
            })
            appetizersmenu = <div><h2>Appetizers Menu:</h2> <div class="rowCard">{appetizersmenu}<br/><hr/></div></div>
        }


        if(this.state.orderData.length>0)
        {
        //    currentOrders =  this.state.orderData.map((item)={
        //     return <div></div>
        //     })
        currentOrders = this.state.orderData.map((searchItem)=>{
  
        
            return  <li class="list-group-item list-group-item-success">{searchItem.quantity} Number of <i>{searchItem.menu_name}</i> </li>
      
        });
        currentOrders = <div class="container"> <br></br> <br></br> <h2>You have selected following Items:</h2> <ul class="list-group">{currentOrders}</ul>
        <button class="btn btn-primary" onClick={this.orderNow}>Order Now!!</button> <button class="btn btn-danger">Cancel</button>
        </div>
        }

        return (<div class="section">

            <h1>{this.state.rest_name}</h1>

            {breakfastmenu}
            {lunchmenu}
            {appetizersmenu}

            {currentOrders}

        </div>)


    }




}


const mapState = (store) => {
    console.log('CustomerProfile Props', store)
    return {

        restaurantData: store.restaurantData,
        loginStatus: store.loginStatus,
        objLogin: store.objLogin,
        updateSuccess: store.updateSuccess
    }
}



const mapDispach = (dispach) => {
    return {
        loadProfileData: (data) => dispach(actions.loadProfileData(data)),
        loadRestaurant: (data) => dispach(actions.loadRestaurant(data)),
        // decAge:() => dispach({type:'Agedo'})
    }
}


export default connect(mapState, mapDispach)(LoadRestaurant);
