
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let cors = require('cors');
let sqlCon = require('mysql');
const bcrypt = require('bcrypt');
const multer = require("multer");
const registerOwner = require('./controllers/registerOwner');
const registerCustomer = require('./controllers/registerCustomer');
const signinCustomer = require('./controllers/signinCustomer');
const signinOwner = require('./controllers/signinOwner');
const updateOwner = require('./controllers/updateOwner');
const updateUser = require('./controllers/updateUser');
const loadCustProfile =  require('./controllers/loadCustomerProfile');
const loadOwnerProfile =  require('./controllers/loadOwnerProfile'); 
const loadSectionData =  require('./controllers/loadSectionData'); 
const addSection   =  require('./controllers/addSection'); 
const addMenu   =  require('./controllers/addMenu'); 
const loadMenu   =  require('./controllers/loadMenu'); //deleteSection
const deleteMenu = require('./controllers/deleteMenu'); 
const deleteSection = require('./controllers/deleteSection'); 
const updateSection = require('./controllers/updateSection');  
const updateMenu = require('./controllers/updateMenu'); 
const searchDishes = require('./controllers/searchDishes');
const loadRestaurant = require('./controllers/loadRestaurant');  
const order = require('./controllers/order');  
const pastorder = require('./controllers/pastorder');    //upComingOrder
const upComingOrder = require('./controllers/upComingOrder');

// const profile = require('./controllers/profile');
// const image = require('./controllers/image');

const saltRounds = 10;




let connPool = sqlCon.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'grubhub'
});


