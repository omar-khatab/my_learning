// Assignment 1
document.write("<h1>Elzero</h1>");
// document.querySelector("h1").style.color = "blue"
// document.querySelector("h1").style.fontSize = "80px"
// document.querySelector("h1").style.fontWeight = "bold"
// document.querySelector("h1").style.textAlign = "center"
// document.querySelector("h1").style.fontFamily = "arial"
//Another method to make our styles in js
document.getElementsByTagName("h1")[0].style.color = "blue";
document.getElementsByTagName("h1")[0].style.fontSize = "80px";
document.getElementsByTagName("h1")[0].style.fontWeight = "bold";
document.getElementsByTagName("h1")[0].style.textAlign = "center";
document.getElementsByTagName("h1")[0].style.fontFamily = "arial";
console.log("%cElzero %cWeb %cSchool", "color: red; Font-Size:40px", "color:green; Font-Weight:bold; Font-Size:40px",
"background-color: blue; Font-Size: 40px" ); 
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd(); 
console.group("Group 2");
console.log("Message One");
console.log("Message Two"); 
console.groupEnd(); 
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);
/* console.log("Iam In Console");
document.write("Iam In Page"); */
//Assignment 2
let numberOne = 10, numberTwo = 20;
console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + "" + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberOne + "\n" + numberTwo);
console.log(`${numberOne}
${numberTwo}`);
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
document.write("`I'm In <br> \\\\ <br> Love \\\\ \"\"\" \'\'\' <br> ++ with ++ <br> \\\"\"\"\\\"\"\"  <br> \"\"Javascript\"\"``");
let a = 21;
let b = 20;
let c = "_"+b + ""+ a;
console.log("_" + a + c.repeat(3) + "_" + b + "_");

// Assignment 3
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

let num = 3;
// Solution One
console.log(num * num - num); // 6

// Solution Two
console.log(num +  true + true + true); // 6

// Solution Three
console.log(num++ + num -  +true); // 6

// Solution Four
console.log(--num ** num / num - num); // 6

// Solution Five
console.log(--num - -true + ++num); // 6

// Solution Six
console.log(num += num); // 6

let num1 = "10";
// Solution One
console.log(+num1 + +num1); // 20

// Solution Two
console.log(num1 ** (true+true) /  +num1 + +num1); // 20

// Solution Three
console.log(+num1 * (++num1 + true) - (--num1 * num1)); // 20

// Solution Four
console.log((--num1 + --num1 + num1-- ) - (num1 + num1++ - ++num1)); // 20

let points = 10;

// Write Your Code Here
points = ++points + true + true;
console.log(points); // 13

// Write Your Code Here
points = ++points / (true+true) + true; 
console.log(points); // 8;

//Assignment 4
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000); // 100000
console.log(1_00_000); // 100000
console.log(10**5); // 100000
console.log(+"100000"); // 100000
console.log(10e4); // 100000
console.log(1000*100); // 100000
console.log(10_000_000/100); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(50_000 + 50_000); // 100000
console.log(10e5 - 9e5); // 100000

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log((+true + +true) ** ((+true + true + true + true) % Number.MAX_SAFE_INTEGER)); // 16

let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

let num2 = 10;
console.log(Number.isInteger(num2) + Number.isInteger(num2)); // 2

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10

console.log(Math.round((4 * Math.random()))); // 0 || 1 || 2 || 3 || 4

// Assignment 5
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.slice(-6, -5).toLowerCase()); // e
console.log(userName.toLowerCase().split("",1)); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substring(userName.length - 6, userName.length - 5).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // eee
console.log(userName.substr(-6, 1).toLowerCase().repeat(3)); // e

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True

// Assignment 6
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(!(-50 === +"-40")); // true
console.log(!((10 === -"-40"))); // true
console.log(+"10" == 10); // true
console.log(!(20 == false)); // true

let num3 = 10;
let num4 = 20;

console.log(num3!=num4); // true
console.log(num3<num4); // true
console.log(num3 !== num4); // true
console.log(!(num3 == num4)); // true
console.log(num3 <= num4); // true
console.log(num3 * +(true + true) === num4); // true
console.log(num3 > num4 / (-true)) // true

let mm = 20;
let ff = 30;
let ww = 10;

console.log(mm < ff && mm > ww || mm == ff); // true
console.log(mm < ff && mm > ww); // true
console.log(!(mm > ff) && !(mm > ff) && !(mm < ww) && !(mm < ww)); // true

