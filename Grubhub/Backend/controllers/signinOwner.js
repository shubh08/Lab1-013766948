const signinOwn = (req, res, connPool, bcrypt) =>{
    const{email,pass} = req.body;

    connPool.getConnection((error,conn)=>{
        // encryptPass = hash;
         console.log('Inside owner sign in!');
         let queryTest = 'select * from  restaurant_owner_details where owner_email = ?';
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
                     
                     res.end(JSON.stringify({status:"failure"}));
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
                                    res.cookie('owner_id', result[0].owner_id, { maxAge: 900000, httpOnly: false, path: '/' });
                                    res.cookie('owner_id_email', result[0].owner_email, { maxAge: 900000, httpOnly: false, path: '/' });
                                    res.cookie('restaurant_id', resultRest[0].restaurant_id, { maxAge: 900000, httpOnly: false, path: '/' });
                                    // req.session.user = user;
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
                                 
                                 res.end(JSON.stringify({status:"failure"}));
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