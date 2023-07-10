for(let i=0;i<10;i++){
    console.log(i);
};

console.log('------------------');

for(let i=10;i>0;i-=2){
    console.log(i);
};

// wap to check is the number is prime or not
a=19
for(let i=2;i<a;i++){
    if(i%a==0){
       var c=1;
        break;
    }
}
if(c==0){
    console.log("prime");
}else{
    console.log("not a prime");
}

console.log("--------------")
 
//wap to check if a number is divible by both 7 and 11 in range of 100 - 500
for(let i=100;i<=500;i++){
    if(i%7==0 && i%11==0){
        console.log(i);
    }
};

console.log('-----------------------')

//wap to check if a number is perfect square or not
// a=36
// for(let i=1;i<(a/2);i++){
//     if(i*i==a){
//         console.log('perfect square');
//     }else{
//         console.log('not a perfect square');
//         break
//     }
// }

console.log('-----------')

let n=25;
let sqrt=n**0.5;
if(sqrt===parseInt(sqrt)){
    console.log('perfect square');
}else{
    console.log('not perfetct square');
}

//while loop

p=10
while(p>0){
    console.log(p);
    p--;
}

//do-while loop

console.log('---------------------')

q=10
do{
    console.log(q);
    q--;
}while(q>0);

console.log('-------------')

//wap to reverse a number

num1=76543
reverse=0
while(num1>0){
    temp=num1%10;
    reverse=reverse*10+temp;
    num1=Math.floor(num1/10);
}
console.log(reverse)
