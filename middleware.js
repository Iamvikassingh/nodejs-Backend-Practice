// module.exports = requestFilter= (req,resp,next)=>{ 
//         if(!req.query.age){
//             resp.send('please provide your age');
//         }else if(req.query.age<18){
//             resp.send('you can`t access this page !');
//         }
//         else{
//             next();
//         }
//     }