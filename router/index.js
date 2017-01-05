var express = require('express');
var multer = require('multer');
var upload = multer();

var router = express.Router();

var serverapi = [
  {"name": "expressmock", "author": "zhangzju"}
]

router.get('/', function (req, res, next) {
   return res.json(serverapi)
});


module.exports = router;
