
const loadSectionData =  require('./loadSectionData'); 

const deleteSection = (req, res, connPool) =>{
   console.log('Inside delete section ', req.body)
    const {deleteid} = req.body;

connPool.getConnection((error,conn)=>{
    
    let queryDeleteMenu = 'delete from menu where section_id = ?';
    console.log(queryDeleteMenu);
    conn.query(queryDeleteMenu,[deleteid],(error,resultgetStatus)=>{

        if(error)
        {
            throw error;
        }

        else
        {
            let queryDeleteSection = 'delete from section where section_id = ?';
            console.log(queryDeleteSection);
            conn.query(queryDeleteSection,[deleteid],(error,resultgetStatus)=>{
        
                if(error)
                {
                    throw error;
                }
        
                else
                {
                    conn.release();
        
                    loadSectionData.loadSectionData(req,res,connPool);
               
                       
                    
                }
        
                
            })

            
            
        }

        
    })
   
   
   

})
}

module.exports = {
    deleteSection: deleteSection
  };