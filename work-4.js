const employees = [
  {
    id: 1,
    name: 'Олександр',
    department: 'IT',
    salary: 3200,
    projects: ['CRM', 'Website'],
    active: true,
  },
  {
    id: 2,
    name: 'Марія',
    department: 'HR',
    salary: 1800,
    projects: ['Recruiting'],
    active: true,
  },
  {
    id: 3,
    name: 'Ігор',
    department: 'IT',
    salary: 4100,
    projects: ['API', 'Mobile', 'CRM'],
    active: false,
  },
  {
    id: 4,
    name: 'Анна',
    department: 'Marketing',
    salary: 2500,
    projects: ['Ads', 'SEO'],
    active: true,
  },
  {
    id: 5,
    name: 'Віктор',
    department: 'IT',
    salary: 2900,
    projects: ['Website'],
    active: true,
  },
];

// console.log(employees);
// 1
const employeesIsActive = employees.filter(elem => elem.active);

// console.log(employeesIsActive);
// 2
const nameEmployees = employees.map(elem => elem.name);
// console.log(nameEmployees);
// 3
const employeesObj = employees.find(elem => elem.id === 4);
// console.log(employeesObj);
// 4
const marketingEmployees = employees.some(
  elem => elem.department === 'Marketing'
);
// console.log(marketingEmployees);
// 5
const allEmployeesIsActive = employees.every(elem => elem.active);
// console.log(allEmployeesIsActive);
// 6
const allSalary = employees.reduce((acc, elem) => (acc += elem.salary), 0);

// console.log(allSalary);

// 7

const newArre = employees.map(elem => {
  const name = elem.name;
  const projectCount = elem.projects.length;
  //   console.log(name);
  //   console.log(projectCount);

  return { name: name, projectCount: projectCount };
});

// console.log(newArre);
// 8
const sortSalary = employees.toSorted((a, b) => b.salary - a.salary);
// console.log(sortSalary);
// 9
const goodSalary = employees.filter(elem => elem.salary > 3000);
// console.log(goodSalary);

// 10
const newObject = employees.reduce((acc, elem) => {
  acc[elem.department] ? acc[elem.department]++ : (acc[elem.department] = 1);
  return acc;
}, {});
// console.log(newObject);
