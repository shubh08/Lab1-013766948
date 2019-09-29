const loadSectionData = (req, res, connPool) =>{
    console.log('Inside load section Data!!',req.body)
    const{id} = req.body;

    connPool.getConnection((error,conn)=>{
        // encryptPass = hash;
         console.log('Connection Created!');
         let loadSectionQuery = 'select * from section where restaurant_id=?';
         console.log(loadSectionQuery);
         conn.query(loadSectionQuery,[id],(error,result)=>{
             if(error)
             {
                 throw error;
             }

             else{
                console.log('Load Section data',result)

                console.log('Creating section object array')
                var sectionArr = []
                result.forEach((sectionItem)=>{
                    sectionArr.push(sectionItem)
                })
                console.log('Final Section Array',sectionArr)
                res.writeHead(200, {
                                 'Content-Type': 'application/json'
                             });
                             console.log('Result Section Data',result[0])
                             res.end(JSON.stringify({status:"success",
                             sectionData:sectionArr
                            }));
             }
           
             
         })  
         conn.release();
 })
}


module.exports = {
    loadSectionData: loadSectionData
  };