
import React, {Component} from 'react';


import cookie from 'react-cookies';
import {Redirect} from 'react-router';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import './ManageSection.css'


class ManageSection extends Component{

reDirect = ''
  constructor(){

    super();

    this.state={
        sectionName:"",
        sectionDescription:"",
        reDirect:""
        }
        
}



valueChangedHandler=(event)=>{
  const {name,value} = event.target;
  this.setState({
      [name]:value
  });
}



sectionItem = (id)=>{

  //this.props.loadMenu({id:id});

}


addSection=()=>{

  let data = {section_name:this.state.sectionName,section_description:this.state.sectionDescription,id:this.props.restaurant_id}
  console.log('here after getting input!!!',data);
  this.props.addSectionData(data)


}

viewSection = (data)=>{
console.log('Inside section view',data.section_id);

console.log('here clicked');
let reDirect= <Redirect to={{
    pathname: '/restaurant/manage/menu',
    state: { sectionid: data.section_id ,
    sectionname:data.section_name}
}}
/>

this.setState({
reDirect:reDirect
})
console.log(this.reDirect) 


}

deleteSection=(data)=>{
    let restaurant_id = cookie.load('restaurant_id')

console.log('Inside section id',data.section_id)

this.props.deleteSectionData({deleteid:data.section_id,id:restaurant_id});

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

        
    let sectionArray = this.props.sectionData.map((sectionItem)=>{

      console.log('hereererer',sectionItem)
      return  <li class="list-group-item"><h3>{sectionItem.section_name}</h3>
                <h4>{sectionItem.section_description}</h4>
      
          &nbsp;  
         
         
        <div id="outer">
        <div class="inner"><button class='btn btn-primary btnFormat' onClick = {()=>this.updateSection(sectionItem)}><i class="fa fa-edit"></i></button></div>
        <div class="inner"><button class="btn btn-danger btnFormat" onClick = {()=>this.deleteSection(sectionItem)}  ><i class="fa fa-trash"></i></button></div>
        <div class="inner"><button class="btn btn-danger btnFormat" onClick = {()=>this.viewSection(sectionItem)}  ><i class="fa fa-eye"></i></button></div>
    </div> 
          
          
          </li>

  });

     
        return( <div class="section">
            {redirectVar}



           {this.state.reDirect}
            
           <h1 align="center">Manage Sections</h1>

           <div class="col-md-4 text-center"> 
           <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Section</button> 
</div>
   
            <ul class="list-group sectionul">

  <br/> <hr/>

          {sectionArray}

    </ul>
            

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
    deleteSectionData:(data)=>dispach(actions.deleteSectionData(data))
    // decAge:() => dispach({type:'Agedo'})
  }
  }
  
  
export default connect(mapState,mapDispach) (ManageSection);
