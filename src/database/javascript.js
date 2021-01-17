export default [
`console.log("Hello World")`,
`const m = "I am a string"`,
`var t = 321`,
`let a = "Who lets the dog out"`,
`console.error("Moon light".toUpperCase())`,
`const n = "Long   text".trim()`,
`randomArray.forEach((el) => {
  console.info(el)
})`,
`var voteable = (age < 18) ? "Too young":"Old enough";`,
`age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}`,
`var d = new Date("2015-03-25");`,
`var x = {firstName:"John", lastName:"Doe"};`,
`document.getElementById("demo").innerHTML = "Hello JavaScript";`,
`var price1 = 5;
var price2 = 6;
var total = price1 + price2;`,
`var x = (100 + 50) * a;`,
`var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};`,
`function storeNames() { return arguments; }`,
`var args = Array.prototype.slice.call(arguments);`,
`function getGrades() {
  var args = Array.prototype.slice.call(arguments, 1, 3);
  return args;
}`,
`var args = []; // Empty array, at first.
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i])
}`,
`function getIntoAnArgument() {
  var args = arguments.slice();
  args.forEach(function(arg) {
    console.log(arg);
  });
}`,
`function getIntoAnArgument(...args) {
  args.forEach(arg => console.log(arg));
}`,
`var greeting = new Boolean(false);
if (greeting) {
  console.log("Hello world");
}`,
`function createQuote(quote, callback){
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}`,
`function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;
}`,
`Person.prototype.log = function() {
  console.log('I am', this._firstName, this._lastName);
}`,
`Object.defineProperty(Person.prototype, 'profession', {
  set: function(val) {
    this._profession = val;
  },
  get: function() {
    console.log(this._firstName, this._lastName, 'is a', this._profession);
  }
})`,
`function walk (){
  var dist = '1780 feet';
  function fly(){
    console.log('At '+dist);
  }
  return fly;
}`,
`function by(propName) {
  return function(a, b) {
    return a[propName] - b[propName];
  }
}`,
`const person1 = {name: 'joe', height: 72};
const person2 = {name: 'rob', height: 70};
const person3 = {name: 'nicholas', height: 66};`,
`const arr_sorted = arr_.sort(by('height'));`,
`const bankAccount = (initialBalance) => {
  const balance = initialBalance;
  return {
    getBalance: function() {
      return balance;
    },
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
  };
};`,
`async function hello() {
  return greeting = await Promise.resolve("Hello");
};`,
`fetch('coffee.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    return response.blob();
  }
})`,
`myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch(e => console.log(e));`,
`let response = await fetch('coffee.jpg');`,
`async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}`,
`const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';`,
`document.getElementById("msg").innerHTML = Math.ceil(53.478);`,
`var myBankBalance = 0;
var output = "";
do {
  output += "My bank balance is now $" + myBankBalance + "<br>";
  myBankBalance ++;
  }
  while (myBankBalance <= 10);`,
`var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;`,
`document.getElementById("demo").innerHTML = "Available Screen Width: " + screen.availWidth;`,
`<script language="JavaScript" src="hello.js"></script>`,
`document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;`,
`function changeText(id) {
  id.innerHTML = "Ooops!";
}`,
`document.write("Hello World!")`,
`const x = (x, y) => { return x * y };`,
`class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}`,
`let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);`,
`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};`,
`function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}`,
`let x = sum(4, 9, 16, 25, 29, 100, 66, 77);`,
`function myFunction(value, index, array) {
  return value > 18;
}`,
`var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);`,
`var x = Number.MIN_SAFE_INTEGER;`,
`var x = Number.MAX_SAFE_INTEGER;`,
`Number.isInteger(10);
Number.isInteger(10.5);`,
`isNaN("Hello");`,
`isFinite(10/0);`,
`var x = 10;
switch(x) {
  case "10": alert("Hello");
}`,
`let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();`,
`var person = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  set lang(lang) {
    this.language = lang;
  }
};`,
`const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));`,
`let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x, initialValue
)`,
`let allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books]
}, ['Alphabet'])`,
`function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}`,
`function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}`,
`if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mappedArray
    }, [])
  }
}`,
`var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}`,
`for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}`,
`for (x of cars) {
  document.write(x + "<br >");
}`,
`var d = new Date();`,
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();`,
`var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});`,
`for (i = points.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = points[i]
  points[i] = points[j]
  points[j] = k
}`,
`points.sort(function(a, b){ return a - b });`,
`function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}`,
`function myArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}`,
`cars.sort(function(a, b){return a.year - b.year});`,
`cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});`,
`function myFunction(value) {
  txt = txt + value + "<br>";
}`,
`var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
function myFunction(value) {
  return value * 2;
}`,
`var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
}`,
`switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
}`,
`var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}`,
`var x = 5 | 1;`,
`var x = ~5;`,
`function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}`,
`var x;
try {
  x = y + 1;
}`
]