const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://krahulkarat:karatfamily@cluster0.mpvwxti.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('db connected')
})
.catch(err=>console.log(err));

let schema = mongoose.Schema;

const stud = new schema({
    sname:String,
    sgrade:Number
})

var stmo = mongoose.model('stds',stud)
module.exports = stmo;