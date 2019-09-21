const updateUser = (req, res, connPool) =>{
    console.log('updated the user info!!')
    const{cust_name,cust_email,cust_number,cust_image,cust_id} = req.body;
    connPool.getConnection((error,conn)=>{
    let queryGetStatus = 'update customer_info set cust_name=?,cust_email=?,cust_number=?,cust_image=? where cust_id = ?';
    conn.query(queryGetStatus,[cust_name,cust_email,cust_number,cust_image,cust_id],(error,resultgetStatus)=>{

        if(resultgetStatus)
        {
           
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            
            res.end(JSON.stringify(req.body));
            
        }

        else{
            
        }

    })

})


}


module.exports = {
    updateUser: updateUser
  };