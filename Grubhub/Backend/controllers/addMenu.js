
const loadMenu =  require('./loadMenu'); 

const addMenu = (req, res, connPool) =>{
   console.log('Inside add Menu ', req.body)
    const {menu_name,id,menu_description,menu_price,menu_image} = req.body;

connPool.getConnection((error,conn)=>{
    let encryptPass='';
    let queryAddSection = 'insert into menu(menu_name,menu_description,menu_price,menu_image,section_id) values (?, ?, ?,?,?)';
    console.log(queryAddSection);
    conn.query(queryAddSection,[menu_name,menu_description,menu_price,'default.png',id],(error,resultgetStatus)=>{

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
    addMenu: addMenu
  };