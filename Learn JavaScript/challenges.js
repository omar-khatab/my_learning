let theTitle = "Elzero", theDescription = "Elzero Web School", theDate = "25/10";
let card =
  `<div class="card"><h3>Hello ${theTitle}</h3>  
      <p>${theDescription}</p>
      <span>${theDate}</span>
    </div>`;
document.write(card.repeat(4));

/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100
console.log(++a + -b + +c++ - -a++ + +a); // 13 + -21 + 81 - -13 + 14 = 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81 + 21 + 13 * 21 - 22* 13 + 12 - 1 = 100

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(+e%f *-d /+g); // 2000
console.log(+ ++g * ++e + ++f + -d); // 173

/*
  Number Challenge
*/

let aa = 100;
let bb = 2_00.5;
let cc = 1e2;
let dd = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(aa,bb,cc,dd)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(aa,Math.floor(dd))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(dd));
console.log(Math.floor(dd));
console.log(Math.trunc(dd));
console.log(parseInt(dd));

// Use Variables b + d To Get This Values
console.log((Math.floor(bb)/Math.ceil(dd)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.floor(bb) / Math.ceil(dd))); // 67 => Number

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let ss = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(ss.charAt(2).toUpperCase() + ss.slice(3,6)); // Zero

// 8 H
console.log(ss.substr(13,1).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(ss.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${ss.substr(0,6)} ${ss.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(`${ss[0].toLowerCase()}${ss.slice(1, -1).toUpperCase()}${ss[ss.length - 1].toLowerCase()}`); // eLZERO WEB SCHOOl

/*
  If Condition Challenge
*/

let ff = 10;

if (ff < 10) {
  console.log(10);
} else if (ff >= 10 && ff <= 40) {
  console.log("10 To 40");
} else if (ff > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
ff < 10
  ? console.log(10)
  : ff >= 10 && ff <= 40
    ? console.log("10 to 40")
    : ff > 40
      ? console.log(">40")
      : console.log("Unknown");  

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if ( (st.length + st.length).toString() === "34") {
  console.log("Good");
}
// W Position May Change
if (st.toLowerCase().charAt(st.indexOf("W")) === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
}

/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
}
else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
}
else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
}
else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
}
else {
  money = 0;
  console.log(`My Money is ${money}`);
}

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.reverse().splice(zero, --counter);

let me = my;

me.unshift("Elzero");

let first=me.shift()

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.length- ++counter,counter)); // ["Elham", "Mazero"]

console.log(first); // "Elzero"

console.log(first.charAt(my.length) + first.substr(counter - my.length).toUpperCase()); // "rO"

/*
  Loop Challenge
*/
document.write(`<hr></hr>`); // to separate with which above

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let k = 1;
myAdmins.splice(myAdmins.indexOf("Stop"), myAdmins.length - 1);
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`);
for (let i = 0; i < myAdmins.length; i++) {
  k = 1;
  document.write(`<div>`)
  document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`)
  document.write(`<h3>The Team Member:</h3>`)
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] !== myEmployees[j][0]) continue;
    document.write(`<p>- ${k++} ${myEmployees[j]}</p>`)
  }
  document.write(`</div><hr>`)
}

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// function showDetails(a, b, c) {

//   typeof a === "string" && typeof b === "number" && typeof c === "boolean" 
//     ? console.log(`Hello ${a}, Your Age Is ${b}, ${c ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
//     : typeof a === "number" && typeof b === "string" && typeof c === "boolean" 
//     ? console.log(`Hello ${b}, Your Age Is ${a}, ${c ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
//     : typeof a === "boolean" && typeof b === "number" && typeof c === "string" 
//     ? console.log(`Hello ${c}, Your Age Is ${b}, ${a ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
//     : typeof a === "boolean" && typeof b === "string" && typeof c === "number" 
//     ? console.log(`Hello ${b}, Your Age Is ${c}, ${a ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
//     : typeof a === "string" && typeof b === "boolean" && typeof c === "number" 
//     ? console.log(`Hello ${a}, Your Age Is ${c}, ${b ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
//     : console.log(`Hello ${c}, Your Age Is ${a}, ${b ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
// }

