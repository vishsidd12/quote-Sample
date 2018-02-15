var exp = require('express');
var app = exp();

app.get("/",function(request,response){
  response.sendFile(__dirname+"/index.html");
});

var port = process.env.PORT || 8080;

var server = app.listen(port,function(request,response){
     console.log("Inside listen function");
     console.log(__dirname);

})