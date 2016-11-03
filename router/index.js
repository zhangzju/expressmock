var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
   res.send('Root directory');
})



module.exports = router;
