
const loadMenu =  require('./loadMenu'); 

const updateMenu = (req, res, connPool) =>{
   console.log('Inside update menu ', req.body)
    const {menu_name,updateid,menu_description,menu_image,menu_price} = req.body;

connPool.getConnection((error,conn)=>{
   
    let queryAddSection = 'update menu set menu_name=?,menu_description=?,menu_price=? where menu_id=?';
    console.log(queryAddSection);
    conn.query(queryAddSection,[menu_name,menu_description,menu_price,updateid],(error,resultgetStatus)=>{

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
    updateMenu: updateMenu
  };