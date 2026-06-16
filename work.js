const orders = [
  { id: 1, customer: "Анна", total: 1200, delivered: true },
  { id: 2, customer: "Олег", total: 850, delivered: false },
  { id: 3, customer: "Марія", total: 2300, delivered: true },
  { id: 4, customer: "Іван", total: 430, delivered: false },
  { id: 5, customer: "Світлана", total: 1750, delivered: true },
];
console.log(orders);
//1
const deliverDone = orders.filter((elem) => elem.delivered);
console.log(deliverDone);
//2
const nameCustomer = orders.map((elem) => elem.customer);
console.log(nameCustomer);
// 3
const totalSum = orders.reduce((acc, elem) => acc + elem.total, 0);
console.log(totalSum);
// 4
const findeID = orders.find((elem) => elem.id === 3);
console.log(findeID);

// 5
const newArr = orders.map((elem) => ({
  ...elem,
  total: elem.total + elem.total * 0.1,
}));

console.log(newArr);

// 6

console.log(orders.toSorted((a, b) => b.total - a.total));
// 7
const notDelivered = orders.filter((elem) => !elem.delivered);

console.log(notDelivered.length);
// 8
const deliverTrue = orders.some((elem) => elem.total > 2000);
console.log(deliverTrue);
// 9
const averageAmount = orders.reduce((acc, elem) => acc + elem.total, 0);
console.log(averageAmount);
console.log(averageAmount / orders.length);
// 10
const newObj = orders.reduce(
  (acc, elem) => {
    elem.delivered ? (acc.delivered += 1) : (acc.notDelivered += 1);
    return acc;
  },

  {
    delivered: 0,
    notDelivered: 0,
  },
);
console.log(newObj);
