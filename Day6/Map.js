const numbers = [1, 2, 3,4, 5];
const doubled = numbers.map((num) => num * 2); 
console.log(doubled);


// convert to uppercase
const fruits = ["apple", "banana", "oramge"];
const uppercaseFruits=fruits.map((fruits) => fruits.toUpperCase());
console.log(uppercaseFruits);


// Add $ to prices
const prices = [10, 20, 30];
const pricetag =  prices.map((price) => "$" + price);
console.log(pricetag);



// Calcutate areas
const rectangle = [
    {width: 10, height: 5 },
    {width: 8 , height: 3},
    {width: 15, height: 10},

];
const areas = rectangle.map((rect) =>rect.width * rect.height);
console.log(areas);


