/**
 * Created by zhh on 2016/11/24.
 */

var express = require("express");

var router = express.Router();

router.get('/', function(req, res){
    //res.send("this user page " + req.params.name)
    var params = {
        name:'Anonymous',
        title:req.query.title
    } ;
    res.render('user',params);
});

router.get('/:name', function(req, res){
    //res.send("this user page " + req.params.name)
    var params = {
        name:req.params.name,
        title:req.query.title
    } ;
    res.render('user',params);
});

module.exports = router;