// Assignment 7
// Test Case 
let num5 = 9; // "009"
if (num5 < 10) {
  console.log(`${0}${0}${num5}`);
} else if (num5 > 10 && num5 < 100) {
  console.log(`${0}${num5}`);
} else {
  console.log(`${num5}`)
}

let num6 = 9;
let str = "9";
let str2 = "20";

if (num6 == str) {
  console.log("{num1} Is The Same Value As {str}")
}
if (!(typeof num6 == typeof str)) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
if (num6 != str2 && !(typeof num6 == typeof str2)) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}
if (str != str2 && typeof str == typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

let num7 = 10;
let num8 = 30;
let num9 = "30";
if (num9>num7 && typeof num9 != typeof num7 && num8 == num9 && typeof num8 != typeof num9 && num7 != num9 ) {
  console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number
  30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number
  {num9} Value And Type Is Not The Same As {num7} And Type Is Not The Same As {num8}`);
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num9} Value And Type Is Not The Same As {num7} And Type Is Not The Same As {num8}"

  // Edit What You Want Here

let num10 = 11;
let num11 = 10;
let num12 = 11;
let num13 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num10 > num11) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num10 > num11 && num10 < num13) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num10 > num11 && num10 === num12) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num10 + num11) < num13) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num10 + num12) < num13) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num10 + num11 + num12) < num13) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num13 - (num10 + num12) + num11 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//Assignment 8
let day = "   monday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
console.log(day.charAt(3).toUpperCase().trim() + day.substr(4));
let day1 = "Monday";
console.log(day1)
switch (day1) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default: 
    console.log("Its Not A Valid Day");
    break;
}
//Assignment 9
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num14 = 3;

myFriends.pop();
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.length - myFriends.length, num14)); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = [arrTwo.pop() ,arrOne.pop() ,arrOne.pop() ,arrOne.pop() ,arrTwo.pop() ,arrTwo.pop()];

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle) !== -true) {
  console.log("Found");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs= arr2[arr1.length - arr1.length/arr1.length].toLowerCase().concat(arr1.pop().toLowerCase(),arr2.pop().toLowerCase())
// we can make concat here by add plus between every two element as another solution
console.log(allArrs); // fxy

//Assignment 10

let start = 10;
let end = 100;
let exclude = 40;

// Output
for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}

let start1 = 10;
let end1 = 0;
let stop = 3;

// Output
for (let i = start1; i >= stop ; i--) {
  if (i < start1) {
    console.log(`${(end1)}${i}`);
  }
  else
    console.log(`${i}`);
}

let start2 = 1;
let end2 = 6;
let breaker = 2;

// Output
for (let i = start2; i <= end2;i++) {
  console.log(i);
  for (let j = breaker; j <= end2-breaker; j += breaker) {
    console.log(`-- ${j}`);
  }
}

let index = 10;
let jump = 2;
let end3 = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if (index < end3) break;
  end3 += jump; 
}

let friends1 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j=letter.length;
// Output
for (let i = j-j; i < friends1.length; i++) {
  
  if (friends1[i][letter.length-letter.length] === letter.toUpperCase() ) continue;
  console.log(`${j++} => ${friends1[i]}`)
}

let start3 = 0;
let swappedName = "elZerO";
let swappedArray = []
// Output
for (let i = start3; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    swappedArray[i] = swappedName[i].toUpperCase()
  }
  else if (swappedName[i] === swappedName[i].toUpperCase()) {
    swappedArray[i] = swappedName[i].toLowerCase()
  }
}
console.log(swappedArray.join(""))


let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
for (let i = start4; i < mix.length; i++) {
  if ( i === start4 || typeof mix[i] === "string") continue;
  console.log(mix[i]);
}

let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;

// Output
while (index1 < friends2.length) {
  index1++;
  if (friends2[index1-index1/index1][friends2.length - friends2.length] === "A" || typeof friends2[index1-index1/index1] === "number") {
    continue;
  }
  counter++;
  console.log(`${counter} => ${friends2[index1-index1/index1]}`);
}

//Assignment 11

function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === 'Female') {
    console.log(`Hello Miss ${theName}`);
  } else if (theGender === undefined) {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"


function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === undefined || operation==="add") {
    console.log (firstNum + secondNum);
  } else if (operation==="subtract") {
    console.log (firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log (firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function ageInTime(theAge) {
  if ( theAge <= 10 || theAge >= 100) {
    console.log(`Age Out Of Range`);
  } else {
    console.log(`Age = ${theAge * 12} Months`)
    console.log(`Age = ${theAge * (365/7)} Weeks`)
    console.log(`Age = ${theAge * 365} days`)
    console.log(`Age = ${theAge * 365 *24} Hours`)
    console.log(`Age = ${theAge * 365 * 24 * 60} Minutes`)
    console.log(`Age = ${theAge * 365*24*60*60} Seconds`)
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
document.write(`<br>`) // to make below function in a new line
function createSelectBox(startYear, endYear) {
  document.write(`<select>`)
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`)
  }
  document.write(`</select>`)
}
createSelectBox(2000, 2021);
let test = 20.5;
function multiply(...mul) {
  let result = 1;
  for (let i = 0; i < mul.length; i++) {
    if (typeof mul[i] === "string") continue;
    result *= Math.trunc(mul[i]);
  }
  console.log(result);
} 
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

