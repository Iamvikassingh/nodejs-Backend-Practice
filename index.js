// // how to create route level middleware 

// const express = require('express');
// const app = express();
// //now we going to make middleware from another file and access here
// const requestFilter = require('./middleware');


// // now we going to make a route to use without app and use middleware
// const route = express.Router();

// route.use(requestFilter)


// //simple middleware code is started here
// // const requestFilter = (req,resp,next)=>{ 
// //     if(!req.query.age){
// //         resp.send('please provide your age');
// //     }else if(req.query.age<18){
// //         resp.send('you can`t access this page !');
// //     }
// //     else{
// //         next();
// //     }
// // }
// //simple middleware code is ended here


// //app.use(requestFilter); // this apply globably to all the routes

// //now going to create a route pages 

// //now this middleware is apply only on the home page not all the pages 
// // app.get('/home',requestFilter,(req,resp)=>{
// //     resp.send('hello this is a home page ');
// // })
// //only applies this page

// // with using route to middleware start here
// route.get('/home',(req,resp)=>{
//     resp.send('hello this is a home page');
// })
// // with using route to middleware ended here

// app.get('/about',(req,resp)=>{
//     resp.send('hello this is a about page');
// })

// app.get('/user',(req,resp)=>{
//     resp.send('hello this is a user page');
// })

// app.get('/contact',(req,resp)=>{
//     resp.send('hello this is a contact page');
// })

// app.use('/',route);

// app.listen(4500)



// const arr = [40 ,'vikas', 50 ,60,80];

// for(let i =0 ;i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach((iem)=>{
//     console.log(arr[4]);
// })

// for(let i of arr){
//     console.log(arr[1]);
// }

// simple api 


// const http = require('http');

// http.createServer((req , resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify([{'name':'vikas singh','Class':'Masters of computer application','Duration':'2-year','instituteName':'Kiet group of institution'},{'previousCourse:':'BCA'}]));
//     resp.end();
// }).listen(5000);



// mongoose establish connection with node js and express js 
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dataBase = 'vikassingh';

// async function GetData(){
//     let resulet = await client.connect();
//     let db = resulet.db(dataBase);
//     let collection = db.collection('vikasdata');
//     let respond = await collection.find({}).toArray();
//     console.log(respond);
// }

// GetData();



//how to fetch data

// let url = 'http://hn.algolia.com/api/v1/search?query=html';


// let waitingfun = new Promise((resolve , reject)=>{
//     try {
//         async function fetchData(){
//             const result = await fetch(url);
//             const  respond = await result.json();
//             resolve(respond);
    
//         }
//             fetchData(); 
//     } catch (error) {
//         console.log(error);
//     }
    
// })

//  waitingfun.then((data)=>{
//         console.log(data);
//  })

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const DataBase = 'vikassingh';

// const fethchfun = async () => {
//     const result = await client.connect();
//     const db = result.db(DataBase);
//     return db.collection('vikasdata');
//     // const respond = await collection.find({}).toArray();
//     // console.log(respond);

// }



const fethchfun = require('./connection');




// console.warn(fethchfun())

// fethchfun().then((resp)=>{
//     resp.find({duration :'2year'}).toArray().then((data)=>{
//         console.log(data);
//     })
// })





const fetchfull = async ()=>{
 let respond = await fethchfun();
  respond = await respond.find().toArray();
  console.log(respond);

}
fetchfull()
