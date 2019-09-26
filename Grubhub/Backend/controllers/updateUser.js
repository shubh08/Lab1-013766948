const loadCustProfile =  require('./loadCustomerProfile');

const updateUser = (req, res, connPool) =>{
    console.log('Inside the updated the user info call!!')
    console.log('Update user request body',req.body);
    const{fname,lname,email,number,image,id} = req.body;
    // if(email==req.cookie('cust_id'))
    // {

    // }

    // else{


    // }
    connPool.getConnection((error,conn)=>{
    let updateQuery = 'update customer_info set cust_fname=?,cust_lname=?,cust_email=?,cust_number=?,cust_image=? where cust_id = ?';
    conn.query(updateQuery,[fname,lname,email,number,image,id],(error,resultgetStatus)=>{

        if(resultgetStatus)
        {
           console.log('Updated the user profile!!')

           loadCustProfile.loadCustProfile(req,res,connPool);
            // res.writeHead(200, {
            //     'Content-Type': 'application/json'
            // });
            
            // res.end(JSON.stringify({status:"success"}));
            
        }

        else{
            
        }

    })

    conn.release();

})


}


module.exports = {
    updateUser: updateUser
  };