// Assignment 12

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return `${zName.slice(0, zName.indexOf(" "))} ${zName.charAt(zName.indexOf(" ") + 1).toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  namePattern()
  function ageWithMessage() {
    return `Your Age Is ${parseInt(zAge)}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  ageWithMessage()
  function countryTwoLetters() {
    return `You Live In ${zCountry.substr(0,2).toUpperCase()}`
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  countryTwoLetters()
  function fullDetails() {
    return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

let checker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    }
  }
}
// another solution to arrow currying function in one line only
// let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

function specialMix(...data) {
  let result = 0;
  for (i = 0; i < data.length; i++) {
    if (Number.isInteger(parseInt(data[i]))) {
      result += parseInt(data[i]);
    } 
  }
  if (result === 0) {
    return `All is Strings`
  }
    return result;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

//Assignment 13

let mix1 = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let letters = mix1.map(function (a) {
  return typeof a === "string" ? a : "";
}).reduce(function (a, c) {
  return `${a}${c}`;
});
console.log(letters); // Elzero

let myString = "EElllzzzzzzzeroo";
let repetition = myString.split("").filter(function (a, i, arr) {
  return arr.indexOf(a) == i;
}).join("");

// Elzero
console.log(repetition);

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flat = myArray.reduce(function (a, c) {
  return `${a}${c}`;
}).split(",").join("");
console.log(flat);
// Elzero

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let negative = numsAndStrings.filter((a) => Number.isInteger(a)).map((a)=> -a)
console.log(negative);
// [-1, -10, 10, 20, -5, -3]

let nums = [2, 12, 11, 5, 10, 1, 99];
let result = nums.reduce(function (a, c) {
  return c % 2 !== 0 ? a + c : a * c;
}, 1)
console.log(result);
// 500

//Assignment 14

// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`
  }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// Method One
// Create Your Object Here
let objMethodOne = {
    property: "Method One",
  }
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
    property: "Method Two",
  })
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({
  property:"Method Three",
})
// objMethodThree.property = "Method Three"  // another method to make property to object.create
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({}, { property: "Method Four" })
// objMethodFour.property = "Method Four"; // another method to make property to object.assign
console.log(objMethodFour.property); // "Method Four"

let A = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign(threeNums,twoNums,{A})

console.log(finalObject);

