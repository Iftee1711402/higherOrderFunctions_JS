// higher order functions -> functions that operate on/with other functions. they can accept other functions as arguments and return a function

function callThreeTimes(f) {
    f(); f(); f();
}

function cry() {
    console.log("I'm so sad!!!");
}

function rage() {
    console.log("I hate everything");
}

// console.log(callThreeTimes(cry));
// console.log(callThreeTimes(rage));

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

// repeatNTimes(cry, 13);

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);

    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}

pickOne(cry, rage);

// ------------------------------------------------------- //

// returning functions -> functions that return functions

/*
function multiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

const triple = multiplyBy(3); // triple(3) returns 27 
const double = multiplyBy(2); // double(5) returns 10
const halve = multiplyBy(0.5); // halve(8) returns 4
*/

function makeBetweenFunc(x,y) {
    return function(num) {
        return num >= x && num <= y 
    }
}
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(17)); // false

const isNiceWeather = makeBetweenFunc(60, 79);
console.log(isNiceWeather(76)); // true

// ------------------------------------------------------- //

// callback functions -> functions that are passed into another function as an argument, which is then invoked inside the outer function

// e.g:
function callTwice(func) {
    func(); func();
}

function laugh() {
    console.log("hahahahahahah");
}


// callTwice(laugh); // the laugh() function that is passed in as an argument is the callback function

function grumpus() {
    alert("Agh, go away!");
}

setTimeout(grumpus, 3000);


// setTimeout() is a built-in javascript function that takes a function and a time in milliseconds as arguments. the function() is an anonymous function that is passed as an argument (hence it is the callback function)  
setTimeout(function() { 
    alert("welcome");
}, 5000);

// ------------------------------------------------------- //
// ------------------------------------------------------- //

// array callback methods

// .forEach() -> an array method that accepts a callback function


const nums = [20, 21, 22, 23, 25];

nums.forEach( function(num) { // the function(num) {} is the callback function in this case
    console.log(num);
})

console.log("\n");

function printTriple(n) {
    console.log(n * 3);
}

nums.forEach(printTriple);


//e.g. forEach vs for...of loop vs for loop:
const books = [
    {
        title: "good book",
        author: "good author",
        rating: "4.75 / 5"
    },
    {
        title: "bad book",
        author: "bad author",
        rating: "1.75 / 5"
    },
    {
        title: "average book",
        author: "average author",
        rating: "3.5 / 5"
    }
]

// forEach
books.forEach(function(book){
    console.log(book.title.toUpperCase());
})

console.log("\n");

//for...of loop
for (book of books) {
    console.log(book.title.toUpperCase());
} 

console.log("\n");

// for loop
for (let i = 0; i < books.length; i++) {
    console.log(books[i].title.toUpperCase());
}

// ------------------------------------------------------- //

// .map() -> returns a new array 

const texts = ['rofl', 'lol', 'lmao', 'omg', 'ttyl'];

const caps = texts.map( function(text) {
    return text.toUpperCase();
})

// console.log(texts, "\n");
// console.log(caps);

const numbers = [20, 21, 22, 23, 24, 25];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const newNumbers = numbers.map(function(num){
    return num * 2;    
})

// console.log(newNumbers);

const numbersDetail = numbers.map( function(n) {
    return {
        value: n,
        isEven: n%2 === 0
    }
})

// console.log(numbersDetail);

// to print each of the elements in the words array in a new array where each character in the elements are seperated by "."
const newWords = words.map(function(word) {
    return word.toUpperCase().split("").join(".");

})

// console.log(newWords); 

const books = [
    {
        title: "good book",
        author: "good author",
        rating: "4.75 / 5"
    },
    {
        title: "bad book",
        author: "bad author",
        rating: "1.75 / 5"
    },
    {
        title: "average book",
        author: "average author",
        rating: "3.5 / 5"
    }
]

const bookTitles = books.map(function(book) {
    return book.title; // returns an array of book titles while keeping the books array as is
})

console.log(bookTitles);

// ------------------------------------------------------- //

// .filter() -> creates a new array with all the elements that pass the test implemented by the provided function

const nums = [1,2,3,4,5,6,7,8,9];

const odds = nums.filter( num => {
    return num % 2 === 1;
})

const evens = nums.filter( num => {
    return num % 2 === 0;
})

console.log(odds, evens);

// ------------------------------------------------------- //

// .sort() -> sorts an array

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
console.log(prices.sort()); // this would be sorted weirdly
console.log(prices);

console.log("\n");

const ascendingSort = prices.sort((a,b) => a-b);
console.log(ascendingSort); // sorts correctly  

const descendingSort = prices.sort((a,b) => b-a);
console.log(descendingSort); // sorts correctly

// ------------------------------------------------------- //

// .reduce() -> like all the others, is a built-in js method and takes in a callback function. this method executes a reducer function on each element of the array, resulting in a single value 

anArray = [1,2,3,4,5];
const val = anArray.reduce((accumulator, currentValue) => {
    return (accumulator + currentValue); 
});
//console.log(val);

const grades = [88, 87, 90, 92, 95, 78];

const maxGrade = grades.reduce((max, currentValue) => {
    return Math.max(max, currentValue);
});

const minGrade = grades.reduce((max, currentValue) => {
    return Math.min(max, currentValue);
});
// console.log("max grade: ", maxGrade);
// console.log("min grade: ", minGrade);

const sum = [10,20,30,40,50].reduce((sum, currentValue) => {
    return sum + currentValue;
}); 
console.log(sum);

const sum = [10,20,30,40,50].reduce((sum, currentValue) => {
    return sum + currentValue;
}, 1000); 
console.log(sum);


const votes = ['y', 'y', 'y', 'n', 'n', 'y', 'y', 'n', 'n', 'n', 'y', 'y'];

const results = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++;
    } else {
        tally[val] = 1;
    }
    return tally;
}, {});