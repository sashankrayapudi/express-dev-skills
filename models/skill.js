const skills = [
  {id: 1, skill: 'HTML/CSS/JS', done: true},
  {id: 2, skill: 'Node', done: true},
  {id: 3, skill: 'Express', done: true},
  {id: 4, skill: 'Mongoose', done: true},
  {id: 5, skill: 'Python', done: false},
  {id: 6, skill: 'Django', done: false},
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}
