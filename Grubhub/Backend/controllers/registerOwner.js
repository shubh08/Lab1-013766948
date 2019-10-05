const registerOwn = (req, res, connPool, bcrypt)=>{
    const saltRounds = 10;
    const {fname,lname,email,pass,restname,zip} = req.body;
    
    let owner_id = '';
    connPool.getConnection((error,conn)=>{
        let encryptPass='';
        console.log('Inside else');

    let queryGetStatus = 'select * from  restaurant_owner_details where owner_email = ?';
    console.log(queryGetStatus);
    conn.query(queryGetStatus,[email],(error,resultgetStatus)=>{
        console.log('Restaturant fetched',resultgetStatus)
        if(resultgetStatus.length>0)
        {   console.log('restaurnat is there!!');
            conn.release();
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            
            res.end(JSON.stringify({status:"failure"}));
           
            
        }

        else{  console.log('restaurnat not there!!');
            bcrypt.hash(pass, saltRounds, function(err, hash) {
                console.log('Inside bcrypt');
                encryptPass = hash;
                console.log('Hash Values',hash);
                let queryTest = 'insert into restaurant_owner_details(owner_fname,owner_lname,owner_email,owner_hash,owner_image) values(?, ?, ?, ?)';
               
                console.log('Query value',queryTest);
            conn.query(queryTest,[fname,lname,email,encryptPass,'default.png'],(error,res)=>{
                if(error)
                {
                    throw error;
                }
                else{
                    console.log('Owner Details created',res);
                    owner_id = res.insertId;  
                    console.log('Owner ID',owner_id);
                    let queryTest = 'insert into restaurant(rest_name,rest_zipcode,owner_id,rest_image) values(?, ?, ?)';
                    conn.query(queryTest,[restname,zip,owner_id,'default.png'],(error,res)=>{
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
            
            res.end(JSON.stringify({status:"success"}));
        }

    })
  
    })

    

}

module.exports = {
    registerOwn: registerOwn
  };