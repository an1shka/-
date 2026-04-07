let nums = [5, 12, -3, 20, 7, 15];

let tripleNums = nums.map(num => num * 3);
console.log(tripleNums);

let greaterThanTen = nums.filter(num => num > 10);
console.log(greaterThanTen);

let divisibleByFive = nums.find(num => num % 5 === 0);
console.log(divisibleByFive);

let hasNegative = nums.some(num => num < 0);
console.log(hasNegative);

let allEven = nums.every(num => num % 2 === 0);
console.log(allEven);

let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);


let words = ["apple", "banana", "kiwi", "watermelon", "pear"];

let upperWords = words.map(word => word.toUpperCase());
console.log(upperWords);

let longWords = words.filter(word => word.length > 5);
console.log(longWords);

let firstLongWord = words.find(word => word.length > 7);
console.log(firstLongWord);


let users = [
    { name: "Ali", age: 17, isActive: true },
    { name: "Dana", age: 22, isActive: false },
    { name: "Aruzhan", age: 19, isActive: true },
    { name: "Maksat", age: 15, isActive: true }
];

let names = users.map(user => user.name);
console.log(names);

let activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

let adults = users.filter(user => user.age > 18);
console.log(adults);

let inactiveUser = users.find(user => !user.isActive);
console.log(inactiveUser);

let hasYoungUser = users.some(user => user.age < 16);
console.log(hasYoungUser);

let allActive = users.every(user => user.isActive);
console.log(allActive);

let totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge);