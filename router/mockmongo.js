var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function (req, res, next) {
   return res.render('mockmongo', { title: 'MockMongo' });
});

router.get('/zhang', function(req,res,next){
  return res.json({ user: 'zhang' });
});

router.post('/zhang', function(req, res, next) {
  return res.json({ method: 'post'});
});

router.get('/list', function( req, res,next){
  var name = req.cookies ? req.cookies.user_id : undefined;

  User.
    find().
    sort('-age').
    exec(function (err, users) {
      if( err ) return next( err );

      res.render( 'index', {
          title : 'Express Todo Example',
          todos : users
      });
    });

})



module.exports = router;
