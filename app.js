const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index");
});
app.get("/how",function(req,res){
  res.render("how");
});
app.get("/calc",function(req,res){
  res.render("calc");
});
app.post("/calc",function(req,res){
  console.log(req.body);
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
