
const express = require('express');
require('./config');
const schemaFile = require('./mongooseSchmafile');
const app = express();
app.use(express.json());
app.post("/create", async(req,resp)=>{

    let data = new schemaFile(req.body);
    let result = await data.save();//saving the data in the database
    console.log(result);
    resp.send(result);
})

app.get('/list',async (req , resp )=>{
    let data = await schemaFile.find()
    resp.send(data);
})

app.delete('/delete/:_id', async(req,resp)=>{
    console.log(req.params)
    let data = await schemaFile.deleteOne(req.params)
    console.log('done');
    resp.send(data);
})



app.put('/update/:_id',async (req,resp)=>{
    console.log(req.params);
    let data = await schemaFile.updateOne(req.params , {
        $set:req.body
    });
    resp.send(data);
    console.log(data);
})

app.put("/insert", async (req, resp)=>{
    console.log(req.body);
    let data = await schemaFile.insertMany(req.body);
    resp.send(data);
    
})

app.get("/search/:key",async (req,resp)=>{
    console.log(req.params.key);
    let data = await schemaFile.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"course":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);
})


app.listen(4500);
