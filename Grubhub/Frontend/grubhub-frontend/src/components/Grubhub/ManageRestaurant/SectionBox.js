import React, {Component} from 'react';
import './ManageRestaurantMenu.css'




const SectionBox = ({sectionData,onDelete}) =>{

  

    const sectionArray = sectionData.map((sectionItem)=>{

        console.log('hereererer',sectionItem)
        return  <li class="list-group-item">{sectionItem.section_name}<button class='btn btn-primary'><i class="fa fa-edit"></i></button>
            &nbsp;  
            <button class="btn btn-danger" style={{display: 'inline-block'}} ><i class="fa fa-trash"></i></button>

            <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={sectionItem} ><i class="fa fa-eye"></i></button>
            
            </li>

    });



    return(
       
// {sectionArray}
       <div>{sectionArray}</div> 
    )


}


export default SectionBox;