var express = require('express');
var router = express.Router();
// Require the controller that exports Skill CRUD functions
var skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"
router.get('/', skillsCtrl.index)

// GET /skills/:id
router.get('/:id')




module.exports = router;
