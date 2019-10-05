const loadOwnerProfile =  require('./loadOwnerProfile');
const saveImagetoRestaurant = (req, res, connPool) =>{
  
    const {image,restid} = req.body;

    console.log('Inside restaurant image update',req.body)
connPool.getConnection((error,conn)=>{
    
    let queryGetStatus = 'update restaurant set rest_image=? where restaurant_id=?';
    console.log(queryGetStatus);
    conn.query(queryGetStatus,[image,restid],(error,resultgetStatus)=>{

        if(error)
        {
            throw error;
        }

        else
        {
            loadOwnerProfile.loadOwnerProfile(req,res,connPool);
       
               conn.release();
            
        }

    })
   
   
   

})
}

module.exports = {
    saveImagetoRestaurant: saveImagetoRestaurant
  };