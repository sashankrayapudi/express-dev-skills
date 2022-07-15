const Skill = require('../models/skill');

module.exports = {
  index,
  show
};


function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id)
  });
}

function index(req, res) {
  // Obtain the array of skills from the Skill model
  const skills = Skill.getAll();
  res.render('skills/index', { skills })
};
