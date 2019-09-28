import React, {Component} from 'react';

import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


class ManageMenu extends Component{


constructor(){
super();

this.state= {
    sectionid:"",
    sectionname:"",
    menuitems:"",
    menu_name:"",
    menu_price:"",
    menu_image:"",
    menu_description:""
}

}



valueChangedHandler=(event)=>{
    const {name,value} = event.target;
    this.setState({
        [name]:value
    });
  }
  

addMenu=()=>{

    let data = {menu_name:this.state.menu_name,menu_description:this.state.menu_description,menu_price:this.state.menu_price,menu_image:this.state.menu_image,id:this.state.sectionid}
    console.log('here after getting input!!!',data);
    this.props.addMenuData(data)
  
  
  }
  
  viewMenu = (menu)=>{
  console.log('Inside section view',menu.menu_id);
  {/* <Redirect to={{
    pathname: '/restaurant/manage/menu',
    state: { id: id }
  }}/> */}
  
  console.log('here clicked');
  let reDirect= <Redirect to={{
      pathname: '/restaurant/manage/menu',
      state: { menu_id: menu.menu_id }
  }}
  />
  
  this.setState({
  reDirect:reDirect
  })
  console.log(this.reDirect) 
  
  
  }
  
  deleteMenu=(menu)=>{
  
  console.log('Menu id to be deleted!!',menu.menu_id)
  this.props.deleteMenu({id:this.state.sectionid,deleteid:menu.menu_id})
  }
  

componentDidMount(){

  let sectid = this.props.location.state.sectionid;
  let sectionname = this.props.location.state.sectionname;

    this.setState({
        sectionid:sectid,
        sectionname:sectionname
    })

this.props.loadMenuData({id:sectid});

}


    render(){


        
        let menuArray = this.props.menuData.map((Menu)=>{

            console.log('hereererer',Menu)
            return  <li class="list-group-item"><h3>{Menu.menu_name}</h3>  &nbsp; <p>{Menu.menu_price}</p>
            
            &nbsp; <p>{Menu.menu_description}</p>
                &nbsp;  
               
               
              <div id="outer">
              <div class="inner"><button class='btn btn-primary btnFormat'><i class="fa fa-edit"></i></button></div>
              <div class="inner"><button class="btn btn-danger btnFormat" onClick = {()=>this.deleteMenu(Menu)} ><i class="fa fa-trash"></i></button></div>
              <div class="inner"><button class="btn btn-danger btnFormat" onClick = {()=>this.viewSection(Menu)}  ><i class="fa fa-eye"></i></button></div>
          </div> 
                
                
                </li>
      
        });


     let redirectVar=null

     
      if (this.props.owner_email==="") {
        
        return <div />
    }

    if(!cookie.load('owner_id')){
        console.log('Not logged in owner')
        redirectVar = <Redirect to= "/"/>
    }
  

    

        return( <div class="menu">  <div class="content">
       
    <h1>Manage Section: {this.state.sectionname} </h1>

    <div class="col-md-4 text-center"> 
           <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Menu</button> 
</div>
   
            <ul class="list-group sectionul">

  <br/> <hr/>

          {menuArray}

    </ul>
    
    <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog .modal-lg ">
            <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Menu Details</h4>
        </div>
        <div class="modal-body">
         <form>
         <div class="form-group">
    <label for="menu_name">Enter Menu Name</label>
    <input type="text" class="form-control" id="menu_name" name="menu_name" onChange={this.valueChangedHandler} />
  </div>
  <div class="form-group">
    <label for="menu_description">Enter Menu Description</label>
    <input type="text" class="form-control" id="menu_description" name="menu_description" onChange={this.valueChangedHandler} />
  </div>

  <div class="form-group">
    <label for="menu_price">Enter Menu Price</label>
    <input type="text" class="form-control" id="menu_price" name="menu_price" onChange={this.valueChangedHandler} />
  </div>
  <div class="form-group">
    <label for="menu_image">Enter Menu Image</label>
    <input type="text" class="form-control" id="menu_image" name="menu_image" onChange={this.valueChangedHandler} />
  </div>
         </form>
        </div>
        <button type="submit" onClick={this.addMenu} class="btn btn-primary" data-dismiss="modal">Add Menu</button>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      </div>
      </div>  
      </div>
      </div>)
       

    }


}


const mapState = (store) =>{
  console.log('OwnerProfile Props',store)
    return{
  
        menuData:store.menuData,
      

      loginStatus:store.loginStatus,
      objLogin:store.objLogin,
      updateSuccess:store.updateSuccess
    }
  }
  


  const mapDispach = (dispach) =>{
  return{
    valueChangeObserver:(e) => dispach(actions.valueMapper(e)),
    loadMenuData:(data)=>dispach(actions.loadMenuData(data)),
    addMenuData:(data)=>dispach(actions.addMenuData(data)),
    deleteMenu:(data)=>dispach(actions.deleteMenu(data))

    // decAge:() => dispach({type:'Agedo'})  deleteMenu
  }
  }
  
  
export default connect(mapState,mapDispach) (ManageMenu);
