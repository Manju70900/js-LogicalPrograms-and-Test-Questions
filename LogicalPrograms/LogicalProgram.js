// program to add two numbers                                                     (no:1)

let num1 = Number(prompt("enter"));
let num2 = Number(prompt("enter"));


let result = num1 + num2;


console.log(`the addition ${num1} and ${num2} is ${result}`)





// program to find the squareroot                                                   (no:2)



let num = Number(prompt("enter no"));

let sqrt = Math.sqrt(num);

console.log(`the sqrt of ${num}  is ${sqrt}`)



// program to swap two variables                                                          (no:3)


let a = Number(prompt("enter a value"));
let b = Number(Number(prompt("enter b value")));
console.log(`before swaping a=${a} and  b=${b}`)
let temp;

temp = a;
a = b;
b = temp;

console.log(`let see the swaped variables a=${a} and b=${b}`)


// program to find area of triangle                                                       (no:4)

const baseValue = prompt("Enter the base of a triangle: ");
const heightValue = prompt("Enter the height of a triangle: ");

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is ${areaValue}`);



// program to check given number is Positive or Negative                                    (no:5)


let num = parseInt(prompt("enter no"));

if (num > 0) {
  document.write(`the entered number=${num} is a positve number`)
}
else if (num < 0) {
  document.write(`the entered number=${num} is negative number`);
}
else {
  document.write("the number ids zero")
}



// program to find given number is even or odd                                             (no:6)

let num = Number(prompt("enter no"));

if (num % 2 === 0) {
  console.log("the given number is even ")
}
else {
  console.log("the given number is odd")
}

// program to find given number is even or odd                                             (no:7)

const kilometers = prompt("Enter value in kilometers: ");


const factor = 0.621371;


const miles = kilometers * factor;

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);



// program to find largest of three number                                                   (no:8)

let num1 = Number(prompt("enter"));
let num2 = Number(prompt("enter"));
let num3 = Number(prompt("enter"));

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is greater`)
}
else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is greater`)
}
else {
  console.log(`${num3} is greater`)
}


// / program to convert celsius to fahrenheit                                              (no:9)

const celsius = prompt("Enter a celsius value: ");

const fahrenheit = (celsius * 1.8) + 32


console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);



// program to check given number is prime number or not                                      (no:10)

let num = parseInt(prompt("enter"));

let count = 0;

for (let i = 2; i < num; i++){
  if (num % i === 0) {
    count++
  }
}

if (count === 0) {
  console.log(`the entered number ${num} is prime number`)
} else {
   console.log(`the entered number ${num}" is not a prime number`);
}



// program to find the factors of the given number                                           (no:11)

let num = parseInt(prompt("enter no"))

for (let i = 1; i <= num; i++){
  if (num % i === 0) {
    console.log(i)
  }



// program to find the factorial of the given number                                           (no:12)

let num = parseInt(prompt("enter no"));

let fact = 1;
for (let i = 1; i <= num; i++){

  fact = fact * i
  



}

console.log(fact)



// program febonacci sequence                                                                   (no:13)

let number = parseInt(prompt("enter no"));

let n1 = 0, n2 = 1, nextterm;

for (let i = 1; i <= number; i++){
    console.log(n1)
   
    nextterm = n1 + n2;
    n1 = n2;
    n2 = nextterm;
}


// program to find sum of natural numbers with recursion                                         (no:14)


function sum(num) {
    
    if (num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num
    }



}

let number = parseInt(prompt("enter"));

let result = sum(number);

console.log(result)


// program to create js object using object literal                                              (no:15)

const person = {
    name: "jhon",
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function () {
        console.log('Hello everyone.')
    },
    score: {
        maths: 90,
        science: 80
    }
};


delete person.greet;
delete person['score'];



console.log(person);
console.log(typeof person);
console.log(person.hobbies[0]);


// js to program to merge objects                                                                   (no:16)

object 1

const person = {
    name: 'jack',
    age: 26,
}

object 2

const student = {
    gender: 'male',
    desi:"Developer"
}

let obj3 = { ...person, ...student };

console.log(obj3)

merge two objects

const mergeobj = Object.assign(person, student);

console.log(mergeobj);



// js program to loop through an object using for in loop                                  (no:17)

const student = {
    name: 'jhon',
    age: 20,
    hobbies: ['reading', 'games', 'coding']
}

// using for in

for (let key in student) {
    let value;

    value = student[key];
    

    console.log(key + "_" +  value)
}

// program to append an object to an array                                                     (no:18)

function insertobject(arr, obj) {

    arr.push(obj);
    console.log(arr);
    


    
}

let array = [1, 2, 3]

let object = { name: "manju", id: 1234 };


let pass=insertobject(array, object)



// js program to empty an array                                                                        (no:19)

function emptythearray(arr) {
    arr = [];

    return arr;

}



let array = [1, 2, 3, 4, 5]
console.log(array)

let result = emptythearray(array);

console.log(result);



// js program to remove duplicates from an array                                                       (no:20)


function removeduplicates(arr) {

    let uniqarray = [...new Set(arr)];

    console.log(uniqarray);

}


let array = [1, 2, 3, 1, 2, 6, 7, 8, 9, 1, 2, 3, 5, 9, 8, 7];

console.log(array);


removeduplicates(array);














