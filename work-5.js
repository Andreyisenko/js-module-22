// import data from './exempl.json' with { type: 'json' };

fetch('./exempl.json')
  .then(resp => resp.json())
  .then(data => {
    // console.log(data);
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
const ones = {
  userName: 'Coco',
  age: 51,
  isActive: false,
};
// console.log  (obj);
const one = JSON.stringify(obj);
// console.log(one);
localStorage.setItem('new', one);
// console.log(JSON.stringify(32));
// console.log(one);
const parsed = JSON.parse(one);
const onesStr = JSON.stringify(ones);
// console.log(parsed);
try {
  const newObj = JSON.parse(onesStr);
  //   console.log(newObj);
} catch (err) {
  console.log(err.stack);
}
// console.log('after error:', ones);
// console.log(1781027752615);
// const data = new Date(1781027752615);
// console.log(data);
// console.log(data.getDay());
// console.log(data.getDate());
// console.log(data.getMinutes());
const timestamp = 1781027752615;

const date = new Date(timestamp);

console.log(date.toLocaleDateString());
// Наприклад: 09.06.2026
