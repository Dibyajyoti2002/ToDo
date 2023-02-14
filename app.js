const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

const items=["Eat","Sleep","Code"];

app.get("/",function(req,res){
    let day=date.getDate();
    res.render("list", {kindOfday : day , newListItems : items});
})

app.post("/",function(req,res){
    var item=req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(req,res){
    console.log("Server listening on port 3000");
})