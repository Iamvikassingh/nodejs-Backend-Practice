// const app = require('./app')
// console.log(app.a)

const { json } = require("express")

// const arr = [10,20,3,45,8];
// let result = arr.filter((item)=>{
//     return item>3
// })

// console.log(result)

// what are core modules?

// console.log ('this is a core moduele') global module

// const fs = require('fs').writeFileSync;//non global module
// console.log("hello my name is vikas singh");
// fs.writeFileSync("hello2.txt","learn node js ")
// console.log(__dirname, __filename);

// basic server

// how to send function as a perameter

// const http = require("http");

// const dataControl = () =>{
//     resp.write("<h1>hello my name is vikas singh</h1>")
//     resp.end();
// }

//createServer use req , resp parameter to control the server
// http.createServer((req, resp) => {
//     resp.write("<h1>hello my name is vikas singh</h1>");
//   })
//   .listen(4500);


//   what is package.json 

// console.log('package.json')

// const colors = require('colors');
//  console.log("hello".blue); //node js is a single threaded languague 
// node js is a async language

// node js never wait to comand fully completerd after that they goes on aonother command node js is a asynic language so they auto start another command.

//basic static api in node js 

// const http = require("http");
// const data = require('./data');
// http.createServer((req,resp)=>{
//   resp.writeHead(200,{'Content-Type':'application\json'});
//   resp.write(JSON.stringify(data));
//   resp.end();
// }).listen(4500);


// learn to get data from command line in node js
//what is process in node js
// process is an object a huge object it contain almost node js


// const fs = require('fs');
// const input = process.argv; // to get item from console and save it into file 
// if(input[2]=='add'){
//   fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=='remove'){
//   fs.unlinkSync(input[3])
// }else{
//   console.log('invalid output');
// }


// practice to create basic api

// const http = require('http');
// const data = require('./data');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4500)


// crud operation in fs using node js

//1. creat a file in file system inside a folder


// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname,'crud');
// const filEName = `${filePath}/apple.txt`;


// fs.writeFileSync(filEName,'Hello this is an apple');


// fs.readFile(filEName,'utf8', (err,item)=>{
//   console.log(item.yellow);
// })

// fs.appendFile(filEName, ' this is append data',(error)=>{
//   if(!error){
//     console.log('file is updated ');
//   }
// })
// fs.rename(filEName,`${filePath}/fruit.txt`,(error)=>{
//   if(!error){
//     console.log('file name is renamed');
//   }
// })

// fs.unlink(`${filePath}/fruit.txt`,(error)=>{
//   if(!error){
//     console.log("file is removed");
//   }
// })


// practice work here

// create a simple api

// const http = require('http');
// const data = require('./data');

// http.createServer((request, respond)=>{
//     respond.writeHead(200,{'Content-Type':'application\json'});
//     respond.write(JSON.stringify(data));
//     respond.end();
// }).listen(4500);


// next chapter today


// let a=10;
// let b = 0;

// setTimeout(() => {          //problem in asyncronous programing language 
//   let  b = 50;
// }, 2000);


//solution to handel asyncronous programing language

// by using promise 

// let problemHandel = new Promise((resolve, reject)=>{
//    try {
//     setTimeout(() => {
//         resolve(50);
//     }, 2000);
//    } catch (error) {
//       reject(error)
//    }
// })

// problemHandel.then((data)=>{
//     b=data;
//  console.log(a+b);
// })


// start here with express js



// const express = require('express');

// const app = express();

// app.get('',(req, resp)=>{
//     console.log('data send by the browser -->>',req.query.name);
//         resp.send(`
//         <h1>welcome ${req.query.name}</h1>
//         `);
// })
// app.get('/about',(req, resp)=>{
//     resp.send('welcome to the about us page')
// })
// app.get('/help',(req, resp)=>{
//     resp.send('welcome to the help us  page')
// })
// app.listen(4500);


// promis practice 


// first why we use promise , what is the problem
// let a = 10;
// let b = 0;

// setTimeout(() => {
//     let b = 50;
// }, 2000);

// console.log(a+b);

// now how to handel this problem why using promis 

// let a = 10;
// let b = 0;

// const waitingTime = new Promise((resolve , reject)=>{
//         try {
//             setTimeout(() => {
//                 resolve(50)
//             }, 2000);
//         } catch (error) {
//             reject(error)
//         }
// });

// waitingTime.then((data)=>{
//     console.log(a+data);
// })


// next chapter 

// make a folder for html file and access it 
// make html files 
// load html files 
// interview question. 

// const path = require('path');//path module use to get the path of your project inside path and outside path
// const express = require('express');
// const app = express();

// const publicPath = path.join(__dirname , 'public');

// app.use(express.static(publicPath));

// app.listen(4500)


// practice to access folder using path and excess all the file of a folder

// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname , 'public');
// app.use(express.static(publicPath));
// app.listen(5000)

//practice  to remove extension end of the file 
// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname,'public');


// app.get('/home', (req , resp) => {
//         resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about', (req , resp) => {
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/help', (req , resp) => {
//     resp.sendFile(`${publicPath}/help.html`)
// })


