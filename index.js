/**
 * Created by zhh on 2016/11/24.
 */


var express = require("express");
var path = require('path');
var app = express();


var indexRouter = require("./routes/index.js");
var userRouter = require("./routes/user.js");

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));

app.use('/',indexRouter);
app.use('/user',userRouter);

app.use(function(req,res,next){
    res.type('text/plain');
    res.status("404");
    res.send('404-NoFound');
});




app.listen(8080,function(){
    console.log('server is start at http://localhost:8080')
});



