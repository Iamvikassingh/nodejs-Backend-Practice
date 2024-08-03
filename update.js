const fethchfun = require('./connection');

const update = async ()=>{
    let db = await fethchfun();
    let result = await db.updateMany({field :'computer-application'}, {$set:{field :'web computer-application'}});
    if(result.acknowledged){
        console.log('result is updated')
    }
}

update();