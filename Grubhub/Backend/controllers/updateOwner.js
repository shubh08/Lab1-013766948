


//  "owner_id": 2,
//  "name": "shubhRest",
//  "email": "shubhRest@xyz",
//  "owner_hash": "$2b$10$M2OOK3vdKgJKsEwQCJVB4.qnIDQvb2AtY.nmkEWYfiMKKOPEWUA1i",
//  "image": null,
//  "number": null,
//  "restaurant_id": 1,
//  "rest_name": "delhi",
//  "rest_zipcode": "411032",
//  "rest_image": null,
//  "rest_cuisine": null,
//  "type": "owner"


const updateOwner = (req, res, connPool)=>{

    const{name,email,number,image,restaurant_id,owner_id,rest_name,rest_zipcode,rest_image,rest_cuisine} = req.body;
    connPool.getConnection((error,conn)=>{
    let queryTest = `update restaurant_owner_details ow,restaurant re
     set ow.name=?,ow.email=?,ow.number=?,ow.image=?,re.rest_name=?,re.rest_zipcode,re.rest_image,re.rest_cuisine where ow.owner_id=? and re.owner_id=? `;
    conn.query(queryGetStatus,[name,email,number,image,rest_name,rest_zipcode,rest_image,rest_cuisine,owner_id,owner_id],(error,resultgetStatus)=>{

        if(resultgetStatus)
        {
           
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            
            res.end(JSON.stringify(req.body));
            
        }

        else{
            
        }

    })

})

}

module.exports = {
    updateOwner: updateOwner
  };