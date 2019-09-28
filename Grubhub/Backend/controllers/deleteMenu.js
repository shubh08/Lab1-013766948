
const loadMenu =  require('./loadMenu'); 

const deleteMenu = (req, res, connPool) =>{
   console.log('Inside delete Menu ', req.body)
    const {deleteid} = req.body;

connPool.getConnection((error,conn)=>{
    
    let queryDeleteMenu = 'delete from menu where menu_id = ?';
    console.log(queryDeleteMenu);
    conn.query(queryDeleteMenu,[deleteid],(error,resultgetStatus)=>{

        if(error)
        {
            throw error;
        }

        else
        {
                    conn.release();
        
                    loadMenu.loadMenu(req,res,connPool);
               
                       
                    
               

            
            
        }

        
    })
   
   
   

})
}

module.exports = {
    deleteMenu: deleteMenu
  };