/*
  A: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`);
  console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.keys(myFavGames)[i] !== "Trinity Universe") {
    console.log("- Game Has Releases");
    console.log(`First => ${Object.values(myFavGames)[i].bestThree.one}`);
    console.log(`Second => ${Object.values(myFavGames)[i].bestThree.two}`);
    console.log(`Third => ${Object.values(myFavGames)[i].bestThree.three}`);
  }
  console.log("#".repeat(20));
}
// length of nested array
// console.log(Object.keys(myFavGames["Trinity Universe"]).length)

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

// Assignment 15

let myElement = document.getElementsByTagName("div")[1];
let myElement1 = document.getElementsByClassName("element");
let myElement2 = document.getElementsByName("js");
let myElement3 = document.getElementById("elzero1");
let myElement4 = document.querySelector("#elzero1");
let myElement5 = document.querySelector(".element");
let myElement6 = document.querySelector("[name='js']");
// let myElement7 = document.querySelector("div"); // as there is another div in html before our target
let myElement7 = document.querySelector("[class='element']");
let myElement8 = document.querySelectorAll("[id='elzero1']");
let myElement9 = document.querySelectorAll("[name='js']")
let myElement10 = document.querySelectorAll(".element")
let myElement11 = document.querySelectorAll("div")
console.log(myElement);
console.log(myElement1[0]);
console.log(myElement2[0]);
console.log(myElement3);
console.log(myElement4);
console.log(myElement5);
console.log(myElement6);
console.log(myElement7);
console.log(myElement8[0]);
console.log(myElement9[0]);
console.log(myElement10[0]);
console.log(myElement11[1]);
console.log(document.body.children[2]);
console.log(document.body.appendChild(myElement));
console.log(document.body.lastElementChild);

let inForm = document.querySelector("[name='dollar']")
let inValue = document.querySelector(".result")
inForm.addEventListener("input", updateValue)
function updateValue(e) {
    inValue.textContent = `{${Number(e.target.value)}} USD Dollar = {${((e.target.value*15.6).toFixed(2))}} Egyptian Pound`
}

for (i = 0; i < 10; i++) {
  let targetDiv = document.createElement("div")
  let targetImg = document.createElement("img")
  targetImg.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
  targetImg.setAttribute("alt", "Elzero Logo")
  targetDiv.appendChild(targetImg)
  document.body.appendChild(targetDiv)
}


let scatter1 = document.querySelector(".one");
let scatter2 = document.querySelector(".two");
scatter1.title = "one" 
scatter2.title = "two"
scatter1.textContent = "One"
scatter2.textContent= "Two 2"
console.log(scatter1);
console.log(scatter2);
let checkImg = document.querySelectorAll(".test")
for (i = 0; i < 5; i++) {
  if (checkImg[i].hasAttribute("alt")) {
    checkImg[i].alt = "Old"
  } else {
    checkImg[i].alt = "Elzero New"
  }
} 


document.forms[1].style.display = "flex";
document.forms[1].style.flexDirection = "column";
document.forms[1].style.margin = "20px 0 ";
document.forms[1].style.gap = "10px";
document.forms[1].style.alignItems = "center";
document.querySelector("[type='submit']").style.backgroundColor = "#009688";
document.querySelector("[type='submit']").style.color = "white";
document.querySelector("[type='submit']").style.border = "none";
document.querySelector("[type='submit']").style.padding = "5px";
document.querySelector("[type='submit']").style.width = "200px";
document.querySelector(".results").style.display = "flex";
document.querySelector(".results").style.justifyContent = "space-between";
document.querySelector(".results").style.gap="20px"
document.querySelector(".results").style.color = "white";
document.querySelector(".results").style.width = "100%";
document.querySelector(".results").style.flexWrap = "wrap";
document.querySelector(".results").style.textAlign = "center";
document.querySelector("select").style.width ="200px"
document.querySelector("[name='elements']").style.width ="200px"
document.querySelector("[name='texts']").style.width ="200px"

document.forms[1].onsubmit = function (e) {
  e.preventDefault();
}
  let submitCreate = document.forms[1].children[3]
  let inNum = document.querySelector("[name='elements']")
  let inText = document.querySelector("[name='texts']")
  let finalResult = document.querySelector(".results")
  let mainSelect = document.querySelector("select")
  
function elementAdd () {
  finalResult.lastChild.textContent=`${inText.value}`
  finalResult.lastChild.className = "box";
  finalResult.lastChild.title = "Element";
  finalResult.lastChild.id=`id-${i+1}`
  finalResult.lastChild.style.backgroundColor = "#ff5722";
  finalResult.lastChild.style.width = "calc(90%/3)"
  finalResult.lastChild.style.padding = "10px"
}
submitCreate.onclick = function () {
  finalResult.innerHTML = "";
  for (i = 0; i < inNum.value; i++) {
    if (mainSelect.value == "Div") {
      let newDiv = document.createElement("div");
      finalResult.appendChild(newDiv)
      elementAdd();
    } else {
      let newSection = document.createElement("section")
      finalResult.appendChild(newSection);
      elementAdd();
    }
  }
}


// Assignment 16
let inputAdd = document.querySelector(".classes-to-add");
let inputRemove = document.querySelector(".classes-to-remove");
let divTest= document.querySelector(".current");
let divContainer = document.querySelector(".classes-list div")
// add intial classes in current div as span (default)
for(i=0;i<2;i++) {
  let initialSpan = document.createElement("span")
  initialSpan.textContent = divTest.classList[i]
  divContainer.appendChild(initialSpan)
}

function enableSpan() {
  let arr=[]
  // remove content inside parent div and recreate spans to avoid repeating
  divContainer.innerHTML = "";
  // store classlist inside array
  for(let i=0;i<divTest.classList.length;i++) {
    arr.push(divTest.classList[i])
  }
  // sort the array
  let sortArr = arr.sort();
  // create new span and take the value from the sorted array to span(make the content is sorted)
  for(let i =0;i<arr.length;i++) {
    let showSpan = document.createElement("span")
    showSpan.textContent = `${sortArr[i]}`
    divContainer.append(showSpan);
  }  
  // confirm if the parent div is a empty show the text(No Classes To Show) 
  if(divTest.classList.length == 0) {
    divContainer.textContent = "No Classes To Show";
  }
}
// at blur add values of input to current div as classes
inputAdd.onblur = () => {
  let addition = (inputAdd.value.toLowerCase()).toString().split(" ");
  if (addition.length == 1) {
    divTest.classList.add(addition[0])
  } else {
    divTest.classList.add(addition[0],addition[1]);
  }
  // remove value from input as soon as leave the input
  inputAdd.value = "";
  enableSpan();
}
// at blur remove values of input from current div as classes
inputRemove.onblur = () => {
  let removed = (inputRemove.value.toLowerCase()).toString().split(" ")
  divTest.classList.remove(removed[0],removed[1]);
  inputRemove.value = "";
  enableSpan();
}


let ourElement= document.querySelector(".our-element")
let ourStart = document.createElement("div")
let ourEnd = document.createElement("div")
let ourTextStart = document.createTextNode("Start")
let ourTextEnd = document.createTextNode("End")
ourElement.nextElementSibling.remove()
ourStart.className="start";
ourStart.title = "Start Element";
ourStart.setAttribute("data-value","Start")
ourEnd.className = "end";
ourEnd.title = "End Element"
ourEnd.setAttribute("data-value", "End")
ourStart.append(ourTextStart)
ourEnd.append(ourTextEnd)
ourElement.before(ourStart);
ourElement.after(ourEnd)

let challenge = ourEnd.nextElementSibling
challenge.after(challenge.lastChild)

document.addEventListener("click",function(e) {
  console.log(`This is ${e.target.tagName}`)
})

//Assignment 18
// let from = "5",to="20" 
// let promptMsg = prompt("Print Number From-To",`Example: ${from}-${to}`)
// let began = promptMsg.slice(0,promptMsg.indexOf("-"))
// let finish = promptMsg.slice(promptMsg.indexOf("-")+1)

//   for(let i= +began;i<= +finish ;i++) {
//   let countP = document.createElement("p")
//   countP.append(i);
//   document.body.appendChild(countP)
// }
//   if(promptMsg==`Example: ${from}-${to}`) {
//   for(let i= 5;i<= 20 ;i++) {
//   let countP = document.createElement("p")
//   countP.append(i);
//   document.body.appendChild(countP)
// }
// }

let mainPop=document.createElement("div")
let popH=document.createElement("h3")
let paraPop=document.createElement("p")
let btnClose=document.createElement("span")
function pop() {
  mainPop.style.cssText = "background-color:#ccc; position:relative; padding:30px 0; width:400px; text-align:center; margin:auto;"
  btnClose.style.cssText=`color:white; font-weight:bold; position:absolute; background-color:red; border-radius:50%; width:30px; height:30px; 
  right:-15px; top:-15px; display:flex; justify-content:center; align-items:center; cursor:pointer`
  paraPop.append("Welcome To Elzero Web School")
  popH.append("Welcome")
  btnClose.append("X")
  mainPop.append(popH)
  mainPop.append(paraPop);
  mainPop.append(btnClose);
  document.body.append(mainPop)
}
setTimeout(pop,5000);
btnClose.onclick=()=> {
  mainPop.style.display ="none";
}

let countDiv =document.createElement("div")
countDiv.append("10")
document.body.append(countDiv)
let timeInterval= setInterval(()=> {
  countDiv.textContent -=1;
  if(countDiv.textContent ==="0") {
      clearInterval(timeInterval)
      // window.open("https://elzero.org","","width=500,height=500,top=10,left=100")
  }
},1000)

//Assignment 19
let selectFont = document.getElementById("font")
let optionFont = document.querySelectorAll("#font option")

if (window.localStorage.getItem("optionFont")==="Roboto") {
  document.body.style.cssText="font-family: 'Roboto', sans-serif;"
  selectFont.value =window.localStorage.getItem("optionFont");
} else if (window.localStorage.getItem("optionFont") ==="Cairo") {
  document.body.style.cssText="font-family: 'Cairo', sans-serif;;"
  selectFont.value =window.localStorage.getItem("optionFont");
} else {
  document.body.style.cssText="font-family: 'Open Sans', sans-serif;"
  selectFont.value = "Open";
}

selectFont.onchange = () => {
  window.localStorage.setItem("optionFont",selectFont.value)
  if(selectFont.value === "Open") {
    document.body.style.cssText = "font-family: 'Open Sans', sans-serif;"
  } else if (selectFont.value === "Cairo") {
    document.body.style.cssText ="font-family: 'Cairo', sans-serif;"
  } else {
    document.body.style.cssText="font-family: 'Roboto', sans-serif;"
  }
  document.body.style.backgroundColor = selectColor.value;
  document.body.style.fontSize = selectSize.value;
}

let selectColor = document.getElementById("color")
let optionColor = document.querySelectorAll("#color option")

if(window.localStorage.getItem("optionColor")) {
  document.body.style.backgroundColor = window.localStorage.getItem("optionColor");
  selectColor.value = window.localStorage.getItem("optionColor");
} else {
  document.body.style.backgroundColor = optionColor[0].value;
}
selectColor.onchange = () => {
  window.localStorage.setItem("optionColor",selectColor.value);
    document.body.style.backgroundColor = selectColor.value;
}

let selectSize = document.getElementById("size")
let optionSize = document.querySelectorAll("#size option") 

if (window.localStorage.getItem("optionSize")) {
  document.body.style.fontSize = window.localStorage.getItem("optionSize");
  selectSize.value = window.localStorage.getItem("optionSize");
} else {
  document.body.style.fontSize = optionSize[0].value;
}

selectSize.onchange = () => {
  window.localStorage.setItem("optionSize",selectSize.value);
    document.body.style.fontSize = selectSize.value;
}

let inputSave = document.querySelectorAll(".save")

inputSave[0].onblur =  () => {
  window.sessionStorage.setItem("input-save", inputSave[0].value);
};
if (window.sessionStorage.getItem("input-save")) {
  inputSave[0].value = window.sessionStorage.getItem("input-save");
} 
inputSave[1].onblur =  () => {
  window.sessionStorage.setItem("input-save1", inputSave[1].value);
};
if (window.sessionStorage.getItem("input-save1")) {
  inputSave[1].value = window.sessionStorage.getItem("input-save1");
} 
inputSave[2].onblur =  () => {
  window.sessionStorage.setItem("input-save2", inputSave[2].value);
};
if (window.sessionStorage.getItem("input-save2")) {
  inputSave[2].value = window.sessionStorage.getItem("input-save2");
} 

let selectBox = document.getElementById("box")
selectBox.onchange = ()=> {
  window.sessionStorage.setItem("optionBox",selectBox.value);
}
if (window.sessionStorage.getItem("optionBox")) {
  selectBox.value = window.sessionStorage.getItem("optionBox")
}

// Assignment 20

let myNumbers = [1, 2, 3, 4, 5];

let [aa, , , , e] = myNumbers

console.log(aa * e); // 5

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let [a1,b1, cc,[d,e1,[f,g]]] = mySkills

console.log(`My Skills: ${a1}, ${b1}, ${cc}, ${d}, ${e1}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

let arr3 = ["Ahmed", "Sameh", "Sayed"];
let arr4 = ["Mohamed", "Gamal", "Amir"];
let arr5 = ["Haytham", "Shady", "Mahmoud"];

let mainArr = arr5.concat(arr4,arr3)
let [,a2,b2, , , ,c2] = mainArr

console.log(`My Best Friends: ${a2}, ${b2}, ${c2}`);

// My Best Friends: Shady, Mahmoud, Ahmed

const member1 = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

let {age:a3, working:w, country:c3 , hobbies: [ h1, , h3]} = member1

console.log(`My Age Is ${a3} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c3}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const {title:t, developer:d1, releases: {["Oath In Felghana"]:[u, j1], ["Ark Of Napishtim"]:{US:u_price, JAP:j_price}, Origin:or} } = game
let o = Object.keys(game.releases)[0]
let a4 = Object.keys(game.releases)[1]


console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d1} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j1}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a4}`);
// Although I Love Ark Of Napishtim

console.log(`${a4} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a4} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD


// Assignment 21 

// Needed Output
// Set(3) {10, 20, 2}
// 2

let setOfNumber = new Set ([10])
setOfNumber.add(20).add(setOfNumber.size)

console.log([...setOfNumber][setOfNumber.size-1])


let myFriends1 = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log([...new Set(myFriends1)].sort())

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let myMap = new Map([
  ["userName","Osama"],
  ["role","Admin"],
  ["country","Egypt"],
]);
console.log(myMap)
console.log(myMap.size)
console.log(myMap.has("role"))

let theNumber = 100020003000;

// Needed Output
123

console.log(+[...new Set((theNumber).toString())].filter((e)=> +e !== -e).join(""))


let theName = "Elzero";

// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']

console.log(theName.split(""))
console.log(Array.from(theName))
console.log([...theName])
let theArray = []
for(i=0;i<theName.length;i++) {
  theArray.push(theName[i])
}
console.log(theArray)
let theArray1=[]
theArray1.push(...theName)
console.log(theArray1)


let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
let number = chars.filter((e)=> !isNaN(+e))
chars =  [...new Set([...number,...chars])]

chars.copyWithin(0,number.length, number.length*2)
console.log(chars)


let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
// [1, 2, 3, 4, 5, 6]

console.log(numsOne.concat(numsTwo))
console.log([...numsOne,...numsTwo])
numsOne.push(...numsTwo)
console.log(numsOne)

// Assignment 22
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let re= /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;
console.log(ip.match(re))

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let re1= /OS\d*O/ig;
console.log(specialNames.match(re1))

// Output
// ['Os10O', 'OsO', 'Os100O']

let phone = "+(995)-123 (4567)";
let re2=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(re2))

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re3 = /\d{2}[-\/\s]+\d{2}[-\/\s]+\d{2,4}/ig; // Write Pattern Here

console.log(date1.match(re3)); // "25/10/1982"
console.log(date2.match(re3)); // "25 - 10 - 1982"
console.log(date3.match(re3)); // "25 10 1982"
console.log(date4.match(re3)); // "25 10 82"

// Assignment 23
// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model,price) {
    this.n= name;
    this.m=model;
    this.p= price;
  }
  run() {
    return `Car is Running Now`
  }
  stop() {
    return `Car is stopped`
  }
}
let carOne = new Car("MG",2022,420000)
let carTwo = new Car("BMW",2018,500000)
let carThree = new Car("KIA",2017,30000)
// Needed Output
console.log(`Car one Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`)
console.log(carOne.run())
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"


class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone{
  constructor(name, serial ,price, size) {
    super(name, serial, price)
    this.s= size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown


// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData () {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c.toString().match(/\d{4}/ig).join("-")}`
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined


// Write Your Code Here
String.prototype.addLove= function() {
  return `I love ${this} Web School`
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School


const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj,{
  score:{
    writable:false,
  },
  id: {
    enumerable:false,
  },
})
delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

"username => Elzero"
"score => 1000"
// {username: 'Elzero', score: 1000, id: 100}

// Assginment 24

let myBirthday = new Date("Dec 1 2001")
let now = new Date()

let dateDiff = now - myBirthday
console.log(`${dateDiff /1000} seconds`) // seconds
console.log(`${dateDiff /1000/ 60} minutes`) // minutes
console.log(`${dateDiff /1000/60/ 60} hours`) // hours
console.log(`${dateDiff /1000/60/60/ 24} days`) // days
console.log(`${dateDiff /1000/60/60/24/ 31} months`) // months
console.log(`${dateDiff/1000/60/60/24/31 /12} years`) // years

let dateS= new Date(1980,5,1,0,0,1)
console.log(dateS)
// Needed Output

"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// Needed Output
let lastDate= new Date()
lastDate.setMonth(7,31)
console.log(lastDate)
console.log(`Previous Month Is ${lastDate.toLocaleString([],{month:"long"})} And Last Day Is ${lastDate.getDate()}`)
"Sat Aug 31 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is August And Last Day Is 31"

let birthday = new Date()
// method one
birthday.setFullYear(2001,11,1)
birthday.setHours(0,0,0)
console.log(birthday)

//method two
let birthday1 =new Date(2001 ,11 ,1 ,0 ,0 ,0)
console.log(birthday1)

//method three
let birthday2= new Date(Date.parse(birthday1))
console.log(birthday2)

// method four
let birthday3 = new Date("Dec 1 2001")
console.log(birthday3)

// Needed Output
// let startP =performance.now()
// for(let i=0;i<100000;i++) {
//   let loopDiv=document.createElement("div")
//   loopDiv.append(i)
//   document.body.append(loopDiv)
// }
// let endP=performance.now()
// let duration = Math.trunc(endP - startP)
// console.log(`Loop Took ${duration} Milliseconds.`)
// "Loop Took 1921 Milliseconds."

function* gen() {
  yield 14;
  let index=154;
  yield index;
  for( let i=340;true;i+=200) {
    yield index+=i;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}


function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}
function* genAll() {
  yield* genNumbers();
  yield* genLetters();
}

let generator1 = new Set(genAll()).keys();
console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}

// Assignment 25
// Needed Output
// task 2

let myRequest = new XMLHttpRequest()
myRequest.open("GET","articles.json")
myRequest.send()
console.log(myRequest)
myRequest.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200) {
    console.log(this.response)
    console.log("Data Loaded")

    // task 3

    let mainData = JSON.parse(this.response);
    for( let i=0; i<mainData.length;i++) {
      mainData[i].category = "All";
    }
    console.log(mainData)
    let updateData = JSON.stringify(mainData)
    console.log(updateData)

    // task 4
    
    let article = JSON.parse(this.response)
    let div = document.createElement("div")
    div.id="data";
    for(let i=0; i<article.length;i++) {
      let mainDiv = document.createElement("div")
      let title = document.createElement("h2")
      let p1 = document.createElement("p")
      let p2 = document.createElement("p")
      let p3 = document.createElement("p")
      title.append(article[i].title)
      p1.append(article[i].body)
      p2.append(`Author: ${article[i].Author}`)
      p3.append(`Category: ${article[i].Category}`)
      mainDiv.append(title,p1,p2,p3)
      div.append(mainDiv)
      document.body.append(div)
    }
  }
}
"JSON Object Content Here"
"Data Loaded"

// Assignment 26

// let getData = (link) => {
//   return new Promise((res,rej) => {
//     let request = new XMLHttpRequest();
//     request.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         res(JSON.parse(this.responseText))
//       } else {
//         rej(Error("Not Found"))
//       }
//     };
//     request.open("GET",link);
//     request.send();
//   })
// };

// getData("./promise.json").then((result) => {
//   result.length = 5;
//   return result;
// })
// for (let i=0 ; i < 5 ; i++) {
//   let promiseDiv = document.createElement("div");
//   let promiseH = document.createElement("h3");
//   let promiseP = document.createElement("p");
//   promiseDiv.append(promiseH,promiseP)
//   getData("./promise.json").then((result)=> {
//     promiseH.append(result[i].title)
//     return result;
//   }).then((result) => promiseP.append(result[i].description))
//   document.body.append(promiseDiv)
// }

// another method 
async function getData (link) {

  // make promise and store repos on him
    let myPromise = new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };
    myRequest.open("GET", link);
    myRequest.send();
  });
  
  // get promise results and edit on them
  let dataPromise = await myPromise;
  dataPromise.length = 5;

  // make html Element and add promise result to these elements
  for(let i=0 ; i< dataPromise.length; i++) {
    let promiseDiv = document.createElement("div");
  let promiseH = document.createElement("h3");
  let promiseP = document.createElement("p");
  promiseDiv.append(promiseH,promiseP);
  promiseH.append(dataPromise[i].title);
  promiseP.append(dataPromise[i].description);
  document.body.append(promiseDiv);
  }
}

getData("./promise.json")

// with Fetch API
async function getData1(link) {
  
  // get repos from the fetch API and modify on them
  let myData = await (await fetch(link)).json();
  myData.length = 5;

  // create elements and add repos inside them
  for(let i=0 ; i< myData.length; i++) {
    let promiseDiv = document.createElement("div");
  let promiseH = document.createElement("h3");
  let promiseP = document.createElement("p");
  promiseDiv.append(promiseH,promiseP);
  promiseH.append(myData[i].title);
  promiseP.append(myData[i].description);
  document.body.append(promiseDiv);
  }
}

getData1("./promise.json")



