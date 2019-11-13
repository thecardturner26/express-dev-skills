const skills = [
    {skill: 'HTML', proficient: true},
    {skill: 'CSS', proficient: false},
    {skill: 'JS', proficient: false}
  ];


module.exports = {
    getAll
}

function getAll(){
    return skills;
}