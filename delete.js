const fethchfun = require('./connection');

let deletData = async ()=>{
    let db = await fethchfun();
    let result = await db.deleteMany({name :'vikas singh'});
    if(result.acknowledged){
        console.log('your matched collection is delete');
    }
    if (result.deletedCount == 0){
        console.log('this data is not presented in your database ');
    }
}
deletData();