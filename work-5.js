// import data from './exempl.json' with { type: 'json' };

fetch('./exempl.json')
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    // console.log(data.name);
    // console.log(data.name || data.age);
    // console.log(data.name && data.age);
  })

  .catch(err => console.log(err));
// console.log(resp);

// console.log(data);
// import data from './exempl.json';
const rgb = [200, 100, 255];

const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"
// console.log(rgb[1]);
const obj = {
  userName: 'Vasil',
  age: 55,
  isActive: true,
};
console.log(obj);
const one = JSON.stringify(obj);
console.log(one);
localStorage.setItem('new', one);
