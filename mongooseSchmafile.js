const mongoose = require('mongoose');
const personaldetailSchema = new mongoose.Schema({
    name :String,
    course : String,
})
module.exports=mongoose.model('vikasdata',personaldetailSchema);
