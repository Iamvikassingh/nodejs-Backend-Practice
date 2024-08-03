const express = require('express');
const fethchfun = require('./connection');
const mongodb = require('mongodb')
const app = express();
app.use(express.json());



app.get('/',async (req , resp)=>{
    let db = await fethchfun();
    let data = await db.find().toArray();
    resp.send([{name : 'vikas singh'},data])
});


app.post('/',async(req, resp)=>{
    let db = await fethchfun();
    let result = await db.insertMany([req.body]);
        resp.send(result)
        
})

app.put('/',async(req,resp)=>{
        let db = await fethchfun();
        let result = await db.updateOne({"brother name":"akash kumar singh"},{$set:req.body});
        console.log(req.body)
        resp.send({"result":req.body})
})

app.delete('/:id',async(req,resp)=>{
    let db = await fethchfun();
    let result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id) });
    console.log(req.params.id)
    resp.send(result)
})
app.listen(4500);