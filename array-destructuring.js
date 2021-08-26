const numbers = [10, 20, 30, 40, 50, 60];
const [, , three] = numbers;
console.log(three);

const names = ['abul', 'babul', ['saddam', 'vaddam', 'kaddam'], 'cabul', 'dabul', 'ebul'];
const [, babul, [, , kaddam]] = names;
console.log(babul, kaddam);