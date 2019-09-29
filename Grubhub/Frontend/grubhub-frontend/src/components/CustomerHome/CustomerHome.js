import React, {Component} from 'react';
import './CustomerHome.css';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


class CustomerHome extends Component{


    reDirect = ''
    constructor(){
  
      super();
  
      this.state={
          searchBox:""
          }
          
  }
  
  
  
  valueChangedHandler=(event)=>{
    const {name,value} = event.target;
    this.setState({
        [name]:value
    });
  }
  
  
  
  search = ()=>{
  
    this.props.searchDishes({searchTerm:this.state.searchBox});
  
  }
  
  closeForm=()=>{
      console.log("Here in the close form");
      this.setState({
          sectionName:"",
          sectionDescription:"",
          updateAction:false,
          sectionid: ""
      
      })
  
  }
  
  
  updateForm = (data)=>{
  console.log('Here in the update form1111111111111111',data)
  this.setState({
      sectionName:data.section_name,
      sectionDescription:data.section_description,
      updateAction:true,
      sectionid: data.section_id
  
  })
  console.log('State Values',this.state)
  }
  
  updateSection=()=>{
  
  let data = {section_name:this.state.sectionName,section_description:this.state.sectionDescription,updateid:this.state.sectionid,id:this.state.restaurant_id}
   
  console.log('Inside Update section',data);
  
  this.setState({
      sectionName:"",
      sectionDescription:"",
      updateAction:false,
      sectionid:""
  
  })
      this.props.updateSectionData(data)
    
  
  }
  
  
  addSection=()=>{
  
    let data = {section_name:this.state.sectionName,section_description:this.state.sectionDescription,id:this.state.restaurant_id}
   
    console.log('Data for addition',data);
    this.props.addSectionData(data)
  
  
  }
  
  viewSection = (data)=>{
  
  let reDirect= <Redirect to={{
      pathname: '/restaurant/manage/menu',
      state: { sectionid: data.section_id ,
      sectionname:data.section_name}
  }}
  />
  
  this.setState({
  reDirect:reDirect
  })
  
  
  
  }
  
  deleteSection=(data)=>{
      let restaurant_id = cookie.load('restaurant_id')
  
  
  
  this.props.deleteSectionData({deleteid:data.section_id,id:restaurant_id});
  
  }
  
  
    componentWillMount(){
  
//   let restaurant_id = cookie.load('restaurant_id')
  
//    this.props.loadSectionData({id:restaurant_id});
   
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
  
          
    //   let sectionArray = this.props.sectionData.map((sectionItem)=>{
  
        
    //     return  <li class="list-group-item"><h3>{sectionItem.section_name}</h3>
    //               <p>{sectionItem.section_description}</p>
        
    //         &nbsp;  
    //         {/* <button class='btn btn-primary btnFormat' onClick = {()=>this.updateSection(sectionItem)}> */}
           
    //       <div id="outer"> 
    //       <div class="inner"><button  class="btn btn-primary btnFormat" data-toggle="modal" data-target="#myModalUpdate"onClick = {()=>this.updateForm(sectionItem)} ><i class="fa fa-edit"></i></button></div>
    //       <div class="inner"><button class="btn btn-danger btnFormat" onClick = {()=>this.deleteSection(sectionItem)}  ><i class="fa fa-trash"></i></button></div>
    //       <div class="inner"><button class="btn btn-danger btnFormat" onClick = {()=>this.viewSection(sectionItem)}  ><i class="fa fa-eye"></i></button></div>
    //   </div> 
            
            
    //         </li>
  
    // });
  
       
          return( <div class="section">
              
              <div class="logSection">

                <div class="searchBox">
                    <form>
                    <div class="form-group">
    
    <input type="text" class="form-control" id="searchBox" name="searchBox" placeholder="Search Dishes" onChange={this.valueChangedHandler}/>
  </div>
                    </form>
                    <button class="btn btn-primary" onClick={this.search}>Search</button>
                </div>

              </div>
              </div>)
         
  
      }
  
  
  

}


const mapState = (store) =>{
  console.log('CustomerProfile Props',store)
    return{
  
      cust_email:store.cust_email,
      cust_pass:store.cust_pass,
      cust_fname:store.cust_fname,
      cust_lname:store.cust_lname,
      cust_number:store.cust_number,
      cust_fname_holder:store.cust_fname_holder,
      cust_lname_holder:store.cust_lname_holder,
      cust_number_holder:store.cust_number_holder,
      cust_email_holder:store.cust_email_holder,
      cust_image_holder:store.cust_image_holder,
      cust_image:store.cust_image,
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
  
  
export default connect(mapState,mapDispach) (CustomerHome);
