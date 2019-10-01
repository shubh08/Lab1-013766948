const upComingOrder = (req, res, connPool) =>{
    console.log('Inside load Menu Data!!',req.body)
    const{id} = req.body;
    let resultOrder = {}
    connPool.getConnection((error,conn)=>{
       
         let loadPastOrderQuery = `select * from orders where cust_id=? and status='New'`;
         console.log(loadPastOrderQuery);
         conn.query(loadPastOrderQuery,[id],(error,result)=>{
             if(error)
             {
                 throw error;
             }

             else{
                 let orderid = [];
                 result.forEach(element => {
                     orderid.push(element.order_id)
                 });
                 let orderidArray = [orderid]
                let getOrderDetails = 'select * from orders_items where order_id in (?)';
                console.log(getOrderDetails);
            
                console.log('Final Items array',orderid)
                conn.query(getOrderDetails,[orderid],(error,resultgetStatus)=>{ 
    
                    if(error)
                    {
                        throw error
                    }
    
                    else{
                        let finalll = []
                        let orderidd = resultgetStatus[0].order_id;
                        let restname =  resultgetStatus[0].restaurant_name;
                        let arr = {restname:resultgetStatus[0].restaurant_name,orderid:resultgetStatus[0].order_id}
                        arr.items=[]
                        resultgetStatus.forEach((orderItem)=>{
                            console.log('item is',orderItem)
                            if(orderItem.order_id===orderidd)
                            {
                                console.log('matched')
                                arr.items.push({item_name:orderItem.item_name,item_price:orderItem.item_price,item_quantity:orderItem.item_quantity})

                            }

                            else{
                                console.log('heree not matched',orderItem)
                                finalll.push(arr);
                                arr= {}
                             arr= {restname:orderItem.restaurant_name,orderid:orderItem.order_id}
                             arr.items=[]
                             arr.items.push({item_name:orderItem.item_name,item_price:orderItem.item_price,item_quantity:orderItem.item_quantity})
                             orderidd=orderItem.order_id
                            }

                        })

                        finalll.push(arr)

                        res.writeHead(200, {
                            'Content-Type': 'application/json'
                        });

            
                        res.end(JSON.stringify({status:"success",dataOrder:finalll}));
                    }
    
                 })
            //     console.log('Load Up Coming orders data',result);
            //     res.writeHead(200, {
            //         'Content-Type': 'application/json'
            //     });
               
             
            //     res.end(JSON.stringify({status:"success",
            //     upComingOrder:result
            //    }));
              
                             
             }
           
             
         })  
         conn.release();
 })
}


module.exports = {
    upComingOrder: upComingOrder
  };