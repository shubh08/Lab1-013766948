const registerCust = (req, res, connPool, bcrypt) =>{
    const saltRounds = 10;
    const {name,email,pass} = req.body;

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
            
            res.end('Email ID already exists!');
           return;
            
        }

        else{
            bcrypt.hash(pass, saltRounds, function(err, hash) {
                encryptPass = hash;
                console.log('encrypt',encryptPass);
                console.log('Type of',typeof encryptPass,encryptPass.length);
                let queryTest = 'insert into customer_info(cust_name,cust_email,cust_hash) values (?, ?, ?)';
                console.log(queryTest);
                conn.query(queryTest,[name,email,encryptPass],(error,resultsignup)=>{
                    if(error)
                    {
                        throw error;
                    }
                    else{
                        res.writeHead(200, {
                            'Content-Type': 'application/json'
                        });
                        
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