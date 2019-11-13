var express = require('express');
var router = express.Router();


// router.get('/', skillsCtrl.index);
// router.get('/:id', skillsCtrl.show);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
