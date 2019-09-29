const loadRestaurant = (req, res, connPool) =>{
    console.log('Inside load restaurant ')
    const{id} = req.body;

    connPool.getConnection((error,conn)=>{
        // encryptPass = hash;
         console.log('Inside load owner profile!');
         let loadRestaurant = 'select m.menu_id,m.menu_name,m.menu_price,m.menu_image,m.menu_description,s.section_id,s.section_name from menu m, restaurant r, section s where r.restaurant_id=s.restaurant_id and s.section_id = m.section_id and r.restaurant_id=?';
         console.log(loadRestaurant);
         conn.query(loadRestaurant,[id],(error,result)=>{
             if(error)
             {
                 throw error;
             }

             else{
                console.log('Load Restaurant data',result)

                console.log('Creating Restaurant object array')
                var restaurantArr = []
                result.forEach((restaurantItem)=>{
                    restaurantArr.push(restaurantItem)
                })
                console.log('Final Load Restaurant Array',restaurantArr)
                res.writeHead(200, {
                                 'Content-Type': 'application/json'
                             });
                            
                             res.end(JSON.stringify({status:"success",
                             restaurantData:restaurantArr
                            }));
             }
           
             
         })  
         conn.release();
 })
}


module.exports = {
    loadRestaurant: loadRestaurant
  };