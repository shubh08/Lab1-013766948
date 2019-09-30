import React, {Component} from 'react';
import './CustomerSearch.css';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


class CustomerSearch extends Component{


    reDirect = ''
    constructor(){
  
      super();
  
      this.state={
          searchBox:"",
          reDirect:""
          
          }
          
  }
  
  
  
  valueChangedHandler=(event)=>{
    const {name,value} = event.target;
    this.setState({
        [name]:value
    });
  }
  
  
viewSection = (data)=>{

    let reDirect= <Redirect to={{
        pathname: '/customer/loadRestaurant',
        state: { restaurantid: data.restaurant_id ,
            rest_name:data.rest_name
        }
    }}
    />
    
    this.setState({
    reDirect:reDirect
    })
    
    
    
    }

  
    componentWillMount(){
  
        let searchBox = this.props.location.state.searchBox;
        this.setState({
            searchBox:searchBox
        })
        this.props.searchDishes({searchTerm:searchBox});
   
   }
  
   componentDidMount(){
  
    //   let restaurant_id = cookie.load('restaurant_id')
      
    //   this.setState({
    //       restaurant_id:restaurant_id
    //   })
       
       }
  
      
      render(){
          let redirectVar = null;
        if(!cookie.load('owner_id')){
          
            redirectVar = <Redirect to= "/"/>
        }
  
          
      let searchArray = this.props.searchData.map((searchItem)=>{
  
        
        return  <li class="list-group-item"><h3>{searchItem.rest_name}</h3>
                  <p>{searchItem.rest_cuisine}</p>

            &nbsp;  
            {/* <button class='btn btn-primary btnFormat' onClick = {()=>this.updateSection(searchItem)}> */}
           
          <div id="outer"> 
          {/* <div class="inner"><button  class="btn btn-primary btnFormat" data-toggle="modal" data-target="#myModalUpdate"onClick = {()=>this.updateForm(searchItem)} ><i class="fa fa-edit"></i></button></div>
          <div class="inner"><button class="btn btn-danger btnFormat" onClick = {()=>this.deleteSection(searchItem)}  ><i class="fa fa-trash"></i></button></div> */}
          <div class="inner"><button class="btn btn-danger btnFormat" onClick = {()=>this.viewSection(searchItem)}  ><i class="fa fa-eye"></i></button></div>
      </div> 
            
            
            </li>
  
    });
  
       
          return(
              
              <div>
{this.state.reDirect}
              <div class="section">
          
          
         <h2 align="center">Search Results for:"<b>{this.state.searchBox}</b>"</h2>

         <div class="col-md-4 text-center"> 
</div>
 
          <ul class="list-group sectionul">

<br/> <hr/>

        {searchArray}

  </ul>
          </div>
          
          </div>)
         
  
      }
  
  
  

}


const mapState = (store) =>{
  console.log('CustomerProfile Props',store)
    return{
  
      searchData:store.searchData,
      loginStatus:store.loginStatus,
      objLogin:store.objLogin,
      updateSuccess:store.updateSuccess
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    loadProfileData:(data)=>dispach(actions.loadProfileData(data)),
    searchDishes:(data)=>dispach(actions.searchDishes(data)),
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
export default connect(mapState,mapDispach) (CustomerSearch);
