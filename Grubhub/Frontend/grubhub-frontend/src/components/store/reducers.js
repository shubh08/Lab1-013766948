


const initialState = {
    email : "",
    pass : "",
    lname:"",
    fname:"",
    type:"",
    authFlag : false,
    loginStatus:""
   
}


const reducer = (state=initialState,action)=>{
    
  
    const newState = {...state}
    if(action.type==='ValueChange')
    {const {name,value} = action.value.target;
    console.log('Name and value:',name,value);
       const objret= Object.assign({}, state, { [name]: value });
       console.log('Object is :',objret);
       return objret;
    }
   if(action.type==='Login')
   {
    console.log('Here after login');
    const objret= Object.assign({}, state, action.value);
    console.log('Here after login',objret);
    return objret;  
   }  //signUpAsync
   if(action.type==='CustSignup')
   {
    console.log('Here after Signup');
    const objret= Object.assign({}, state, action.value);
    console.log('Here after login',objret);
    return objret;  
   } 

   return state
    }
    
    export default reducer;