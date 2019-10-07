import React, { Component } from 'react';
import '../LoadRestaurant/LoadRestaurant.css'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


class MenuView extends Component {


    constructor() {

        super();

        this.state = {
            restaurantid: "",
            rest_name: "",
            orderData:[],
            total:0,
            reDirect:null
        }

    }

    valueChangedHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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

    redirectHome = ()=>{
console.log('Herer in the redirectHomeeeee')
        let reDirect = <Redirect to={{
            pathname: '/customer/home'            
        }}
        />

        this.setState({
            reDirect: reDirect
        })


    }


    componentWillMount() {

let rest_name = cookie.load('rest_name')
  let restaurantid = cookie.load('restaurant_id')
  this.setState({
    rest_name:rest_name
  })
        this.props.loadRestaurant({ id: restaurantid });

    }

    

    render() {
        let breakfastmenu = null
        let lunchmenu = null
        let appetizersmenu = null
        let dinnermenu = null
        let currentOrders = null
        let total = 0;


        
        let redirectVar = null
        if (!cookie.load('owner_id')) {

            redirectVar = <Redirect to="/" />
        }


       
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
                     <img src={'http://localhost:3001/' + item.menu_image} style={{ height: "100px", width: "100px" }}></img>
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_description}</p>
                    <p>${item.menu_price}</p>
                    
                   
                </div> </div>
            })
            breakfastmenu = <div><h3>BreakFast Menu: <br/></h3><div class="rowCard">{breakfastmenu}
            
           </div>
           <br/><hr/>
             </div> 
        }
        if (dinner.length > 0) {
            dinnermenu = dinner.map((item) => {

                return <div class="columnCard"><div class="card">
                    <img src={'http://localhost:3001/' + item.menu_image} style={{ height: "100px", width: "100px" }}></img>
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
                     <img src={'http://localhost:3001/' + item.menu_image} style={{ height: "100px", width: "100px" }}></img>
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_description}</p>
                    <p>${item.menu_price}</p>
                    
                    
                </div> </div>
            })
            lunchmenu = <div><h3>Lunch Menu:</h3><div class="rowCard">{lunchmenu}</div>  <br/><hr/> </div>
        }
        if (appetizers.length > 0) {
            appetizersmenu = appetizers.map((item) => {
                return <div class="columnCard"> <div class="card">
                     <img src={'http://localhost:3001/' + item.menu_image} style={{ height: "100px", width: "100px" }}></img>
                    <h3>{item.menu_name}</h3>
                    <p>{item.menu_description}</p>
                    <p>${item.menu_price}</p>
                    
                   
                    </div>
                </div>
            })
            appetizersmenu = <div><h3>Appetizers Menu:</h3> <div class="rowCard">{appetizersmenu}</div><br/><hr/></div>
        }

   
    
        return (<div>
            {redirectVar}
            <div class="section">

           <div align="center"> <h1 align="center"><i>{this.state.rest_name}</i></h1>  <Link to="/restaurant/manageSection"><u>Manage Restaurant</u></Link></div>

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
        orderSuccess:store.orderSuccess
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


export default connect(mapState, mapDispach)(MenuView);
