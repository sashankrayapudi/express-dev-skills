const skills = [
  {id: 1, skill: 'HTML/CSS/JS', done: true},
  {id: 2, skill: 'Node', done: true},
  {id: 3, skill: 'Express', done: true},
  {id: 4, skill: 'Mongoose', done: true},
  {id: 5, skill: 'Python', done: false},
  {id: 6, skill: 'Django', done: false},
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};


function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}


function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}


function getAll() {
  return skills;
}


function getOne(id) {
  // convert to number
  id = parseInt(id);
  return skills.find(function(skill) {
    return skill.id === id;
  });
}