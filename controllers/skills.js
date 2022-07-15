const Skill = require('../models/skill');

module.exports = {
  index
};



function index(req, res) {
  // Obtain the array of skills from the Skill model
  const skills = Skill.getAll();
  res.render('skills/index', { skills })
};
