/**
 * Created by zhh on 2016/11/24.
 */

var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    //res.send("this index page");
    var params = {
        title:req.query.title,
        scripts:['code/index.js']
    } ;
    res.render("index",params);
});

module.exports = router;

