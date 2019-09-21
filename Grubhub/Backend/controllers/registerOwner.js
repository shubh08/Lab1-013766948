const registerOwn = (req, res, connPool, bcrypt)=>{
    const saltRounds = 10;
    const {name,email,pass,rest_name,rest_zipcode} = req.body;
    let owner_id = '';
    connPool.getConnection((error,conn)=>{
        let encryptPass='';
        console.log('Inside else');

    let queryGetStatus = 'select * from  restaurant_owner_details where email = ?';
    console.log(queryGetStatus);
    conn.query(queryGetStatus,[email],(error,resultgetStatus)=>{

        if(resultgetStatus.length>0)
        {   console.log('restaurnat is there!!');
            conn.release();
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            
            res.end('Email ID already exists!');
           
            
        }

        else{  console.log('restaurnat not there!!');
            bcrypt.hash(pass, saltRounds, function(err, hash) {
                console.log('Inside bcrypt');
                encryptPass = hash;
                console.log('Hash Values',hash);
                let queryTest = 'insert into restaurant_owner_details(name,email,owner_hash) values(?, ?, ?)';
                console.log('Query value',queryTest);
            conn.query(queryTest,[name,email,encryptPass],(error,res)=>{
                if(error)
                {
                    throw error;
                }
                else{
                    console.log('Owner Details created',res);
                    owner_id = res.insertId;  
                    console.log('Owner ID',owner_id);
                    let queryTest = 'insert into restaurant(rest_name,rest_zipcode,owner_id) values(?, ?, ?)';
                    conn.query(queryTest,[rest_name,rest_zipcode,owner_id],(error,res)=>{
                        if(error)
                        {
                            throw error;
                        }
                        else{
                            console.log('Restaurant Details created',res);
                        }
                    }) 
                }
            }) 
           
              });
              conn.release();
              res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            
            res.end('Restaurant SuccessfulSignup ');
        }

    })
  
    })

    

}

module.exports = {
    registerOwn: registerOwn
  };