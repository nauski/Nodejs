var express = require('express');
var router = express.Router();
var zabbix = require('../models/zabbix');

// members page
router.get('/', ensureAuthenticated, function(req, res, next) {
 // res.render('index', { title: 'Members' });
  
  zabbix.login(function (err, resp, body) {
    if (!err) {
      console.log("Authenticated! AuthID is: " + zabbix.authid);

    }
  
    zabbix.getApiVersion(function (err, resp, body) {
      console.log("Zabbix API version is: " + body.result);
    });
    
    zabbix.call("host.get",
      {
        //"output": ["hostid", "itemid", "name"]
        "selectInventory": false,
          "selectItems": [
          "name",
          "lastvalue",
          "units",
          "itemid",
          "lastclock",
          "value_type"
                         ],
       // "output": "extend",
        "hostids": "10085",
        "expandDescription": 1,
        "expandData": 1
        
  
      }
      ,function (err, resp, body) {
       var result = JSON.stringify(body.result[0].items[26].lastvalue);
       var result2 = JSON.stringify(body.result, null, 4);
        if (!err) {
          console.log(body.result[0].items[26].lastvalue);
          res.write(result);
          res.write('\n-----------\n');
          res.write(result2);
          res.end();
        }
      }); 
      
      /*zabbix.call("item.get",
      {
        //"output": ["hostid", "itemid", "name"]
        "output" : "extend",
        "host" : "www.nauski.com"
        
      }
      ,function (err, resp, body) {
       var result = JSON.stringify((body.result),null, 4);
        if (!err) {
          console.log(body.result);
          res.end(result);
        }
      });*/
     
  /*  zabbix.call("history.get",
      {
        "output": "extend",
        "history": 0,
        "host": "www.nauski.com",
        "sortfield": "clock",
        "sortorder": "DESC",
        "limit": 10
        

      }
      ,function (err, resp, body) {
       var result = JSON.stringify((body.result),null, 4);
        if (!err) {
          console.log(body.result);
          res.end(result);
        }
      }); */

});


});



function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/users/login');
}
module.exports = router;
