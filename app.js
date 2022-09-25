const express=require("express")
const bodyParser=require("body-parser")
const date = require(__dirname+"/date.js")
const app=express()

app.use(bodyParser.urlencoded( {extended : true} ))
app.use(express.static("public"))


var items=['Do some Development','Dsa','Take a walk']
var workItems=[]


app.set('view engine', 'ejs')


app.get("/",function(req,res){
    let day=date()
    res.render("list",{listTitle:day,newadd:items})
})

app.post("/",function(req,res){
    var item=req.body.newItem
    if(req.body.list==="Work-List"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/")
    }
   
})

app.get("/work",function(req,res){
   
    res.render("list",{listTitle:"Work-List",newadd:workItems})
})


app.post("/work",function(req,res){
    var item=req.body.newItem
    workItems.push(item)
    res.redirect("/work")
})




app.listen(process.env.PORT,function(req,res){
    console.log("Server listening on port 3000")
})
