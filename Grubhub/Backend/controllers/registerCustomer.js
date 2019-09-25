const registerCust = (req, res, connPool, bcrypt) =>{
    const saltRounds = 10;
    const {fname,lname,email,pass} = req.body;

connPool.getConnection((error,conn)=>{
    let encryptPass='';
    let queryGetStatus = 'select * from  customer_info where cust_email = ?';
    console.log(queryGetStatus);
    conn.query(queryGetStatus,[email],(error,resultgetStatus)=>{

        if(resultgetStatus.length>0)
        {
            conn.release();
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            
            res.end(JSON.stringify({status:"failure"}));
           return;
            
        }

        else{
            bcrypt.hash(pass, saltRounds, function(err, hash) {
                encryptPass = hash;
                console.log('encrypt',encryptPass);
                console.log('Type of',typeof encryptPass,encryptPass.length);
                let queryTest = 'insert into customer_info(cust_fname,cust_lname,cust_email,cust_hash) values (?, ?, ?, ?)';
                //let name = fname+' '+lname
                console.log(queryTest);
                conn.query(queryTest,[fname,lname,email,encryptPass],(error,resultsignup)=>{
                    if(error)
                    {
                        throw error;
                    }
                    else{
                        res.writeHead(200, {
                            'Content-Type': 'application/json'
                        });
                        resultsignup.status='success'
                        res.end(JSON.stringify(resultsignup));
                       
                    }
                }) 
                
              });
               conn.release();
        }

    })
   
   
   

})
}

module.exports = {
    registerCust: registerCust
  };