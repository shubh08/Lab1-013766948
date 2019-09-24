
import axios from 'axios'

export const valueMapper = (e) =>{
    return {type:'ValueChange',value:e};
}


export const loginAsync = (obj) =>{
    console.log('Herere in Async',obj);
    return {type:'Login',value:obj};
}


export const login = (email,pass) =>{
    console.log('Preapring for Launch',email,pass)
    return dispatch =>{
    //set the with credentials to true
    axios.defaults.withCredentials = true;
     const data ={
         email:email,
         pass:pass,
         type:'customer'
     }   

    //make a post request with the user data
    axios.post('http://localhost:3001/signin',data)
        .then(response => {
            console.log("Status Code : ",response.data);
            if(response.status === 200){
                if(response.data.status==="failure")
                {
                    dispatch(loginAsync({
                        authFlag : false,
                        loginStatus:'failure'
                    })) 
                }
               
                else{
                    dispatch(loginAsync({
                        authFlag : true,
                        loginStatus:'success'
                    }))
                }
               
            }else{
               
            }
        }).catch(error => {
            console.log('Inside exception throw!!')
            dispatch(loginAsync({
                authFlag : false,
                loginStatus:'failure'
            }))
            
        })
        
    }
}

export const signUpAsync = (obj) =>{
    console.log('Here in Async',obj);
    return {type:'CustSignup',value:obj};
}


export const signUp = (data) =>{
    console.log('Preapring for Signup',data)
    return dispatch =>{
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    data.type='customer'
    //make a post request with the user data
    axios.post('http://localhost:3001/signup',data)
        .then(response => {
            console.log("Status Code : ",response.data);
            if(response.status === 200){
                if(response.data.status==="failure")
                {
                    dispatch(loginAsync({
                        authFlag : false,
                        loginStatus:'failure'
                    })) 
                }
               
                else{
                    dispatch(loginAsync({
                        authFlag : true,
                        loginStatus:'success'
                    }))
                }
               
            }else{
               
            }
        }).catch(error => {
            console.log('Inside exception throw!!')
            dispatch(loginAsync({
                authFlag : false,
                loginStatus:'failure'
            }))
            
        })
        
    }
}