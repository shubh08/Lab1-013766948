
const loadSectionData =  require('./loadSectionData'); 

const updateSection = (req, res, connPool) =>{
   console.log('Inside update section ', req.body)
    const {section_name,updateid,section_description} = req.body;

connPool.getConnection((error,conn)=>{
    let encryptPass='';
    let queryAddSection = 'update section set section_name=?,section_description=? where section_id=?';
    console.log(queryAddSection);
    conn.query(queryAddSection,[section_name,section_description,updateid],(error,resultgetStatus)=>{

        if(error)
        {
            throw error;
        }

        else
        {
            loadSectionData.loadSectionData(req,res,connPool);
       
               conn.release();
            
        }

        
    })
   
   
   

})
}

module.exports = {
    updateSection: updateSection
  };