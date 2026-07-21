const startData = Date.now();
let tot = 0;
const arr = [];
while (tot !== 55) {
  arr.push(tot);
  tot += 1;
}

const endData = Date.now();
const timeFuncOll = endData - startData;
// console.log(`час виконання функції ${timeFuncOll} ms`);
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(console.log('Success! Value passed to resolve function'));
//     } else {
//       reject(console.log('Error! Error passed to reject function'));
//     }
//   }, 2000);
// });
// console.log(promise); // Об'єкт промісу
const sum = false || 1;
const prom = new Promise((resolve, reject) => {
  if (sum === 1) {
    resolve(2);
  } else {
    reject(new Error('помилка'));
  }
});
prom
  .then(resp => console.log(resp))
  .catch(error => console.log(error.message))
  .finally(() => console.log('finish'));
