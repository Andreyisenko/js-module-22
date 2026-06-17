const students = [
  { id: 1, name: 'Олена', course: 'JS', scores: [90, 85, 88], active: true },
  {
    id: 2,
    name: 'Максим',
    course: 'React',
    scores: [70, 75, 80],
    active: false,
  },
  { id: 3, name: 'Ірина', course: 'JS', scores: [95, 92, 97], active: true },
  {
    id: 4,
    name: 'Андрій',
    course: 'Node.js',
    scores: [60, 72, 68],
    active: true,
  },
];

console.log(students);
// 1
const aсtiveStudents = students.filter(elem => elem.active);
console.log(aсtiveStudents);
// 2
const studentNames = students.map(elem => elem.name);
console.log(studentNames);
// 3
const findStudent = students.find(elem => elem.id === 2);
console.log(findStudent);
// 4
const someStudent = students.some(elem => elem.course === 'React');
console.log(someStudent);
// 5
const totEmaunt = students.reduce(
  (acc, elem) => acc + elem.scores.reduce((acc, el) => acc + el, 0),
  0
);
console.log(totEmaunt);
// 6
const result = students.map(elem => {
  const avarage = elem.scores.reduce((acc, el) => acc + el, 0);
  const tot = avarage / elem.scores.length;
  return {
    name: elem.name,
    average: +tot.toFixed(2),
  };
});
console.log(result);
// 7

const averageScore = result.toSorted((a, b) => b.average - a.average);
console.log(averageScore);
// 8
const newArr = students.reduce(
  (acc, elem) => {
    elem.active ? acc.active++ : acc.inactive++;
    return acc;
  },
  { active: 0, inactive: 0 }
);
console.log(newArr);
