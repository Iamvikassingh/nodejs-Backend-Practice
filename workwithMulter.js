const express = require('express');
const multer = require('multer');
const app = express();


const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }
    })
}).single("user_file");


//now we define routes 
app.post('/file',upload,(req, resp)=>{
    resp.send('file uploaded');
})

app.listen(4500)