
import axios from 'axios'

export const valueMapper = (e) =>{
    return {type:'ValueChange',value:e};
}


export const loginAsync = (obj) =>{
    console.log('Herere in Async',obj);
    return {type:'Login',value:obj};
}


export const loadProfileDataAsync = (obj) =>{
    console.log('Herere in Async',obj);
    return {type:'LoadProfileData',value:obj};
}


export const loadProfileData = (data) =>{
    console.log('Preapring for Launch',data)
    return dispatch =>{
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:3001/loadProfileData',data)
        .then(response => {
            console.log("Status Code : ",response.data);
            if(response.status === 200){
                if(response.data.status==="failure")
                {
                    dispatch(loadProfileDataAsync({
                        authFlag : false,
                        loginStatus:'failure'
                    })) 
                }
               
                else{
                    dispatch(loadProfileDataAsync({
                        authFlag : true,
                        loginStatus:'success',
                        ...response.data
                    }))
                }
               
            }else{
               
            }
        }).catch(error => {
            console.log('Inside exception throw!!')
            dispatch(loadProfileDataAsync({
                authFlag : false,
                loginStatus:'failure'
            }))
            
        })
        
    }
}

//updateProfileData
export const updateProfileDataAsync = (obj) =>{
    console.log('Herere in Async',obj);
    return {type:'UpdateProfile',value:obj};
}


export const updateProfileData = (data) =>{
    console.log('Preapring for Launch update',data)
    return dispatch =>{
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:3001/update',data)
        .then(response => {
            console.log("Status Code : ",response.data);
            if(response.status === 200){
                if(response.data.status==="failure")
                {
                    dispatch(updateProfileDataAsync({
                        authFlag : false,
                        loginStatus:'failure'
                    })) 
                }
               
                else{
                    dispatch(updateProfileDataAsync({
                        authFlag : true,
                        loginStatus:'success',
                        updateSuccess:true,
                        ...response.data
                    }))
                }
               
            }else{
               
            }
        }).catch(error => {
            console.log('Inside exception throw!!')
            dispatch(updateProfileDataAsync({
                authFlag : false,
                loginStatus:'failure'
            }))
            
        })
        
    }
}


export const login = (data) =>{
    console.log('Preapring for Launch',data)
    return dispatch =>{
    //set the with credentials to true
    axios.defaults.withCredentials = true;

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
                        loginStatus:'success',
                        ...response.data,
                        
                        
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
    
    //make a post request with the user data
    axios.post('http://localhost:3001/signup',data)
        .then(response => {
            console.log("Status Code : ",response.data);
            if(response.status === 200){
                if(response.data.status==="failure")
                {
                    dispatch(signUpAsync({
                        authFlag : false,
                        loginStatus:'failure'
                    })) 
                }
               
                else{
                    dispatch(signUpAsync({
                        authFlag : true,
                        loginStatus:'success'
                    }))
                }
               
            }else{
               
            }
        }).catch(error => {
            console.log('Inside exception throw!!')
            dispatch(signUpAsync({
                authFlag : false,
                loginStatus:'failure'
            }))
            
        })
        
    }
}


export const loadSectionDataAsync = (obj) =>{
    console.log('Here in Async',obj);
    return {type:'LoadSection',value:obj};
}


export const loadSectionData = (data) =>{
    console.log('Preapring for Launch Section Data',data)
    return dispatch =>{
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    
    //make a post request with the user data
    axios.post('http://localhost:3001/loadSectionData',data)
        .then(response => {
            console.log("Status Code : ",response.data);
            if(response.status === 200){
                if(response.data.status==="failure")
                {
                    dispatch(loadSectionDataAsync({
                        authFlag : false,
                        loginStatus:'failure'
                    })) 
                }
               
                else{
                    dispatch(loadSectionDataAsync({
                        authFlag : true,
                        loginStatus:'success',
                        sectionData:response.data.sectionData
                    }))
                }
               
            }else{
               
            }
        }).catch(error => {
            console.log('Inside exception throw!!')
            dispatch(loadSectionDataAsync({
                authFlag : false,
                loginStatus:'failure'
            }))
            
        })
        
    }
}

//addSectionData


export const addSectionDataAsync = (obj) =>{
    console.log('Here in Async',obj);
    return {type:'LoadSection',value:obj};
}


export const addSectionData = (data) =>{
    console.log('Preapring for Launch Add Section Data',data)
    return dispatch =>{
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    
    //make a post request with the user data
    axios.post('http://localhost:3001/addSection',data)
        .then(response => {
            console.log("Status Code : ",response.data);
            if(response.status === 200){
                if(response.data.status==="failure")
                {
                    dispatch(addSectionDataAsync({
                        authFlag : false,
                        loginStatus:'failure'
                    })) 
                }
               
                else{
                    dispatch(addSectionDataAsync({
                        authFlag : true,
                        loginStatus:'success',
                        sectionData:response.data.sectionData
                    }))
                }
               
            }else{
               
            }
        }).catch(error => {
            console.log('Inside exception throw!!')
            dispatch(addSectionDataAsync({
                authFlag : false,
                loginStatus:'failure'
            }))
            
        })
        
    }
}
