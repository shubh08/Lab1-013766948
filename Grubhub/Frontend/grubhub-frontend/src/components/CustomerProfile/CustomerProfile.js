import React, {Component} from 'react';
import './CustomerProfile.css'

class CustomerProfile extends Component{


constructor(){
super();
console.log('Inside Construtor!');
}

changeName=()=>{
    let div = document.getElementById("nameedit");
    console.log(div);
  if (div.style.display === "none") {
    div.style.display = "block";
  } 

  else {
    div.style.display = "none";
  }

}

changeEmail=()=>{
    let div = document.getElementById("emailEdit");
    console.log('Inside email',div);
  if (div.style.display === "none") {
    div.style.display = "block";
  } 

  else {
    div.style.display = "none";
  }

}

changeNumber=()=>{
    let div = document.getElementById("numberEdit");
    console.log('Inside number',div);
  if (div.style.display === "none") {
    div.style.display = "block";
  } 

  else {
    div.style.display = "none";
  }

}

    render(){
        return(  <div class="content">
        <h3><b>Your Profile</b></h3>
        <br/>
        <div >
            <div class='nameedit' >
                Name
                <br/>
                Shubham Kumar
                <a onClick={this.changeName} class='customALign'>Edit</a>
            </div>
            <div id='nameedit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="fname">First Name:</label>
    <input type="text" class="form-control" id="fname"/>
  </div>
  <div class="form-group">
    <label for="lname">Last Name:</label>
    <input type="text" class="form-control" id="lname"/>
  </div>
  <button type="submit" class="btn btn-primary">Update Name</button>
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeName}>Close</button>
</form>

            </div>
        </div>
        <br/>
      
        <hr/>
        <div>
        <div class='emailedit'>
            <div>
                Email
                <br/>
                Shubham Kumar
                <a onClick={this.changeEmail} class='customALign'>Edit</a>
            </div>
        </div>
        <div id='emailEdit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email"/>
  </div>
  <button type="submit" class="btn btn-primary">Update Email</button>
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeEmail}>Close</button>
</form>

            </div>
        </div>
        <br/>
      
        <hr/>
        <div>
        <div class='numberEdit'>
            <div>
                Number
                <br/>
                Shubham Kumar
                <a onClick={this.changeNumber} class='customALign'>Edit</a>
            </div>
        </div>

        <div id='numberEdit' style={{display : 'none'}}>
            <form>
  <div class="form-group">
    <label for="num">Phone Number:</label>
    <input type="number" class="form-control" id="num"/>
  </div>
  <button type="submit" class="btn btn-primary">Update Number</button>
  &nbsp;  &nbsp;  &nbsp;
  <button class="btn btn-danger" style={{display: 'inline-block'}} onClick={this.changeNumber}>Close</button>
</form>

            </div>

        </div>
      </div>)
       

    }


}


export default CustomerProfile;