//1. WAP to print all perfect squares in range of 50 - 350
console.log('----Question 1----')
for(let i=50;i<=350;i++){
    if((i**0.5)===parseInt(i**0.5)){
        console.log(i+" is perfect square  ");
    }
}
console.log('------------------')

//2. WAP to convert Celsius to Fahrenheit and vice versa
console.log('----Question 2----')
c = 80;
f = 100;
console.log(c+" Celcius ="+(c*(9/5)+32)+" Fahrenheit");
console.log(f+" Fahrenheit ="+((f-32)*5/9)+" Celsius");
console.log('------------------')

//3. WAP to check if number is palindrome
console.log("----Question 3----")
num = 1234321;
rev = 0;
m = num;
while(m>0){
    temp=m%10;
    rev=rev*10+temp;
    m=Math.floor(m/10);
}
if(rev == num){
    console.log(num+" is Palindrome Number")
}else{
    console.log(num+" is not a Palindrome Number")
}
console.log('------------------')

//4. WAP to print sum of all digits of a number
console.log("----Question 4----")
num = 98756;
sum = 0;
m = num;
while(num>0){
    temp=num%10;
    sum=sum+temp;
    num=Math.floor(num/10);
}
console.log("The sum of digits of "+m+" ="+sum);
console.log('------------------')

//5. WAP to print Fibonacci series
console.log('----Question 5----')
a = 0;
b = 1;
console.log(a);
console.log(b);
for(let i=2;i<10;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
    c=a;
}
console.log('------------------')