

const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

// get afforadble items
const prices = [50, 15, 200, , 500];
const afforadble = prices.filter((price) => price < 100);
console.log(afforadble);


//get adults only 
const people = [
    {name: "Alice", age:25},
    {name: "Bob", age:30},
    {name:"Daina", age:16},

];
const adults = people.filter((person.age >= 18));
console.log(adults);
