
const loadSectionData =  require('./loadSectionData'); 

const addSection = (req, res, connPool) =>{
   console.log('Inside add section ', req.body)
    const {section_name,id,section_description} = req.body;

connPool.getConnection((error,conn)=>{
    let encryptPass='';
    let queryAddSection = 'insert into section(section_name,restaurant_id,section_description) values (?, ?, ?)';
    console.log(queryAddSection);
    conn.query(queryAddSection,[section_name,id,section_description],(error,resultgetStatus)=>{

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
    addSection: addSection
  };