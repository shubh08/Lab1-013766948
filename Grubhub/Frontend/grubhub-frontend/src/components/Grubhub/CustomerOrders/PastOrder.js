import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import './Order.css'

class PastOrder extends Component{

  componentWillMount(){

    let cust_id = cookie.load('cust_id')
    
     this.props.pastorder({id:cust_id});
     
     }
    render(){
        return(  <div class="content">
        
      </div>)
       

    }


}



const mapState = (store) =>{
  console.log('Past Orders',store)
    return{
  
      loginStatus:store.loginStatus,
      objLogin:store.objLogin,
      updateSuccess:store.updateSuccess
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeObserver:(e) => dispach(actions.valueMapper(e)),
    loadProfileData:(data)=>dispach(actions.loadProfileData(data)),
    pastorder:(data)=>dispach(actions.pastorder(data)),
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
export default connect(mapState,mapDispach) (PastOrder);

