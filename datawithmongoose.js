const mongoose = require('mongoose');

const mongoosemain = async () => {
    await mongoose.connect("mongodb://localhost:27017/vikassingh");
    const vikasdataSchema = new mongoose.Schema({
        name: String,
        course: String,
        university: String
    });

    const vikasdataModel = mongoose.model('vikasdata', vikasdataSchema);
    let newSchema = new vikasdataModel({
        name: 'akash singh',
        course: 'MBA',
        university: 'aktu'
    });
    let result = await newSchema.save();
    console.log(result);
}


const updateTOdb = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/vikassingh");//connection string
    const vikasdataSchema = new mongoose.Schema({
        name: String,
        course: String,
        university: String
    });
    const vikasdataModel = mongoose.model('vikasdata', vikasdataSchema);
    const data = await vikasdataModel.updateOne(
        {name:'akash singh'},
        {$set:{
            name :'vikas singh',
            course:'mca'
        }}
    )
    console.log(data);
}

updateTOdb();




const deleteIndb = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/vikassingh");
    const vikasdataSchema = new mongoose.Schema({
        name: String,
        course: String,
        university: String
    });
    const vikasdataModel = mongoose.model('vikasdata', vikasdataSchema);
    const data = await vikasdataModel.deleteMany({name :'akash singh'});
    console.log(data);
}
deleteIndb();
