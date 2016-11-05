var express = require('express');
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




module.exports = router;
