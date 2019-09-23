import React, {Component} from 'react';
import './ManageRestaurantMenu.css'
import SectionBox from './SectionBox';


class ManageRestaurantMenu extends Component{


    constructor(){
        super();

    }


    addSection = () =>{

    }


    updateSection = () =>{

    }


    deleteSection = () =>{

    }

    addItem = () =>{

    }


    updateItem = () =>{

    }


    deleteItem= () =>{

    }


    render(){
        return( <div>
            <div class="sidebar">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Section</button> 
            <ul class="list-group">
     {/* <li class="list-group-item">First item <button class='btn btn-primary'><i class="fa fa-edit"></i></button>
    &nbsp;  
    <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeName}><i class="fa fa-trash"></i></button></li>
    <li class="list-group-item">Second item</li>
        <li class="list-group-item">Third item</li> */}

        <SectionBox sectionData="sectionDataObject" onclickEdit="callsectionEdit" onDelete="callSectionDelete"></SectionBox>

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
    <input type="text" class="form-control" id="sectionName" />
  </div>
  <div class="form-group">
    <label for="sectionDescription">Enter Section Description</label>
    <input type="text" class="form-control" id="sectionDescription"/>
  </div>
  <button type="submit" class="btn btn-primary">Add Section</button>
         </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      </div>
      </div> </div>
            )
       

    }


}


export default ManageRestaurantMenu;