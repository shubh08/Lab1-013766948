const loadCustProfile =  require('./loadCustomerProfile');
const saveImagetoCustomer = (req, res, connPool) =>{
  
    const {image,id} = req.body;

connPool.getConnection((error,conn)=>{
    
    let queryGetStatus = 'update customer_info set cust_image=? where cust_id=?';
    console.log(queryGetStatus);
    conn.query(queryGetStatus,[image,id],(error,resultgetStatus)=>{

        if(error)
        {
            throw error;
        }

        else
        {
            loadCustProfile.loadCustProfile(req,res,connPool);
       
               conn.release();
            
        }

    })
   
   
   

})
}

module.exports = {
    saveImagetoCustomer: saveImagetoCustomer
  };