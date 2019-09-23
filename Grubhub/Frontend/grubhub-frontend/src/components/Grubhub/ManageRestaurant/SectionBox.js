import React, {Component} from 'react';
import './ManageRestaurantMenu.css'

class SectionBox extends Component{


    

render(){
    return(
       

<li class="list-group-item">First item <button class='btn btn-primary'><i class="fa fa-edit"></i></button>
    &nbsp;  
    <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeName}><i class="fa fa-trash"></i></button></li>
        
    )
}

}


export default SectionBox;