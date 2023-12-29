const mongoose= require('mongoose');
const todoSchema=mongoose.Schema({
    discription:String,
    status:Boolean,
  

})


const Data = mongoose.model('tododatas',todoSchema)

module.exports = Data;