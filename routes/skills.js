var express = require('express');
var router = express.Router();
var Skill = require('../models/skill');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
});

//todos: todoDb.getAll()

module.exports = router;



// var express = require('express');
// var router = express.Router();
// var todosCtrl = require('../controllers/todos');

// /* GET /todos */
// router.get('/', todosCtrl.index);
// /* GET /todos/5 for example */
// router.get('/:id', todosCtrl.show);

// module.exports = router;