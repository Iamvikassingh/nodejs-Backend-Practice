const fethchfun = require('./connection')

let insert = async ()=>{
    let db = await fethchfun();
    const result = await db.insertMany([{pastcourse : 'BcA' , duration : '3year ', field :'computer-application'},{collegename :'Mewar institue of management',affitation : 'chaudhary charan singh university'},{currentcourse :'MCA',duration:'2year',college:'kiet group of institution',city:'ghaziabad',affitation : 'aktu (abdul klam technical university lucknow uttar pradesh'}]);
    if(result.acknowledged){
        console.log('data inserted ');
    }
}

insert();