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
            orderData: [],
            total: 0,
            reDirect: null
        }

    }

    increase = (item) => {
        let orderDatatemp = this.state.orderData;
        for (let i = 0; i < orderDatatemp.length; i++) {
            if (orderDatatemp[i].menu_id === item.menu_id) {
                console.log('here matched')
                orderDatatemp[i].quantity += 1
                document.getElementById(item.menu_id).innerHTML = orderDatatemp[i].quantity
                // let total = this.state.total
                // total+=parseInt(item.menu_price, 10)
                this.setState({
                    orderData: orderDatatemp,

                });

                console.log(this.state);
                return
            }
        }

        document.getElementById(item.menu_id).innerHTML = 1
        orderDatatemp.push({ ...item, quantity: 1 })
        // let total = this.state.total
        // console.log('Price is'+parseInt(item.menu_price, 10));
        // total+=parseInt(item.menu_price, 10)
        // console.log('total is',total)
        this.setState({
            orderData: orderDatatemp,

        });
        console.log('This statte', this.state);
    }


    decrease = (item) => {
        let orderDatatemp = this.state.orderData;
        console.log('orderDatatemp', orderDatatemp.length)
        for (let i = 0; i < orderDatatemp.length; i++) {
            console.log('hereree in the decrease')
            if (orderDatatemp[i].menu_id === item.menu_id) {
                orderDatatemp[i].quantity -= 1
                if (orderDatatemp[i].quantity === 0) {
                    document.getElementById(item.menu_id).innerHTML = 0
                    orderDatatemp.splice(i, 1);


                }
                else { document.getElementById(item.menu_id).innerHTML = orderDatatemp[i].quantity }
                this.setState({
                    orderData: orderDatatemp
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


    orderNow = (total) => {
        let cust_id = cookie.load('cust_id')
        let orderItems = this.state.orderData;
        let restaurant_id = this.state.restaurantid;
        let status = "New"
        this.props.order({ cust_id: cust_id, orderItems: orderItems, restaurant_id: restaurant_id, status: status, rest_name: this.state.rest_name, order_total: total });
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

    redirectHome = () => {
        console.log('Herer in the redirectHomeeeeeeeeeeeeeeeeeeee')
        let reDirect = <Redirect to={{
            pathname: '/customer/home'
        }}
        />

        this.setState({
            reDirect: reDirect
        })


    }


    componentWillMount() {

        if (this.props.location.state) {

            let restaurantid = this.props.location.state.restaurantid;
            let rest_name = this.props.location.state.rest_name;
            this.setState({
                restaurantid: restaurantid,
                rest_name: rest_name
            })
            this.props.loadRestaurant({ id: restaurantid });
        }


    }




    render() {
        let breakfastmenu = null
        let lunchmenu = null
        let appetizersmenu = null
        let dinnermenu = null
        let currentOrders = null
        let total = 0;



        let redirectVar = null
        if (!cookie.load('cust_id')) {

            redirectVar = <Redirect to="/" />
        }

        if (this.props.orderSuccess) {
            redirectVar = <Redirect to={{
                pathname: '/customer/OrderSuccess',
                state: {
                    flag: true
                }
            }}
            />

        }

        console.log('Order Success Value', this.props.orderSuccess)
        console.log('Order Success Value', redirectVar)

        let breakFast = []
        let lunch = []
        let appetizers = []
        let dinner = []

        this.props.restaurantData.forEach((restItem) => {

            if ((restItem.section_name).toLowerCase() === 'breakfast')
                breakFast.push(restItem)
            else if ((restItem.section_name).toLowerCase() === 'lunch')
                lunch.push(restItem)
            else if ((restItem.section_name).toLowerCase() === 'appetizers')
                appetizers.push(restItem)
            else if ((restItem.section_name).toLowerCase() === 'dinner')
            dinner.push(restItem)
        });

        if (breakFast.length > 0) {
            breakfastmenu = breakFast.map((item) => {

                return <div class="columnCard"><div class="card">
                    <img src={'http://3.17.152.109:3001/' + item.menu_image} style={{ height: "100px", width: "100px" }}></img>
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_description}</p>
                    <p>${item.menu_price}</p>

                    <input type='button' value='-' class='qtyminus' onClick={() => this.decrease(item)} field='quantity' />
                    <p id={item.menu_id}>0</p>
                    <input type='button' value='+' class='qtyplus' onClick={() => this.increase(item)} field='quantity' />
                </div> </div>
            })
            breakfastmenu = <div><h3>BreakFast Menu:</h3><div class="rowCard">{breakfastmenu}

            </div>
                <br /><hr />
            </div>
        }
        if (dinner.length > 0) {
            dinnermenu = dinner.map((item) => {

                return <div class="columnCard"><div class="card">
                    <img src={'http://3.17.152.109:3001/' + item.menu_image} style={{ height: "100px", width: "100px" }}></img>
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_description}</p>
                    <p>${item.menu_price}</p>

                    <input type='button' value='-' class='qtyminus' onClick={() => this.decrease(item)} field='quantity' />
                    <p id={item.menu_id}>0</p>
                    <input type='button' value='+' class='qtyplus' onClick={() => this.increase(item)} field='quantity' />
                </div> </div>
            })
            dinnermenu = <div><h3>Dinner Menu:</h3><div class="rowCard">{dinnermenu}

            </div>
                <br /><hr />
            </div>
        }
        if (lunch.length > 0) {
            lunchmenu = lunch.map((item) => {
                return <div class="columnCard"> <div class="card">
                    <img src={'http://3.17.152.109:3001/' + item.menu_image} style={{ height: "100px", width: "100px" }}></img>
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_description}</p>
                    <p>${item.menu_price}</p>

                    <input type='button' value='-' class='qtyminus' onClick={() => this.decrease(item)} field='quantity' />
                    <p id={item.menu_id}>0</p>
                    <input type='button' value='+' class='qtyplus' onClick={() => this.increase(item)} field='quantity' />
                </div> </div>
            })
            lunchmenu = <div><h3>Lunch Menu:</h3><div class="rowCard">{lunchmenu}</div> <br /><hr />  </div>
        }
        if (appetizers.length > 0) {
            appetizersmenu = appetizers.map((item) => {
                return <div class="columnCard"> <div class="card">
                    <img src={'http://3.17.152.109:3001/' + item.menu_image} style={{ height: "100px", width: "100px" }}></img>
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_description}</p>
                    <p>${item.menu_price}</p>

                    <input type='button' value='-' class='qtyminus' onClick={() => this.decrease(item)} field='quantity' />
                    <p id={item.menu_id}>0</p>
                    <input type='button' value='+' class='qtyplus' onClick={() => this.increase(item)} field='quantity' />
                </div>
                </div>
            })
            appetizersmenu = <div><h3>Appetizers Menu:</h3> <div class="rowCard">{appetizersmenu}</div><br /><hr /></div>
        }




        if (this.state.orderData.length > 0) {
            //    currentOrders =  this.state.orderData.map((item)={
            //     return <div></div>
            //     })
            currentOrders = this.state.orderData.map((searchItem) => {

                total += (parseInt(searchItem.menu_price, 10) * parseInt(searchItem.quantity, 10))

                return <li class="list-group-item list-group-item-success">{searchItem.quantity} Number of <i>{searchItem.menu_name}</i> <p align="right">Price  = {searchItem.quantity}*${searchItem.menu_price} </p> </li>

            });
            currentOrders = <div class="container"> <br></br> <br></br> <h2>You have added the following Items to your cart:<i class="fas fa-shopping-cart"></i></h2> <ul class="list-group">{currentOrders}</ul>
                <br></br>
                <h3>Your total is: ${total}</h3>
                <button class="btn btn-primary" onClick={() => this.orderNow(total)}>Order Now!!</button> <button class="btn btn-danger" onClick={this.redirectHome}>Cancel</button>

            </div>
        }

        return (<div>
            {redirectVar}
            <div class="section">

                <h1 align="center"><i>{this.state.rest_name}</i></h1>

                {breakfastmenu}
                {lunchmenu}
                {appetizersmenu}
                {dinnermenu}

                {currentOrders}

            </div>
        </div>)


    }




}


const mapState = (store) => {
    console.log('Load Restaurant Props', store)
    return {

        restaurantData: store.restaurantData,
        loginStatus: store.loginStatus,
        objLogin: store.objLogin,
        updateSuccess: store.updateSuccess,
        orderSuccess: store.orderSuccess
    }
}



const mapDispach = (dispach) => {
    return {
        loadProfileData: (data) => dispach(actions.loadProfileData(data)),
        order: (data) => dispach(actions.order(data)),
        loadRestaurant: (data) => dispach(actions.loadRestaurant(data))
        // decAge:() => dispach({type:'Agedo'})
    }
}


export default connect(mapState, mapDispach)(LoadRestaurant);