app.use(cookieParser());

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//use express session to maintain session data
app.use(session({
    secret: 'cmpe273_kafka_passport_mongo',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(bodyParser.json());

//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

let Users = [{
    username: "admin",
    password: "admin"
}]

let books = [
    { "BookID": "1", "Title": "Book 1", "Author": "Author 1" },
    { "BookID": "2", "Title": "Book 2", "Author": "Author 2" },
    { "BookID": "3", "Title": "Book 3", "Author": "Author 3" }
]

// //Route to handle Post Request Call
// app.post('/login', function (req, res) {

//     // Object.keys(req.body).forEach(function(key){
//     //     req.body = JSON.parse(key);
//     // });
//     // let username = req.body.username;
//     // let password = req.body.password;
//     console.log("Inside Login Post Request");
//     //console.log("Req Body : ", username + "password : ",password);
//     console.log("Req Body : ", req.body);
//     Users.filter(function (user) {
//         if (user.username === req.body.username && user.password === req.body.password) {
//             res.cookie('cookie', "admin", { maxAge: 900000, httpOnly: false, path: '/' });
//             req.session.user = user;
//             res.writeHead(200, {
//                 'Content-Type': 'text/plain'
//             })
//             res.end("Successful Login");
//         }

//         else{
//             res.writeHead(400, {
//                 'Content-Type': 'text/plain'
//             })
//             res.end("UnSuccessful Login");
//         }
//     })


// });

// User signup

app.post('/signup',(req,res)=>{
console.log('Inside signup post',req.body);

if(req.body.type==='customer')
{
registerCustomer.registerCust(req, res, connPool, bcrypt)
}

else{
registerOwner.registerOwn(req, res, connPool, bcrypt);
}


})



// User Signin
app.post('/signin',(req,res)=>{
    console.log('Inside sign in..',req.body);

    if(req.body.type==='customer')
    {
        signinCustomer.signinCust(req, res, connPool, bcrypt)
    }
    
    else{
        signinOwner.signinOwn(req, res, connPool, bcrypt);
    }
    

})

// User Update
app.post('/update',(req,res)=>{
    console.log('Inside update info..',req.body);
    if(req.body.type==='customer')
    {
        updateUser.updateUser(req, res, connPool)
    }
    
    else{
        updateOwner.updateOwner(req, res, connPool);
    }

})  

//Load Profile Data
app.post('/loadProfileData',(req,res)=>{
    console.log('Inside loading of profile info..',req.body);
    if(req.body.type==='customer')
    {
        loadCustProfile.loadCustProfile(req, res, connPool)
    }
    
    else{
        loadOwnerProfile.loadOwnerProfile(req, res, connPool);
    }

})

//loadSectionData


app.post('/loadSectionData',(req,res)=>{

    console.log('Inside load section data here',req.body)

        loadSectionData.loadSectionData(req, res, connPool);
    
})

//addSection

app.post('/addSection',(req,res)=>{

    addSection.addSection(req, res, connPool);

})


//updateSection

app.post('/updateSection',(req,res)=>{

    updateSection.updateSection(req, res, connPool);

})

//delete Section

app.post('/deleteSection', function (req, res) {
    console.log("Inside delete function");

    deleteSection.deleteSection(req, res, connPool)
    // if(!req.session.user){
    //     console.log('Inside hererereresndsjdksajkdjaskd');
    //     res.writeHead(404, {"Content-Type": "text/plain"});
    //     res.write("404 Not Found\n");
    //     res.end();
    //     return;
    // }


    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // });
    // console.log('Req Object', req.body);
    // let responseObj = { resValue: deleteFromBooks(req.params.id) };
    // console.log("Books : ", JSON.stringify({ responseObj }));
    // res.end(JSON.stringify(responseObj));
});


//addMenu  addMenu
app.post('/addMenu',(req,res)=>{

    addMenu.addMenu(req, res, connPool);

})


//loadMenu
app.post('/loadMenu',(req,res)=>{

    loadMenu.loadMenu(req, res, connPool);

})

//Delete Menu

app.post('/deleteMenu',(req,res)=>{

    deleteMenu.deleteMenu(req, res, connPool);

})


//updateMenu

app.post('/updateMenu',(req,res)=>{

    updateMenu.updateMenu(req, res, connPool);

})

//searchDishes

app.post('/searchDishes',(req,res)=>{

    searchDishes.searchDishes(req, res, connPool);

})


//Load Restaurant  

app.post('/loadRestaurant',(req,res)=>{

    loadRestaurant.loadRestaurant(req, res, connPool);

})

//order
app.post('/order',(req,res)=>{

    order.order(req, res, connPool);

})

// Load Past Data

app.post('/pastorder',(req,res)=>{

    pastorder.pastorder(req, res, connPool);

})

// Load Upcoming order  upComingOrder
app.post('/upComingOrder',(req,res)=>{

    upComingOrder.upComingOrder(req, res, connPool);

})

//Route to get All Books when user visits the Home Page
app.get('/home', function (req, res) {
    console.log('Session',req.session.user);
    if(!req.session.user){
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
        return;
    }

    console.log("Inside Home Login");
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    console.log("Books : ", JSON.stringify(books));
    res.end(JSON.stringify(books));

})

// Route to create a delete
app.delete('/delete/:id', function (req, res) {
    console.log("Inside delete function");

    if(!req.session.user){
        console.log('Inside hererereresndsjdksajkdjaskd');
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
        return;
    }


    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    console.log('Req Object', req.body);
    let responseObj = { resValue: deleteFromBooks(req.params.id) };
    console.log("Books : ", JSON.stringify({ responseObj }));
    res.end(JSON.stringify(responseObj));
});


//Route to create and add books
app.post('/create', function (req, res) {
    if(!req.session.user){
        console.log('Inside');
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
        return;
    }

    let response;
    let responseObj = {};
    console.log('\n Inside Create Post method');
    let duplicate = false;
    console.log("Inside Create Post Request");
    books.filter(function (book) {
        console.log('\n', book);
        if (book.BookID === req.body.bookID) {
            console.log('Duplicate found', book);
            duplicate = true;
        }
    })
    if (duplicate) {
        console.log('\n Inside create duplicate')
        responseObj.bookss = books
        responseObj.nextComponent = "Failure"

    }
    else {
        console.log('\n Inside create not duplicate!');
        let book = {
            BookID: req.body.bookID,
            Title: req.body.title,
            Author: req.body.author
        }
        books.push(book);
        responseObj.bookss = books
        responseObj.nextComponent = "Success"
    }
    //books = responseObj.bookss;

    console.log('Books updated', books);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    console.log("Books : ", JSON.stringify(responseObj));
    res.end(JSON.stringify(responseObj));
});


deleteFromBooks = (id) => {
    console.log('Deleting book with id', id);
    for (let i = 0; i < books.length; i++) {
        if (books[i].BookID === id) {
            books.splice(i, 1);
            return 'success';
        }
    }
    return 'failure';
}

app.get('/logout',(req,res) => {
    console.log('logout success');
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        
    });

});


//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");
