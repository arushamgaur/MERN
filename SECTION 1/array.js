const myarr = [ 235, 'nice', 73.355, true, console.log, [23, 25] ];

console.log(myarr.length);
console.log(typeof myarr);

const movies = [ 'Avengers', 'Flash', 'Pushpa', 'War', 'Jawaan', 'FastX', 'OMG' ];

// Indexing
console.log(movies[2]);
console.log(movies[100]);
console.log(movies.at(-2));
console.log(movies.indexOf('Flash'));

// Slicing
console.log(movies.slice(2, 6));
console.log(movies.slice(2));
console.log(movies.slice(-4));



// adding new element
movies.push('shershaah');  // adds element at the end of array
movies.unshift('Avatar');  // adds element at the start of array

console.log(movies);

// removing element
movies.pop();  //removes element from the end of array
movies.shift();  //removes element from the start of array

console.log(movies);

movies.splice(3, 2);

console.log(movies);

// Spread operator
console.log( [ ...movies, 'Batman', 'Batman 2', 'Batman 3' ] );
console.log( [ ...movies.slice(0, 4), ...movies.slice(5) ] );