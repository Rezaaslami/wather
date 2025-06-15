const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());


//*********** ********************************/
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){


    

     var query = req.body.cityName; // API
     var url = "http://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid=e821d89dfa74f79e76a1048e42c33199";// API
 
   http.get(url , function(response){  // http
        
    response.on("data" , function(data){ // API
        var weather = JSON.parse(data); // API

        var temp = weather.main.temp;// API
        var description = weather.weather[0].description;// API

        var icon = weather.weather[0].icon;// API
        var iconURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png";// API

        res.write("<h1>The weather is "+ description +"  and " + temp+" celsuce </h1>");// General
        res.write("<img src="+ iconURL +">"); // General


        res.send(); // general

    });
   });





    

});

// ************************************

app.listen(4000,function(){
    console.log("the app is listening on port 4000");
});



























