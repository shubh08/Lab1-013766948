const loadCustProfile = (req, res, connPool) =>{
    const{id} = req.body;

    connPool.getConnection((error,conn)=>{
        // encryptPass = hash;
         console.log('Inside customer load data!');
         let loadProfileQuery = 'select * from  customer_info where cust_id = ?';
         console.log(loadProfileQuery);
         conn.query(loadProfileQuery,[id],(error,result)=>{
             if(error)
             {
                 throw error;
             }

             else{
                res.writeHead(200, {
                                 'Content-Type': 'application/json'
                             });
                             console.log('result data profile',result[0])
                             res.end(JSON.stringify({status:"success",
                             ...result[0]
                            }));
             }
           
             
         })  
         conn.release();
 })
}


module.exports = {
    loadCustProfile: loadCustProfile
  };