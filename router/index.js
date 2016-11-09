var express = require('express');
var multer = require('multer');
var upload = multer();

var router = express.Router();


router.get('/', function (req, res, next) {
   return res.render('index', { title: '主页' });
});

router.get('/zhang', function(req,res,next){
  return res.json({ user: 'zhang' });
});

router.post('/zhang', function(req, res, next) {
  return res.json({ method: 'post'});
});

router.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});




module.exports = router;
