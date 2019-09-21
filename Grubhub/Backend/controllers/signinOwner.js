const signinOwn = (req, res, connPool, bcrypt) =>{
    const{email,pass,type} = req.body;

    connPool.getConnection((error,conn)=>{
        // encryptPass = hash;
         console.log('Inside owner sign in!');
         let queryTest = 'select * from  restaurant_owner_details where email = ?';
         console.log(queryTest);
         conn.query(queryTest,[email],(error,result)=>{
             if(error)
             {
                 throw error;
             }
             else{
                 console.log(result);
                 if(result.length===0)
                 {
                     console.log('failure')
                     res.writeHead(200, {
                         'Content-Type': 'application/json'
                     });
                     
                     res.end('No owner with such email');
                 }
                 else{
                     console.log('REsutlfdfsf---------',result[0]);
                     bcrypt.compare(pass, result[0].owner_hash, function(err, status) {
                             if(status)
                             {
                                 console.log('Login Success!')
                                 console.log('Fetching Restaurant Details!!');
                                 let queryTest = 'select * from restaurant where owner_id = ? ';
                                 console.log(queryTest);
                                 conn.query(queryTest,[result[0].owner_id],(error,resultRest)=>{
                                 
                                    console.log('Restaurant Details',resultRest);
                                 const successLogin  = { ...result[0], ...resultRest[0] }
                                    successLogin.type='owner';
                                 res.writeHead(200, {
                                     'Content-Type': 'application/json'
                                 });
                                 


                                 res.end(JSON.stringify(successLogin));

                             })
                                 }
                             else{
                                 res.writeHead(200, {
                                     'Content-Type': 'application/json'
                                 });
                                 
                                 res.end('Password Incorrect');
                             }
                         });

                 }
             }
         })  
         conn.release();
 })
}

module.exports = {
    signinOwn: signinOwn
  };