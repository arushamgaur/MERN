const nums = [2, 4, 62, 6, 2, 8];

// WAP to print square of all numbers in array

for(let i=0; i<nums.length; i++){
    console.log( nums[i] ** 2 );
}

console.log('---------------');

const newNums = [];


for(let n of nums){
    // console.log(n**2);
    console.log(newNums);
    newNums.push(n**2);
}

console.log(newNums);


console.log('----Using Map Function----');

//using map function
const result = nums.map( (n) => {return n**2} );
console.log(result);

console.log('---------------');
//using map function to add 5% GST to all prices
const price=[1329,38267,4002,402,5793,352];
const result1 = price.map((n)=>{return ((n*0.05)+n)});
console.log(result1);


console.log('---------------');
const price2=['$2423.23','$583.39','$63.99','$23.99','$12.99','$900.99'];

const result2 = price2.map( (n)=>{return (parseInt(n.slice(1)))});
console.log(result2);


console.log('---------------');
//using filter function
const fprice = price.filter((n)=> { return n>=500 && n<=5000});
console.log(fprice);