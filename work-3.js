const users = [
  {
    id: 1,
    name: 'Анна',
    active: true,
    orders: [
      { product: 'Ноутбук', price: 32000 },
      { product: 'Мишка', price: 900 },
    ],
  },
  {
    id: 2,
    name: 'Іван',
    active: false,
    orders: [{ product: 'Клавіатура', price: 2500 }],
  },
  {
    id: 3,
    name: 'Марія',
    active: true,
    orders: [
      { product: 'Монітор', price: 12000 },
      { product: 'Навушники', price: 3500 },
      { product: 'Мікрофон', price: 4800 },
    ],
  },
];
// console.log(users);
//1
const usersIsActive = users.filter(elem => elem.active);
// console.log(usersIsActive);
// 2
const usersName = users.map(elem => elem.name);
// console.log(usersName);
// 3
const allOrderamount = users.reduce(
  (acc, elem) => (acc += elem.orders.reduce((acc, el) => acc + el.price, 0)),
  0
);
// console.log(allOrderamount);
//4
const allProductName = users.flatMap(elem => elem.orders.map(el => el.product));
// console.log(allProductName);
// 5
const newArr = users.map(elem => {
  return {
    name: elem.name,
    totalSpent: elem.orders.reduce((acc, el) => acc + el.price, 0),
  };
});
// console.log(newArr);
// 6
const userBiggestExpenses = users.reduce((acc, elem) => {
  const accSum = acc.orders.reduce((acc, el) => acc + el.price, 0);
  // console.log(accSum);
  // console.log(elem.orders);

  const elemSum = elem.orders.reduce((acc, el) => acc + el.price, 0);
  // console.log(elemSum);
  const result = accSum > elemSum ? acc : elem;
  return result;
});
// console.log(userBiggestExpenses);
