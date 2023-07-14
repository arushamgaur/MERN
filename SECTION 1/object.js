const user = {
    name : 'Raju',
    email : 'raju@gmail.com',
    password : '12ewe3'
};

console.log(user.email);
console.log(typeof user);

user.address = 'UK';

console.log(user);

user.password = 'lol';

console.log(user);

for(let k of Object.keys(user)){
    console.log(k);
}


for(let k of Object.values(user)){
    console.log(k);
}


for(let k of Object.entries(user)){
    console.log(k);
}


//
const laptop = [
    {brand : 'HP', model : 'Pavilion', price : '69999', color : ['black', 'silver']},
    {brand : 'Lenovo', model : 'ThinkPad', price : '55999', color : ['white']},
    {brand : 'HP', model : 'Elitebook', price : '79999', color : ['black', 'silver', 'blue']},
    {brand : 'Asus', model : 'Ultrabook', price : '85656', color : ['black', 'silver', 'white']},
];


//syntax to get the price of ultrabook
console.log( laptop[3] );

console.log( laptop[3].price);

//syntax to replace silver to gray in ultrabook

laptop[3].color[1]='grey'
console.log( laptop[3].color);

//all the brands name

for( let lap of laptop){
    console.log(lap.brand);
}

//print the laptop data below ₹70000

const r = laptop.filter((l) => {return l.price < 70000});
console.log(r);

console.log('--------------------')
//laptop having black color

const c = laptop.filter((col) => {return col.color.includes('black')});
console.log(c)


console.log('--------------------')

//sum of all the prices of the laptops

let sum = 0;

for(let i = 0; i<laptop.length;i++){
    const lprice = parseInt(laptop[i].price);
    sum = sum + lprice;
}

console.log("Total Cost: "+sum);


console.log('--------------------')

//adding 10% discount to all the laptop

const disprice = laptop.map((laptop) => {
    const p = parseInt(laptop.price);
    const dp = p*0.9;
    laptop.price = dp.toString();
    return laptop;
});

console.log(disprice);

console.log('--------------------')

// laptop between 40k and 70k
const a = laptop.filter((l) => {return l.price > 40000 && l.price < 70000});
console.log(a);