// app.get('*', (req , resp) => {
//     resp.sendFile(`${publicPath}/onpage.html`)
// })
// app.listen(4500)



// how to use ejs template in express js 

// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname,'public');


// app.set('view engine', 'ejs');

// app.get('/home', (req , resp) => {
//         resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about', (req , resp) => {
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/help', (req , resp) => {
//     resp.sendFile(`${publicPath}/help.html`)
// })

// let user = {
//     name  : 'vikas singh',
//     email: '9625vikassingh@gmail.com',
//     skills : ['html','css','js','bootstrap','tailwind css','react-js','node-js']
// }

// app.get('/profile', (req , resp) => {
//     resp.render('profile',{user});
// })

// app.get('*', (req , resp) => {
//     resp.sendFile(`${publicPath}/onpage.html`)
// })



// app.listen(4500)




// how to make a middleware 

// basic middleware 

// application level middleware 

// const express = require('express');
//  const app = express();

//  const requestFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send('please provide age')
//     }else if(req.query.age<18){
//         resp.send('you can not acces this page');
//     }
//     else{
//         next();
//     }
//  }

// app.use(requestFilter);

//  app.get('/', (req, resp)=>{
//         resp.send('welcome to home page ');
//  })

//  app.get('/about', (req, resp)=>{
//     resp.send('welcome to about page ');
// })




//  app.listen(4500);





// practice to data connection with mongoose 


// const mongoose = require('mongoose');


// const connectionTodatabase = async() =>{
//         await mongoose.connect('mongodb://localhost:27017/vikassingh');
//         // now we are going to define schema 

//         const vikasSchema = new mongoose.Schema({
//             name :String,
//             course : String,
//             university : String,
//             startingYear : Number,
//             endingYear : Number,
//         })

//         // now we are going to define model
//         const vikasModel = mongoose.model('vikasdata',vikasSchema);
//         const newSchem = new vikasModel({
//             name :"vikas singh",
//             course : "masters in computer application",
//             university : "kiet group of institutions",
//             startingYear : 2024,
//             endingYear : 2026,
//         });
//         const result = await newSchem.save();
//         console.log(result);

// }

// connectionTodatabase();



// practice to connection with mongodb 

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const Client = new MongoClient(url);
// const database = "vikassingh";

// const connectiontoDB = async ()=>{        // summery ( db.vikasdata.find().pretty(); )
//     const connection = await Client.connect();
//     const db = connection.db(database);
//     const collection = db.collection('vikasdata');
//     console.log(await collection.find().toArray());
// }
// connectiontoDB()

// working with multer in node js 

// const express = require('express');
// const multer = require('multer');
// const app = express();

// // now we define multer 
// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+"-"+Date.now+".jpg");
//         }
//     })
// }).single("user_file")



// // now we define routes 
// app.post("/practice",upload,(req,resp)=>{
//     resp.send('file uploaded');
// })

// app.listen(5000)



// here we try to learn how to make schema and models


// import mongoose from "mongoose"
// const userSchema = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//             unique: true,
//             lowercase: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//             lowercase: true
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//         createdBy:{
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User", // it always the same name of mode in name 
//         }
//     },{ timestamps: true })


// export const User = mongoose.model("User", userSchema)


//ecommerce data modeling
// usermodel
// import mongoose from "mongoose"

// const userSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         required:true,
//         unique:true,
//         lowercase:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//         lowercase:true
//     },
//     password:{
//         type:String,
//         required:true,
//     }
// },{timestamps:true});
// export const User = mongoose.model("User",userSchema);

// catagories

// import mongoose from "mongoose"

// const categorySchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     }
// },{timestamps:true})

// export const Catagory = mongoose.model("Category",categorySchema);

//product Schema 
//  import mongoose from 'mongoose '

//  const productSchema = new mongoose.Schema({
//     description:{
//         require:true,
//         type:String
//     },
//     name:{
//         require:true,
//         type:String
//     },
//     productImage:{
//         type:String
//     },
//     price:{
//         type:Number,
//         default:0
//     },
//     stock:{
//         type:Number,
//         default:0
//     },
//     category:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Category",
//         require:true,

//     },
//     owner:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     }
//  },{Timestamps:true})
//  export const Product = mongoose.model("Product",productSchema)


//orderdetail

// import mongoose from 'mongoose'
// const orderItemSchema = new mongoose.Schema({
//     productId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Product"
//     },
//     quantity:{
//         type:Number,
//         required:true
//     }
// })

// const orderSchema = new mongoose.Schema({
//     orderPrice:{
//         type:Number,
//         required:true,
//         default:0
//     },
//     customer:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     orderItem:{
//         type:[orderItemSchema]
//     },
//     address:{
//         type:String,
//         requried:true
//     },
//     status:{
//         type:String,
//         enum:["PENDING","CANCELLED","DELIVERED"],
//         default:"PENDING"
//     }
// },{timestamps:true})
// export const Order = mongoose.model("Order",orderSchema)