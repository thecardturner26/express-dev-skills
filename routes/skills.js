var express = require('express');
var router = express.Router();
var Skill = require('../models/skill');
var skillsCtrl = require('../controllers/skills');


/* GET skills listing. */

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;


// var express = require('express');
// var router = express.Router();
// var todosCtrl = require('../controllers/todos');

// /* GET /todos */
// router.get('/', todosCtrl.index);
// /* GET /todos/5 for example */
// router.get('/:id', todosCtrl.show);

// module.exports = router;