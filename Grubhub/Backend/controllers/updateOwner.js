const loadOwnerProfile =  require('./loadOwnerProfile');

const updateOwner = (req, res, connPool)=>{

    console.log('inside owner update now');
    const{fname,lname,email,number,owner_image,id,rest_name,rest_zipcode,rest_image,rest_cuisine} = req.body;
    connPool.getConnection((error,conn)=>{
    let queryUpdateOwner = `update restaurant_owner_details ow,restaurant re set ow.owner_fname=?,ow.owner_lname=?,ow.owner_email=?,ow.owner_number=?,re.rest_name=?,re.rest_zipcode=?,re.rest_cuisine=? where ow.owner_id=? and ow.owner_id=re.owner_id `;
    conn.query(queryUpdateOwner,[fname,lname,email,number,rest_name,rest_zipcode,rest_cuisine,id],(error,resultgetStatus)=>{

        if(resultgetStatus)
        {
           
            // res.writeHead(200, {
            //     'Content-Type': 'application/json'
            // });
            
            // res.end(JSON.stringify(req.body));  //req,res,connPool
            loadOwnerProfile.loadOwnerProfile(req,res,connPool);
        }

        else{
            console.log(error)
        }

    })
    conn.release();
})

}

module.exports = {
    updateOwner: updateOwner
  };