// another method
function showDetails(a,b,c) {
  let arr= [a,b,c];
  let name , age, available;
  for(let i=0; i<arr.length ;i++) {
    typeof arr[i] === "string"
    ? name = arr[i]
    : typeof arr[i]==="number"
    ? age=arr[i]
    : available = arr[i];
  }
  console.log(`Hello ${name}, Your Age Is ${age}, ${available ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...arr) {
//   // Parameter ?
//   return `String [${arr.join("], [")}] => Done !`;
// };

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

let names = (...arr) => `String [${arr.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + +nums;

// console.log(calc(10, 20, 50)); // 80

let calc = function (one, two, ...nums) {
  return one + two + +nums;
}

console.log(calc(10, 20, 50)); // 80

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(',').filter(function (a) {
//   return isNaN(a);
// }).map(function (a) {
//   return a.charAt(a.length-a.length)
// }).slice(a.length - a.length, -true).join("").split("_").reduce(function (a,c) {
//   return `${a} ${c}`
// });
//Another Solution
let solution = myString.split(",").map(function (a) {
  return a[a.length - a.length]
}).filter(function (a) {
  return !Number.isInteger(+a);
}).slice(a.length - a.length, -true).reduce(function (a, c) {
  return `${a}${c}`
}).split('_').join(" ");
console.log(solution); // Elzero Web School     

// DOM Challenge
let page = document.createElement("div")
let header = document.createElement("header")
let mainLogo = document.createElement("a")
let listNav = document.createElement("ul")
let mainSec= document.createElement("div")
let footer =document.createElement("footer")
for(i=0;i<4;i++) {
  let listChild = document.createElement("li")
  let linkChild = document.createElement("a")
  linkChild.href="#";
  linkChild.style.cssText="text-decoration:none; color:gray"
  listChild.append(linkChild)
  listNav.append(listChild);
}
for(i=1;i<=15;i++) {
  let cardCount = document.createElement("div")
  let contentText = document.createElement("span")
  cardCount.className ="product";
  contentText.textContent = i;
  cardCount.append(contentText)
  cardCount.append("Product")
  mainSec.append(cardCount)
  contentText.style.cssText="color:black; font-weight:bold; display: block; font-size:24px"
  cardCount.style.cssText = "background-color:white; padding:20px; color:gray; font-size:10px"
}
page.className="main-page";
header.className = "Website-head";
mainLogo.href ="#"
mainLogo.className="logo"
listNav.className="menu"
mainSec.className="section";
footer.className="footer"
mainLogo.append("Elzero")
listNav.children[0].firstElementChild.append("Home")
listNav.children[1].firstElementChild.append("About")
listNav.children[2].firstElementChild.append("Service")
listNav.children[3].firstElementChild.append("Contact")
header.append(mainLogo)
header.append(listNav)
footer.append("Copyright 2021")
page.appendChild(header)
page.append(mainSec)
page.append(footer)
document.body.appendChild(page)
page.style.cssText= "height:fit-content; border:1px solid #ccc; padding:5px";
header.style.cssText = "display:flex; justify-content: space-between; align-items:center"
mainLogo.style.cssText = "color:#4caf50; font-size: 20px; padding-left:10px; text-decoration:none; font-weight:bold;"
listNav.style.cssText = "list-style:none;padding:0 10px 0; display:flex; gap:10px; font-size: 12px;"
mainSec.style.cssText ="background-color:#eee; display:grid; grid-template-columns: auto auto auto; gap:10px; text-align:center; padding:10px"
footer.style.cssText = "background-color:#4caf50; padding:20px 0; text-align:center; color:white";

// BOM Challenge
// basic elements to make todo list
let btnTask = document.querySelector(".add")
let inputTask = document.querySelector(".input")
let taskParent = document.querySelector(".tasks")
// array to store local storage
let arr =[];
// addElements and deal with remove elements
function addElements () {
  let taskChild = document.createElement("div")
  let taskBtn= document.createElement("button")
  // add the style to div and button
  taskChild.className = "new-div";
  taskBtn.className = "new-btn";
  // add text to element and element to parent
  taskBtn.append("Delete");
  taskChild.append(taskBtn)
  taskParent.append(taskChild)
  // to remove div and his identifier in local storage
  taskBtn.addEventListener("click",(e)=> {
    // remove the target div
    e.target.parentElement.remove()
    // to check on all the element of array to remove the target element
    for(i=0;i<arr.length;i++) {
      // to compare with id of deleted div and id of array elements
      if(arr[i].id == e.target.parentElement.id)
      // to remove element of array that achieve the condition
      arr.splice(arr.indexOf(arr[i]),1);
    }
    // store a new array in localStorage
    localStorage.setItem("tasks",JSON.stringify(arr))
  })
}
// event click to add elements
btnTask.onclick= ()=> {
  // recreate local storage with his values
  localStorage.setItem("tasks",JSON.stringify(arr))
  // call function
  addElements();
  // make object (identifier of every div inside local storage)
  let tasks = {
    id: Math.trunc(10**5 * Math.random()),
    title:inputTask.value,
  };
  // add text inside the div
  taskParent.lastChild.prepend(`${inputTask.value}`)
  // add id of tasks to div
  taskParent.lastChild.id = tasks.id
  // remove element in case of value is empty
  if (inputTask.value === "") {
    taskParent.lastChild.remove()
  } 
  // value empty exclude him from local storage
  if (inputTask.value !== "") {
    arr.push(tasks) 
    localStorage.setItem("tasks",JSON.stringify(arr))
  }
  // empty the input as soon as add the div
  inputTask.value="";
}
// recreate elements after refresh or close the window
for(i=0;i<JSON.parse(localStorage.getItem("tasks")).length;i++) {
  // restore elements inside array
  arr.push(JSON.parse(localStorage.getItem("tasks"))[i])
  // call function
  addElements();
  // add text content inside div again
  taskParent.children[i].prepend(JSON.parse(localStorage.getItem("tasks"))[i].title)
  // add id to div again after recreate
  taskParent.children[i].id = JSON.parse(localStorage.getItem("tasks"))[i].id
}

// Destructuring Challenge
let chosen = 1;

let myFriends3 = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const {title:T, age:AA , available:av, skills:[, h]} = myFriends3[chosen-1]

console.log(T)
console.log(AA)
console.log(`${av ? "Available": "Not Available"}`)
console.log(h)

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"

// Map and Set Challenge
/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2)*[...n1, ...n2].length); // 210

// Regular Expression Challenge
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www.)?\w+.+/ig; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

