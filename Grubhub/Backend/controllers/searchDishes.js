

const searchDishes = (req, res, connPool) =>{
    console.log('Request Body',req.body);
    const{searchTerm} = req.body;
    console.log('Search Term is ',searchTerm)
 //   console.log('Customer Cookie Value',req.cookie('cust_id'))
    connPool.getConnection((error,conn)=>{
        // encryptPass = hash;

         console.log('Inside search Dishes!');
         let loadProfileQuery = `select r.rest_name,r.rest_image,r.rest_cuisine,r.restaurant_id from restaurant r, section s, menu m where r.restaurant_id=s.restaurant_id and s.section_id=m.section_id and ? LIKE CONCAT('%', m.menu_name, '%');` ;
         console.log(loadProfileQuery);
         conn.query(loadProfileQuery,[searchTerm],(error,result)=>{
             if(error)
             {
                 throw error;
             }

             else{
                
                console.log('Load Search Result data:',result)
               

                console.log('Creating Search object array')
                var searchArr = []
                result.forEach((searchItem)=>{
                    searchArr.push(searchItem)
                })
                console.log('Final Search Item Array',searchArr)
                res.writeHead(200, {
                                 'Content-Type': 'application/json'
                             });
                            
                             if(searchArr.length==0)
                            {
                                res.end(JSON.stringify({status:"success",
                                searchData:[]
                               }));
                            }
                            else{
                                res.end(JSON.stringify({status:"success",
                             searchData:searchArr
                            }));
                            }
             }
           
             
         })  
         conn.release();
 })
}


module.exports = {
    searchDishes: searchDishes
  };