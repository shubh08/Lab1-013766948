const loadOwnerProfile = (req, res, connPool) =>{
    console.log('Inside load owner profile')
    const{id} = req.body;

    connPool.getConnection((error,conn)=>{
        // encryptPass = hash;
         console.log('Inside customer load data!');
         let loadProfileQuery = 'select * from restaurant_owner_details d, restaurant r where d.owner_id=? and d.owner_id=r.owner_id;';
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
    loadOwnerProfile: loadOwnerProfile
  };