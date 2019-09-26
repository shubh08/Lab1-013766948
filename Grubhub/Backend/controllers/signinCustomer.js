const signinCust = (req, res, connPool, bcrypt) =>{

    const{email,pass,type} = req.body;
    connPool.getConnection((error,conn)=>{
        // encryptPass = hash;
         console.log('Inside customer sign in!');
         let queryTest = 'select * from  customer_info where cust_email = ?';
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
                     console.log('No user with such email')
                     res.end(JSON.stringify({status:"failure"}));
                 }
                 else{ 
                     bcrypt.compare(pass, result[0].cust_hash, function(err, status) {
                             if(status)
                             {
                                 console.log('Login Success!')
                                 res.cookie('cust_id',result[0].cust_id , { maxAge: 900000, httpOnly: false, path: '/' });
                                 res.cookie('cust_email',result[0].cust_email , { maxAge: 900000, httpOnly: false, path: '/' });
                                 res.writeHead(200, {

                                     'Content-Type': 'application/json'
                                 });
                                 const response = result[0];
                                 
                                 //req.session.user = user;
                                 response.type = 'customer';
                                 res.end(JSON.stringify(response));

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
    signinCust: signinCust
  };