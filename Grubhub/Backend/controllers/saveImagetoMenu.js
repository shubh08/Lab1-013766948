const loadMenu =  require('./loadMenu'); 
const saveImagetoMenu = (req, res, connPool) =>{
  
    const {image,menu_id} = req.body;

connPool.getConnection((error,conn)=>{
    
    let queryGetStatus = 'update menu set menu_image=? where menu_id=?';
    console.log(queryGetStatus);
    conn.query(queryGetStatus,[image,menu_id],(error,resultgetStatus)=>{

        if(error)
        {
            throw error;
        }

        else
        {
            loadMenu.loadMenu(req,res,connPool);
       
               conn.release();
            
        }

    })
   
   
   

})
}

module.exports = {
    saveImagetoMenu: saveImagetoMenu
  };