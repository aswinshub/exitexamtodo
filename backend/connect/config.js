const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aswindb:aswin123@company.ck23ks9.mongodb.net/todo?retryWrites=true&w=majority')
.then(()=>{

console.log('Connected To Todo DB')

})
.catch(()=>{
    console.log('Error No Connection')
})


