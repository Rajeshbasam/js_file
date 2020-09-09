const express=require("express"); 
const app=express();
var u_name="rajesh";
console.log(u_name);
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res) => {
    res.send('Hii,Welcome to Node.js');
    });

app.set("view engine", "ejs");
app.post('/',(req, res) => {
    console.log(req.body);
    });
app.use("/static", express.static("public"));
app.listen(3000, () => 
console.log("Server Up and running"));
const ToDoApp=require('./ ToDoApp');
console.log(ToDoApp);
var Http=require('Http');
Http.createserver(function(req,res){
    res.end("welcome back rajesh");
    
})

  

