const loadMenu = (req, res, connPool) =>{
    console.log('Inside load Menu Data!!',req.body)
    const{id} = req.body;

    connPool.getConnection((error,conn)=>{
       
         let loadMenuQuery = 'select * from menu where section_id=?';
         console.log(loadMenuQuery);
         conn.query(loadMenuQuery,[id],(error,result)=>{
             if(error)
             {
                 throw error;
             }

             else{
                console.log('Load Menu data',result)
               

                console.log('Creating Menu object array')
                var menuArr = []
                result.forEach((menuItem)=>{
                    menuArr.push(menuItem)
                })
                console.log('Final Section Array',menuArr)
                res.writeHead(200, {
                                 'Content-Type': 'application/json'
                             });
                            
                             if(menuArr.length==0)
                            {
                                res.end(JSON.stringify({status:"success",
                                menuData:[]
                               }));
                            }
                            else{
                                res.end(JSON.stringify({status:"success",
                             menuData:menuArr
                            }));
                            }
                             
             }
           
             
         })  
         conn.release();
 })
}


module.exports = {
    loadMenu: loadMenu
  };