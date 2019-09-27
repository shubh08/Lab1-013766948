
import React, {Component} from 'react';
import './ManageRestaurantMenu.css';

import cookie from 'react-cookies';
import {Redirect} from 'react-router';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

import { Link } from 'react-router-dom';
import SectionBox from './SectionBox';

class ManageRestaurant extends Component{


  constructor(){

    super();

    this.state={
        sectionName:"",
        sectionDescription:"",
        }
        
}



valueChangedHandler=(event)=>{
  const {name,value} = event.target;
  this.setState({
      [name]:value
  });
}

addSection=()=>{

  let data = {section_name:this.state.sectionName,section_description:this.state.sectionDescription,id:this.props.restaurant_id}
  console.log('here after getting input!!!',data);
  this.props.addSectionData(data)


}

viewSection = (i)=>{
console.log('Inside section view',i);

}

deleteSection=(i)=>{

console.log('Section id',i)

}


  componentWillMount(){

let restaurant_id = cookie.load('restaurant_id')

 this.props.loadSectionData({id:restaurant_id});
 
 }

    
    render(){
        let redirectVar = null;
      if(!cookie.load('owner_id')){
        console.log('loggin out owner id');
          redirectVar = <Redirect to= "/"/>
      }

      console.log('Props data',this.props.sectionData)
        return( <div>
            {redirectVar}
            <div class="sidebar">
           
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Section</button> 
            <ul class="list-group">
     {/* <li class="list-group-item">First item <button class='btn btn-primary'><i class="fa fa-edit"></i></button>
    &nbsp;  
    <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeName}><i class="fa fa-trash"></i></button></li>
    <li class="list-group-item">Second item</li>
        <li class="list-group-item">Third item</li> */}

        <SectionBox sectionData={this.props.sectionData} onclickEdit="" onDelete={this.viewSection} onView={this.viewSection}></SectionBox>

    </ul>
            </div> 

    <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog .modal-lg ">
            <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Section Details</h4>
        </div>
        <div class="modal-body">
         <form>
         <div class="form-group">
    <label for="sectionName">Enter Section Name</label>
    <input type="text" class="form-control" id="sectionName" name="sectionName" onChange={this.valueChangedHandler} />
  </div>
  <div class="form-group">
    <label for="sectionDescription">Enter Section Description</label>
    <input type="text" class="form-control" id="sectionDescription" name="sectionDescription" onChange={this.valueChangedHandler} />
  </div>
 
         </form>
        </div>
        <button type="submit" onClick={this.addSection} class="btn btn-primary" data-dismiss="modal">Add Section</button>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      </div>
      </div>  
           
            </div>)
       

    }


}

const mapState = (store) =>{
  console.log('Manage Restaurant Props',store)
    return{
  
      restaurant_id:store.restaurant_id,
      sectionData:store.sectionData,
      loginStatus:store.loginStatus,
      objLogin:store.objLogin,
      updateSuccess:store.updateSuccess
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    loadSectionData:(data)=>dispach(actions.loadSectionData(data)),
    addSectionData:(data)=>dispach(actions.addSectionData(data)),
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
export default connect(mapState,mapDispach) (ManageRestaurant);
