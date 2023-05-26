const express = require('express'); //import
const {model} = require('mongoose')
const stmo = require ('./model/studentdb')
const cors = require('cors')

const app = new express(); //initialize

app.use(express.urlencoded({extended:true}))  //middleware
app.use(express.json());
app.use(cors ());

app.post('/create',(req,res) => { // to create the new data
    var result = new stmo(req.body);
    result.save()
    res.send("data added")
})

app.get('/see',async(req,res) => { //to see the details
    var data = await stmo.find();
    res.json(data);
})

app.get('/view',(req,res) => {  //app.get(url,callback)
    res.json({"Name":"Rahul","Age":19})
})

app.delete('/delete/:id',async(req,res) => {
    let id = req.params.id;
    await stmo.findByIdAndDelete(id);
    res.send("Deleted");

})

app.put('/edit/:id',async(req,res) => {
    var id = req.params.id;
    await stmo.findByIdAndUpdate(id,req.body);
    res.send("Updated");
})

app.listen(4000,() => { //port
    console.log('App is in port 4000')
})