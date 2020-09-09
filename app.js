const express=require("express");
const app=express();

app.get('/',function(req,res){
    res.send('hello world')
});
app.get('/rajesh',function(req,res){
    const id=res.query.id
    res.send('hii this is rajesh'+id)
})
app.get('/rajesh/20',function(req,res){
    res.send('hey this is rajesh')
})
app.get('/rajesh/:id',function(req,res){
    const id=res.params.id
    res.send('this is rajesh'+id)
})

app.listen(3000,function(req,res){
    console.log('running');

});


