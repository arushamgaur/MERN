function addNum(a,b){
    var c = a+b;
    console.log(c);
};

addNum(2, 3);

console.log('---------------');
const getpercentage = function(m1,m2,m3,m4,m5){
    var per = ((m1+m2+m3+m4+m5)/500)*100;
    console.log(per)
};

getpercentage(80,90,99,56,87);


console.log('---------------');
const getfact = (num) => {
    let f = 1;
    for(let i=1; i<=num; i++){
        f*=i;
    };
    // console.log(f);
    return f;
}

const result = getfact(5);

console.log(result);