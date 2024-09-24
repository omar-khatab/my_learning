// single comment
/* Multiple line comment */
/* Output Th Screen 
window , document ,console are considered an object
- window.alert()
- document.write(): we can write content(text or html element.. etc) inside the page
- console.log
syntax
*/
// window.alert("Hello From Js File");
document.write("<h1>Hello <span>Page<span/><h1/>");
document.querySelector("h1").style.color = "red";
console.log("Hello From Js File");
/* console Method 
    - log
    - error
    - table 
    
    Web API: It's a programming interface give you services by him you can do what you want with javascript like deal with console 
    
    Styling Console
    --- Directive %c
*/
console.error("error"); // make error in console
console.table(["Omar", "Essam", "Salah"]); // make table in console 
// the first %c target the first css formats and the second one target the another format
console.log("Hello From %cJs %cFile", "color: red; Font-size: 40px", "color: blue; Font-size: 40px");
/* ES6 : This is organization to put standarization on the code that you write this organization aim to made all programming language 
looks liks each other for example: python: my_name= "omar"
print(f"Hello {my_name}"
the normal code  in javascript: var myname= "omar"
console.log("Hello" + myname)
,but if we follow ES6 the code will become console.log(`Hello ${myname}`)*/
/* Data type : all Data has type, so javascript has function recognize of data type  
types: 
1-string : is a text always put him between double or single quotes
2- number 
3- Array ->is an Object
4- Object
hint: Array means matrix
5- Boolean: this type for any question have answer with true or false 
6- undefined : for that isn't exist 
7- null: for the empty value => Object*/
console.log("omar essam");
// typeof: is a tool in js to identify on datatype
console.log(typeof "omar essam"); //First way
console.log (typeof("omar essam")); //Second way
// to make the programming language deals with numbers, not string we should numbers without double or single quotes "", ''
console.log(typeof 5000); // not console.log (typeof "5000")
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]); //Array => Object
console.log(typeof ["Om", "Es", "Sa"]); //Array => Object
console.log(typeof {name: 'omar', age: 19, country: 'Eg'}); //Object
console.log(typeof true); //Boolean
console.log(typeof false); //Boolean
console.log(typeof undefined);
console.log(typeof null);
/* Variable 
syntax: (Keyword => var | Variable name | Assignment Operator | Variable Value) 
hint: we should make variable firstly, then use it, if we don't that the web don't recognize on the code that has variable name */
var user = "omar"; 
console.log(user);
console.log(user);
//  we can declare more than one variable in one line
var user1 = "salah", age = 25;
console.log(user1);
console.log(age);
// for html element with id, this id known as a variable
console.log(hello);
// and we can change inner content in html element with id identifier(for css)
hello.innerHTML = "Option" // here we change which inside html element(div with id) from hello to option
/* Identifier: it called also to variable name and it has some rules in naming such that: it's not allowed start name with number, 
but can put number in any another place and make space between letters is also not allowed for example (1user, us er) false, 
but you can put underscore or $ in any position in name for example: (_us1e_r, $us2e$r) and you can't put any special character in any place
in name (@user, use#r) false.
hint: variable name is sensitive: user doesn't look like User and you can't use reserved name in javascript like function, if or var
it's commonly used in named in javascript is camel case: userName.*/
/* var
- Redeclare (yes) this mean var allow make new value for the same variable name:
var a = 1;
var a = 2;
console.log(a);
- Access Before Declare (Undefined) => when you use the variable before declare it in var gives you undefined that 
don't know us where is the problem
console.log(a);
var a = 1;
- Variable scope drama (Added to window object) and that causes many problems.
- Block and Function scope. 

let 
- Redeclare (no => Error)
- Access Before Declare (Error) => you know if you make this mistake as the console will give the error that will know us problem
- Variable scope drama.(Not added to window object)
- Block and Function scope.

const 
- Redeclare (no => Error) 
- Access Before Declare (Error) => similar to let
- Variable scope drama.(Not added to window object)
- Block and Function scope. 
*/
// These are method to make quotes inside the string
// first method by make single quote inside double one or opposite
console.log("Elzero web 'school'");
console.log('Elzero web "school"');
/* there are another way by use \ ,here \ put it to ignore character and it's not dealt with as programming language 
(\ => it's be considered escape operator ignore what after it) */
console.log("Elzero web \"school\"");
console.log('Elzero web \'school\'');
// to put \ itself , we should put another \ before it
console.log("Elzero \\ web \"school\"");
// \ : it's used for line continue also as we ignore new line an dealt with this new line as for me don't related with programming commands
console.log("Elzero \
web \
school")
// to put any word in new line in console, regardless you write it beside any word in your code, you should use \n
console.log("Elzero\nWeb\nSchool");
// concatenation : these is expression refer to link the data or string each other and the operator to make this in js is +
let a = "We love"; //to make space between two words make space in the end of the first word or make space in the beginning of the second word
let b = "Javascript";
// we put double quote between two variable to make space between us
document.write(a + " " + b);
console.log(a, b); // inside console we don't need put space he make space as soon as put two message(variable)
/*
Template Literals (Template String): this is the ECMAScript standard for concatenation */
let c = "And";
let d = "Programming";
// this is with concatenation
console.log(a + " " + b +
"\n" + c + " " + d);
console.log(a + " \"\" " + b +
"\n" + c + " " + d);
console.log(`${a} ${b} ${c} ${d}`); // this is with ECMAScript standard, in this code we make space without any operator.
console.log(`${a} ${b} 
${c} ${d}`) // here to put words in new line also in code put it in new line.
// here we call the variable with ${variable Name} upon on ECMAScript 
//here we put single or double quote normally to put him and we put two backslash to print one backslash as he deal with him as escape operator
console.log(`${a} "" '' \\ ${b} 
${c} ${d}`);
console.log(`${a} ${5 * 100}`); // here also we can make math operation and can make this with variable and make if statement or anything

let title = "Elzero";
let desc = "Elzero Web School";
let markUp = `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div> 
    </div>
`;
document.write(markUp);

/*
Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7) or power
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
  */
 // number have blue color but string black inside console
 console.log(10 + 20); // here + is an Arithmetic Operators
 console.log(10 + "Osama"); //here will deal with + as concatenate operator and language deal with this as string

console.log(10 - 20);
console.log(10 - "Osama"); // will give NaN
console.log(typeof NaN); // type of NaN is a number

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1
let num = 1;
//same with c++ like postfix and prefix 
num++; // post increment -> print then plus
++num; // pre increment and decrement is the same -> plus then print

/*
  - + Unary Plus [Return Number If Its Not Number] and if its number return number
  - - Unary Negation [Return Number If Its Not Number + Negates It] and turn this number to negative
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
console.log(+100); // return number 
console.log(+"100"); // return number
console.log(+"-100"); // return number and still minus exist
console.log(+"Osama"); // give NaN
console.log(+"15.5"); // return number as is
console.log(+0xff); // hex decimal numeral system and return it as is number
console.log(+null); // return 0
console.log(+false); // return 0
console.log(+true);// return 1
// here - will return number and put minus
console.log(-100);
console.log(-"100");
console.log(-"-100"); // print 100 as minus in minus give plus
console.log(-"Osama"); // NaN
console.log(-"15.5");
console.log(-0xff);
console.log(-null); // return -0
console.log(-false); // return -0
console.log(-true); // return -1
console.log(+"");// here will return 0 as "" is a empty

console.log(Number("100")); // another method to return number by put constructor number, but unary operator can turn the number to minus

/*
  Type Coercion (Type Casting) التحويل بالإكراه
  - +
  - -
  - "" - 2
  - false - true
*/

let v = "10";
let e = 20;
let f = true;
console.log(+v + e);
console.log(Number(v) + e); /* here we use unary operator to make variable v is a number and we can use constructor number and if we don't
put these methods the language deal with this as string and considered + as concatenate operator */
console.log(v - e); // v here is a number
/* here language will deal with variable v as number as language deal with data upon on givens that you put or you see and this
called type coercion (type casting)*/
console.log("" - 2) // here will print -2 as "" is a empty(zero)
console.log(false - true); // will print -1 upon on type coercion (type casting)
console.log(+false - +true); // will print -1 
console.log(e + f); // print 21
console.log(v + e + f); // here he will deal with this as string upon on type coercion (type casting)
console.log(+v + e + f); // here will print 31 as we turn v to number by unary operator

/*
  Assignment Operators
*/

let x = 10;

x = x + 20;

x = x + 70;

x += 100; // x = x + 100

x -= 50; // x = x - 50

x /= 50; // x = x / 50

/*
js deal with all number by one method means integer,float,double,...etc in js are the same and js store number in double precision   
  Number
  - Double Precision
  - Syntactic Sugar "_": method to change syntax to make him more easily to read
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000); // here i am afraid to mistake count zeros
console.log(1_000_000); // here we add some sugar to easy read zeros this called Syntactic Sugar
console.log(1e6); // another method to easy read zeros
console.log(10 ** 6); // 10 power 6
console.log(10 * 10 * 10 * 10 * 10 * 10); // this is 10 power 6 to show the idea
console.log(1000000.0);//here 0 in decimal point not have value so console don't print him,but if we put 1 after decimal point,he will print him 

console.log(Number.MAX_SAFE_INTEGER); /*Number is a object(function) have some properties target this by object.property here 
max_safe_integer express max number can you use him in js with safe means don't make strange things in js*/
console.log(Number.MAX_VALUE); // max_value this max value that you reach him in js
console.log(Number.MAX_VALUE + 23434343434); // if we add number on max_value js don't accept this and print max_value only

/*
Methods: it's a ready Procedures that execute a particular action or behavior means execute a particular idea 
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]: this is a part of condition that have answer with true or false
  - isNaN() [ES6]: this is to check if the data NaN or not 
*/

console.log((100).toString()); // return the number to string
console.log(100..toString()); // return the number to string here if we put one dot js define that this dot is a decimal point and don't work
console.log(100.10.toString()); // return number(floating point number) to string 

console.log(100.554555.toFixed(2)); // return the number to string and determine numbers that show after decimal point and here we select 2
// hint: if the number after that we select is 5 or more js near my number to upper number, but if is 4 or least keep the number as is  
console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama")); // have advantage that can analysis the data and return number
console.log(parseInt("Osama 100 Osama"));//here don't work
console.log(parseInt("100.500 Osama")); // here will return number without after which decimal point 
console.log(parseFloat("100.500 Osama")); // here will return number with after which decimal point and if we put integer only can return him

console.log(Number.isInteger("100")); // false as this is a string
console.log(Number.isInteger(100.500)); // false as this is a float
console.log(Number.isInteger(100)); // true

console.log(Number.isNaN("Osama")); // false as data here string not NaN
console.log(Number.isNaN("Osama" / 20 )); // true as data that return is NaN

/*
  Math Object
  - round(): if decimal point 5 or more near him to upper , but if 4 or least near to lowest
  - ceil(): always near to highest
  - floor():always near to lowest
  - min(): print min number from group of numbers
  - max(): print max number from group of numbers
  - pow(): use to number with power
  - random(): print random number in every time reload your page
  - trunc() [Es6]: remove decimal point and return number to integer
*/

console.log(Math.round(99.2)); //here print 99
console.log(Math.round(99.5)); // here print 100

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));

/*
  String Methods
  index: position of element inside array or string like c++
  - Access With Index 
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods: chain methods it's use more than one of method in one line 
*/
// hint: space is considered a character, so index take care him 
let theName = "  Ahmed  "; // here space make the index=8 and if we remove this space the index became 4

console.log(theName);
console.log(theName[1]); // h
console.log(theName[5]); // undefined if put index greater than index of my string 

console.log(theName.charAt(1));// charAt is a method take index to print element that have this index, so here print h
console.log(theName.charAt(5)); // empty

console.log(theName.length); // how many element inside array or string, but length start with 1 not 0, so she don't follow index and print 5
console.log(theName.trim()); // remove the space in the string

console.log(theName.toUpperCase()); // turn the all character in the string to uppercase, but the space here is existed
console.log(theName.toLowerCase()); // turn the all character in the string to lowercase, but the space here is existed

console.log(theName.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0) :search on a particular value inside string and return its index(position) and if not exist return -1
  and have two parameter first is a value and second where we want to start and default is 0
  - lastIndexOf(Value [Mand], Start [Opt] Length): search on the last value if this value is existed more than one 
  - slice(Start [Mand], End [Opt] Not Include End): take a part of string and have two parameter start and end, but end have default value 
  is the last index
  - repeat(Times) [ES6] : repeat the string and take count
  - split(Separator [Opt], Limit [Opt]): have two parameter and if we put split only will return array as he split the string
  have two parameter first give her what we want to split(cut or remove) and second how many want to split and remove the rest 
  hint if we put in split "" only, will split every character alone and if we put " " with space , will remove the spaces in the string
*/

let aa = "Elzero Web School";

console.log(aa.indexOf("Web")); // 7
console.log(aa.indexOf("Web", 8)); // here will return -1 as he start from 8
console.log(aa.indexOf("o")); // 5
console.log(aa.lastIndexOf("o")); // 15

console.log(aa.slice(2, 6)); // zero
console.log(aa.slice(-5, -3)); // negative to we can count from the last and here return => ch and also not include the end

console.log(aa.repeat(5)); // repeat five times

console.log(aa.split("", 6)); // here will split six times and we want to split elements, so here will split Elzero

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End): take a part of string and have two parameter start and end, but end have default
  value is the last index, but if we reverse the start and the end this method will solve this problem and return same result and if we put 
  negative value inside the start will consider that he have index 0
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract): have two parameter first start index and second how many character that we want to extract 
  and default value the last character and negative value make him start from the last
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6] : 
  means is a particular variable consist of a particular word or not and return true or false and second parameter is where will we start 
  the search 
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6] : search on a particular word or character from beginning of a particular
  index and default value is 0 for second parameter 
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]: have two parameter first value is a word or character that we search 
  in him to know if this word in the end or not and second value is length of string that you search on him and default value of second 
  parameter is whole length of string
*/

let ss = "Elzero Web School";

console.log(ss.length); // 17 as length count from 1 not 0

console.log(ss.substring(2, 6)); // zero
console.log(ss.substring(6, 2)); // zero
console.log(ss.substring(-10, 6)); // 0 - 6
console.log(ss.substring(ss.length - 5, ss.length - 3)); /* return ch as substring don't include negative value and here we make count 
from the last like slice and we should know not include end */

console.log(ss.substr(0, 6)); // Elzero
console.log(ss.substr(17)); // return empty as we exceeds on the index
console.log(ss.substr(-3)); // ool
console.log(ss.substr(-5, 2)); // ch as the second here he want count character only 

console.log(ss.includes("Web")); // true 
console.log(ss.includes("Web", 8)); // false as we start from index 8

console.log(ss.startsWith("E")); // true as default 0
console.log(ss.startsWith("z", 2)); // true
console.log(ss.startsWith("zero", 2)); // true as beginning of word from index 2

console.log(ss.endsWith("l")); // true as l in the end of the string
console.log(ss.endsWith("b", 10)); // true as b in the end of the string that we determine him by length

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only regardless the datatype, so return true
console.log(-100 == "-100"); // Compare Value Only regardless the datatype, so return true
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type // false
console.log(10 !== "10"); // Compare Value + Type //true
console.log(10 !== 10); // Compare Value + Type // false

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);
console.log("Osama" === "Ahmed") // false
console.log(typeof "Osama" === typeof "Ahmed"); // true

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";
// we should now if the two condition achieved the compiler give the priority for first condition as the compiler execute the code sequential
if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);

/*
  Nested If
*/

let price1 = 100;
let discount1 = false;
let discount1Amount = 30;
let country1 = "Egypt";
let student = true;

if (discount1 === true) {

  price1 -= discount1Amount;

} else if (country1 === "Egypt") {

  if (student === true) {

    price1 -= discount1Amount + 30;

  } else {

    price1 -= discount1Amount + 10;

  }

} else {

  price1 -= 10;

}

console.log(price1);

/*
  Conditional (Ternary) Operator
*/

let theName1 = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs"; // here we can store condition inside variable, so result = "Mrs"

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs"); // here print Mrs directly inside console 

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName1}`);

theAge < 20 // if
  ? console.log(20) // print
  : theAge > 20 && theAge < 60 // else if 
  ? console.log("20 To 60") // print
  : theAge > 60 // else if 
  ? console.log("Larger Than 60") // print 
  : console.log("Unknown"); // else
  
  /*
  Logical Or || :we can print alternative data if happen any mistake means our variable have false value like 0 
  or have empty value(undefined) or null
  -- Null + Undefined + Any Falsy Value : here print alternative data in case of null or undefined value only
  Nullish Coalescing Operator ??
  -- Null + Undefined
  
  and main data isn't printed
*/

console.log(Boolean(100)); // true
console.log(Boolean(-100)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
let price2 = 0;

console.log(`The Price Is ${price2 || 200}`); // here if any mistake happen the console will print 200 
console.log(`The Price Is ${price2 ?? 200}`); 

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/
// Don't redeclare variable in switch this make error, but update his value
let day = "A";

switch (day) {
  default:
    console.log("Unknown Day"); // the normal place for default in the end , but here we should put break to stop 
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday"); // here case 2 or case 3 will print monday as we achieved this by case 2 or case 3
    break;
}

/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays : make array inside array
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]]; // last element is considered nested array

console.log(`Hello ${myFriends[0]}`); // Ahmed
console.log(`Hello ${myFriends[2]}`); // Sayed
console.log(`${myFriends[1][2]}`); // here we access on element called mohamed and print h by use square bracket again
console.log(`Hello ${myFriends[3][1]}`); // here we select nested array, then select ali
console.log(`${myFriends[3][1][2]}`); // here we make access on element inside nested array, so we print i which inside ali 

console.log(myFriends);
myFriends[1] = "Gamal"; // here we change mohamed to Gamal
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"]; /* if we put only one name this will turn nested array to element inside array normally,
but here we change nested array to another nested array */
console.log(myFriends);

console.log(Array.isArray(myFriends)); // to know if this variable is array or not as if we use typeof, will print object

/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends1 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
myFriends1[6] = "Gamal"; // here will make array have 7 element and his length is 7
myFriends1.length = 2; // here we control on array as we determine his length with 2, so always will print two element only
myFriends1[myFriends1.length] = "Omar"; // here we add element on array dynamically as length greater than index with 1
myFriends1[myFriends1.length - 1] = "Salah"; // here we always edit on last element
console.log(myFriends1);

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First: add any number of element in the beginning of the array
  - push("", "") Add Element To The End : add any number of element in the end of the array
  - shift() Remove First Element From Array : remove the first element in the array and print array without first element, 
  but also store removed element and can store this method inside variable and use it to print the removed element
  - pop() Remove Last Element From Array : like shift put remove last element in array
*/

let myFriends2 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends2);

myFriends2.unshift("Osama", "Nabil"); // here we add two element in the start of array

console.log(myFriends2);

myFriends2.push("Samah", "Eman"); // here we add two element in the end of array

console.log(myFriends2);

let first = myFriends2.shift(); // here we store first element 

console.log(myFriends2);

console.log(`First Name Is ${first}`); // first = osama

let last = myFriends2.pop();

console.log(myFriends2);

console.log(`Last Name Is ${last}`); // last = eman

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt]) : search on a particular element this first parameter and second is optional and he is 
  considered from where we want to start our search and default value is first index 
  - lastIndexOf(Search Element, From Index [Opt]) // search from last to start,but count index normally
  - includes(valueToFind, fromIndex [Opt]) [ES7] : print true or false as he ask if a particular element is exist or not this first parameter
  and second is optional and is from where we will start the search and default value is index 0
*/

let myFriends3 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends3);

console.log(myFriends3.indexOf("Ahmed")); // index 0 as we don't determine second parameter
console.log(myFriends3.indexOf("Ahmed", 2)); // index 4 as we start search from index 2

console.log(myFriends3.lastIndexOf("Ahmed")); // here index 4 for another ahmed 
console.log(myFriends3.lastIndexOf("Ahmed", -2)); // here start form -2 means start search from Alaa and print index 0 for first ahmed

console.log(myFriends3.includes("Ahmed")); // true
console.log(myFriends3.includes("Ahmed", 2));  // true as we have ahmed in last element

if (myFriends3.lastIndexOf("Osama") === -1) { // here indexOf or lastIndexOf give -1 as Osama not exist in array  
  console.log("Not Found");
}

console.log(myFriends3.indexOf("Osama")); // -1 
console.log(myFriends3.lastIndexOf("Osama")); // -1

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse : reverse the element of array means first replace last and last replace first
*/

let myFriends4 = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends4);
console.log(myFriends4.sort()); // sort deal with number as alphabet so will sort 100 then 20 as 1 less than 2
console.log(myFriends4.sort().reverse()); // will reverse sorting

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End) : take a a part from array and two parameter is optional, so if we don't put 
  anything will print array as is and default value for first parameter is index 0 and second parameter is last index 
  negative count from right to left, slice return new array
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
  splice: have three parameter: the first is where we will start as index, second how may element that we want to delete and 
  this determine from first parameter ,third is what will we add to array in place that you determine in first parameter also, 
  note:this method don't return new array means change our array
*/

let myFriends5 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends5);
console.log(myFriends5.slice()); // whole array
console.log(myFriends5.slice(1)); // from index 1 to last index
console.log(myFriends5.slice(1, 3)); // from index 1 to index 3,but don't include the end
console.log(myFriends5.slice(-3)); // here will print form osama to the end
console.log(myFriends5.slice(1, -2)); // here will print from sayed to osama as don't include the end
console.log(myFriends5.slice(-4, -2)); // here will print ali to osama 
console.log(myFriends5); // here wil print origin of array means here will print whole array as is as slice return new array

myFriends5.splice(1, 2, "Sameer", "Samara"); // here will start from index 1 and delete 2 element and then add your new element from index 1

console.log(myFriends5);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array : concat arrays together in a new variable, so we can put elements of two array in new array
  and concat of array will be done sequentially means add array with in order and with concat we can add new element and new array completely
  - join(Separator)
*/

let myFriends6 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends6.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);

console.log(allFriends.join()); // make all elements of array as one string and separate between us with comma
console.log(allFriends.join("")) // make all elements of array as one string and don't separate between us
console.log(allFriends.join(" @ ")); // here will separate between us with @ and put space also
console.log(allFriends.join("|")); // here will separate between us with | without space
console.log(allFriends.join("|").toUpperCase()); // here we deal with all element as one string and use with them string method

/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
  Loop
  - Loop On Sequences
*/

let myFriends7 = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];
// this code with loop to exclude numbers and put string element only in another array
for (let i = 0; i < myFriends7.length; i++) {
  if (typeof myFriends7[i] === "string") {
    onlyNames.push(myFriends7[i]);
  }
}

console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);
/* if we make counter greater than index this will return undefined and to sure this will not happen we make counter stop on length of array
,so if we add or reduce element in array this will not return undefined */
// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}

/*
  Loop Control
  - Break : stop the loop
  - Continue : skip a particular elements in array and with continue we can exclude the numbers from array 
  - Label: to make control on loop by another loop, give name to loop and by this name will control on her
*/
// we should care about order of code 
let products1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors1 = ["Red", "Green", "Black"];

for (let i = 0; i < products1.length; i++) {
  if (typeof products1[i] === "number") {
    continue;
  }
  console.log(products1[i]); // here order is important, if we put this code above, will not exclude numbers as print them first
}

mainLoop: for (let i = 0; i < products1.length; i++) {
  console.log(products1[i]);
  nestedLoop: for (let j = 0; j < colors1.length; j++) {
    console.log(`- ${colors1[j]}`);
    if (colors1[j] === "Green") {
      break mainLoop; /* here we break the mainloop by nestedloop, so here will print green, then stop main loop, 
      so will print first element in mainloop only and print to green only */
    }
  }
}

/*
  Loop For Advanced Example
*/

let products2 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products2[i]);
  i++; // if we put increment in the first code this will print second index and print undefined in the last element
  if (i === products2.length) break; /* this condition equal i < products2.length , and syntax can write without carly braces
  for this condition */
}

/*
  Products Practice
*/

let products3 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors2 = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products3[i]}</h3>`);
  for (let j = 0; j < colors2.length; j++) {
    document.write(`<p>${colors2[j]}</p>`);
  }
  document.write(`<p>${colors2.join(" | ")}</p>`);
  document.write(`</div>`);
}

/*
  Loop
  - While
*/

let products4 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < products4.length) {
  console.log(products4[index]);
  index += 1;
}

/*
  Loop
  - Do / While
*/

let products5 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let ii = 0;

do {
  console.log(ii);
  ii++;
} while (false);

console.log(ii);

/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
  Parameter is variable that you put to function and deal with them in function body
  argument is actual value that you pass to function to enable him 
*/
/* syntax of function is key word is function then identifier is function name and between brackets ,we put parameter(variable) 
that enter inside function to execute on him function and during calling function, she ask value of argument
hint: rules of function name follow rules like variable name */
/*function sayHello() {
  console.log(`Hello Osama`)
  sayHello(); to call function */
  // hint: userName inside function is a parameter
function sayHello(userName) {
  console.log(`Hi ${userName}`);
}

sayHello("Osama"); // Osama is argument
sayHello("Sayed");
sayHello("Ali");

/*
  Function Advanced Examples
  variable without value(argument) during calling function, will print undefined
*/

function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2021, 2020);

/*
  Function
  - Return : stop anything after her inside function
  - Automatic Semicolon Insertion [No Line Terminator Allowed]:anything for return don't be allowed to put him in a new line
  - Interrupting
*/
function welcome(userName) {
  return `Hello ${userName}` // by using return and it's useful in math operation
}
console.log(welcome("Omar"));
let turn = welcome("Omar");
console.log(turn); // use return and by her store task of function inside variable and use this variable

function calc(num1, num2) {
  return num1 + num2;
}
let result1 = calc(10, 20);
console.log(result1 + 100); // and modify on function call by add number on him during printing

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`; // make stop to loop by using return as return make stop to execution of code inside function body 
    }
    console.log(i);
  }
}

generate(10, 20);

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method : by putting value for parameter during making function
*/

function sayHello(username = "Unknown", age = "Unknown") { // here ES6 method by putting value for variable in prototype
  // if (age === undefined) { // this old method to make default value for parameter by using condition
  //   age = "Unknown";
  // }
  // age = age || "Unknown";  // another old method to make default value for parameter by using logical or
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());

/*
  Function
  - Rest Parameters : to make function receive number of arguments isn't determined and use him by put three dots before variable and 
  reset parameter is considered an array
  - Only One Allowed : function accepts only one rest parameter
  - Must Be Last Element: if we put other arguments(don't rest parameters) should rest parameter is last
*/
// this function to sum all elements of array
function calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
  we can declare about function and call her before the declaration, this for normal function
*/
/* we store function inside variable this called Anonymous function, but this function we can't call her before the declaration 
as is considered a variable and we can't call variable before declaration and if Anonymous function have identifier, we can't call her with
this identifier, but we can put her to recognize on errors in case of a lot of errors 
Anonymous function is used if we make this function to use her only one time */
let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello; // here we use function, we make her before that
// example to use Anonymous function, here we use her only time to make something and we don't use this next time as setTimeout accept function
setTimeout(function elzero() {
  console.log("Good");
}, 2000);

/*
  Function
  - Function inside Function
  - Return Function
*/
// Example 1
// function sayMessage(fName, lname) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lname}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Omar", "Khatab"))

//  Example 2
// function sayMessage(fName, lname) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lname}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Omar", "Khatab"))

//  Example 3
function sayMessage(fName, lname) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lname}`
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Omar", "Khatab"))
/*
  Function
  - Arrow Function : don't have parameter and use => to use arrow function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print = function () {
  return 10;
};
/*here if arrow function consist of one block of code, we can put him beside declaration and without carly braces and return, but if 
we have more than one line inside block of code, we should put block of code inside carly braces */
let print1 = () => 10; // two brackets here we can put underscore instead of them  

let print2 = function (num) {
  return num;
};

let print3 = num => num; // here if we have one argument we can put her without brackets

let print4 = function (num1, num2) {
  return num1 + num2;
};

let print5 = (num1, num2) => num1 + num2;

console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/
// these are a global scope and we can access on them from any place in code page 
var aaa = 1;
let bb = 2;

function showText() {
  /* here aaa and bb are local scope and these variables for this function only and don't related with anything outside function 
  and if we put declaration after call variables, this will make error as if the compiler see local variable, he don't touch global variable
  and as soon as absence of local variable, the compiler will use global variable 
  and during use local variable, this don't make overwrite on global variable as everyone of them doesn't touch the other */
  var aaa = 10; 
  let bb = 20;
  console.log(`Function - From Local ${aaa}`); // local variable
  console.log(`Function - From Local ${bb}`);
}
// here will see global variable only as local variable here for function only
console.log(`From Global ${aaa}`);
console.log(`From Global ${bb}`);

showText();

/*
  Scope
  - Block Scope [If, Switch, For]
*/
// hint: const like let
var xx = 10;

if (10 === 10) {
  /* if we put var instead of let, this will make overwrite on global variable and this is a problem, but here we use let,
  so this is considered a new local variable and if we put declaration after calling the variable this will make error 
  as the compiler see local variable, but error as initialization after calling */
  let xx = 50; 
  console.log(`From If Block ${xx}`); // here xx=50
}

console.log(`From Global ${xx}`); // here xx=10

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/
/* variable inside function can access on him inside nested function, but the opposite does not work
  hint: this like local and global variable, so first nested function see her local variable and second see variable inside parent function
  finally see global variable. this is order of seeing variable
  */
let b3 = 50;
function parent() {
  let a = 10;

  function child() {
    console.log(a);
    console.log(`From Child ${b3}`); // this variable is a global variable

    function grand() {
      // This variable for function called grand only and if we call this variable inside parent or child function, that will be error
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`); // b=100
    }
    grand();
  }
  child();
}
parent();

/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map
// this method by using Anonymous function with map
/* element in map means every element in array and index means every index for element in array and arr means array that we deal with her 
by map and this argument means value that return with array
hint" in map the element is mandatory, but other is a optional */
// let addSelf = myNums.map(function (element, index, arr) { // here this function is a Anonymous function
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//  return element + element; // here this operation will be applied on every element in array and make this operation by function that map accept her
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

// another solution by using named function with map
function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");

console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

let inv = invertedNumbers.map((ele) => -ele);

console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

let ign = ignoreNumbers.split("").map((ele) => isNaN(parseInt(ele)) ? ele : "").join("");

console.log(ign);

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A") // ? true : false; this is a test
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// Filter will return the same array as he make test to pass element from him or not as here el+el is considered true 
// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbers1 = "Elz123er4o";

let ign1 = ignoreNumbers1
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");

console.log(ign1);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixContent = mix.split("").filter(function (ele) {
  return !isNaN(parseInt(ele));
}).map(function (ele) {
  return ele * ele
}).join("");
console.log(mixContent);

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];
/* acc is first element in the array and current is element that proceed on him (second element in the array) here current will be add
him to acc and the index is a index of current element and arr is a like in map and filter 
example here acc =10 and current = 20 and index=1 ,so final is 30 in first call and in second call acc =30 and current = 15 and index =2 
and etc...*/
/* Initial value is considered acc*/
let add1 = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5); /* here 5 is initial value so this is a acc and current is 10 and index=0 and so on, but if we don't put initial value, 
the acc will become first element in the array */

console.log(add1);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);

/*
  - forEach
  --- method executes a provided function once for each array element.
hint: forEach don't return a new array
and forEach is preferred if we don't want change anything in array elements
  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesn't Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
  there is object and nested object for example: window is an object and window.location is an nested object 
  and nested object have some properties and methods
  properties is considered a data that we benefit from them to know some things(don't do action),
  but methods is considered a task when we call her, will execute a particular task, in the other hand means do action(don't return a data)
  hint:window.location is considered website
*/
// create object
let user2 = {
  // Properties follow rules of calling like variable and function and properties here need to data only 
  theName: "Osama",
  theAge: 38,
  // Methods follow rules of calling like variable and function and here methods means need to actions, so method consist of function
  sayHello: function () {
    return `Hello`;
  },
};

console.log(user2.theName);
console.log(user2.theAge);
console.log(user2.sayHello());

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
  Bracket notation is use in calling of properties any valid string(rules of calling) and any data can turn her to string 
  means property name can be valid string or any data can turn her to string 
*/

let myVar = "country";

let user3 = {
  theName: "Osama",
  country: "Egypt",
  "country of": "Syria",  // here use data can turn her to string as property name
};

console.log(user3.theName);
console.log(user3["theName"]) // and can use brackets notation with valid string
console.log(user3["country of"]); // user3.country //here we use brackets notation 
console.log(user3.myVar); // user3.country // here don't return value of property name as we use dot notation
console.log(user3[myVar]); // user3.country // here with bracket notation can use dynamic property and return Egypt

/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user4 = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  //Nested object
  addresses: {
    ksa: "Riyadh",
    // nested object inside nested object 
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    /* here to access on available we should put her object(user) and dot, but if available was a global variable(outside your object), 
    we should use word of available (variable name) only */  
    if (user4.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user4.name);
console.log(user4.age);
console.log(user4.skills);
console.log(user4.skills.join(" | "));
console.log(user4.skills[2]); // Access With Index
console.log(user4.addresses.ksa);
console.log(user4.addresses.egypt.one);
console.log(user4["addresses"].egypt.one);
console.log(user4["addresses"]["egypt"]);
console.log(user4["addresses"]["egypt"]["one"]);

console.log(user4.checkAv());

/*
  Object
  - Create With New Keyword new Object();
*/

/* let user5 = {
  age :20;
} */

// another method to make object by use object contract (new keyword)
let user5 = new Object({
  age: 20,
});

console.log(user5);
/* another way to make property for object and if we make this property previously inside object this is considered a new value to property 
and in this method we can use dot notation and brackets notation */
user5.age = 38;
user5["country"] = "Egypt";
// here another method to make method and is happened on her like property 
user5.sayHello = function () {
  return `Hello`;
};

console.log(user5);
console.log(user5.age);
console.log(user5.country);
console.log(user5.sayHello());

/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this); // window as this return to now what we point on
console.log(this === window); // true

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window); // true

document.getElementById("cl").onclick = function (e) {
  console.log(this); // this here return to owner to function (<button id ="cl">click</button>)
};

let user6 = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365; // here this return to object that her method call word of this 
  },
};

console.log(user6.age);
console.log(user6.ageInDays());

/*
  Object
  - Create Object With Create Method: to create object have same properties and methods belong to another object 
  and created object change if the basic object change
*/

let user7 = {
  age: 20,
  doubleAge: function () {
    /* here write this instead of user as if we change age of created object, this will reflect on method and return his age*2, 
    but if we put user7.age, this will not change action of method upon on age of created object */
    return this.age * 2;
    // return use7.age*2; //here if we change age of created object, this will always return user7.age *2
  },
};

console.log(user7);
console.log(user7.age);
console.log(user7.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

// here we make object(copyObj) have same properties and methods belong to user7 and here we make edit on age of copyObj
let copyObj = Object.create(user7);

copyObj.age = 50;

console.log(copyObj); // here will return what inside this object and prototype of basic object 
console.log(copyObj.age);
console.log(copyObj.doubleAge()); 

/*
  Object
  - Create Object With Assign Method: takes properties and methods from one or more object and store them in another object
  hint: if assign find two same property name, he take property of first object that met him 
  assign have first target object, then source. and we can put more than one source
  target object work inside assign as object that copy all sources inside him
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};
// here will take prop1 belong to obj1
let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200; // here update prop1
finalObject.prop4 = 4; // create new property

console.log(finalObject);
// here we put empty object as target object and we make obj1 as source and make another source have new properties only(don't call object)
let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div"); // by id
let myTagElements = document.getElementsByTagName("p"); // by tag name here target all paragraphs in html
let myClassElement = document.getElementsByClassName("my-span"); // by class name target all elements have this class
/* can write id or tag name or class or css selector inside querySelector and here we used css selector 
hint: querySelector target first element have that you put inside querySelector for example if we put two span have my-span,
querySelector target first element have my-span only and solution of this problem by querySelectorAll that target all element that have
these classes or css selector or tag names */
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]); // target Second p in html
console.log(myClassElement[1]); // target Second span in html
console.log(myQueryElement); // target first element have .my-span
console.log(myQueryAllElement[1]); // target second element have .my-span by index of querySelectorAll

console.log(document.title); // return title of page
console.log(document.body); // return body of page (whole body of html)
console.log(document.forms) // return all forms in page
console.log(document.forms[0]) // return first form
console.log(document.forms[0].one); // target input have name is called one that existed inside first form 
console.log(document.forms[0].one.value) // target value that existed inside input that belong to first form
console.log(document.links) // target all a inside html
console.log(document.links[0]) // target first a
console.log(document.links[1].href); // target what inside href attribute that existed in second a

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute : this method return value of attribute to use him in condition for example
  --- setAttribute : this method to change values of attribute and add a new attribute with him values

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML); // return what inside the element whether other elements or text (just what inside the element as is)
console.log(myElement.textContent); // return the text only inside the element even if inside other elements that inside main element
myElement.innerHTML = "Text From <span>Main.js</span> File"; // here know html and recognize on tag names 
myElement.textContent = "Text From <span>Main.js</span> File"; // don't know html and print anything as text
// hint: textContent can print tag names without entities
// hint if attribute is existed in html, js will overwrite on her, but if not , js will add him 
// hint: we can do the same to links like image
document.images[0].src = "https://google.com"; // target first image element and change src attribute to https://google.com
document.images[0].alt = "Alternate"; // target first image element and change alt attribute to Alternate
document.images[0].title = "Picture"; // target first image element and add title (don't exist in html) with value picture
document.images[0].id = "pic"; // add id to element 
document.images[0].className = "img"; // add class to element

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class")); // link 
console.log(myLink.getAttribute("href")); // #
// setAttribute : first parameter attribute name and second one is attribute value
myLink.setAttribute("href", "https://twitter.com"); // here target href and change his value to https://twitter.com
myLink.setAttribute("title", "Twitter"); // here add new attribute and put value for him is Twitter

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute: return true or false if a particular attribute existed inside element or not
  - Element.hasAttributes : check if a particular element have any attribute or not and return true or false upon on this
  - Element.removeAttribute: remove attribute himself from the element, but if we put setAttribute and put empty value this will make 
  attribute exist, but no have value
*/
// here we target last p and print all attributes on him
console.log(document.getElementsByTagName("p")[2].attributes);

let myP = document.getElementsByTagName("p")[2];
/* check a particular attribute if he is existed and if he have empty value remove him,otherwise have value, change her to new value,
finally if attribute don't existed return Not Found */
if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}
// check if have any attribute return Has Attribute
if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}
// check div if have any attribute return Has Attributes if not return Div Has No Attributes
if (document.getElementsByTagName("div")[7].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement1 = document.createElement("div"); // create div
let myAttr = document.createAttribute("data-custom"); // create attribute
let myText = document.createTextNode("Product One"); // create text
let myComment = document.createComment("This Is Div"); // create comment
/* hint: we use className(existed in html before that) here as is because this attribute can change him directly 
don't like data-custom(don't existed in html before that) need to method to make her */
myElement1.className = "product";
/* method to add attribute and this method useful in case of make attribute doesn't exist before that for example data-custom as
we can't put this attribute directly and edit on her */
// myElement1.data-custom = "omar" // this isn't allowed, so here come the benefit of setAttributeNode 
// method to make attribute and here attribute don't have value and possible change this attribute if you want
myElement1.setAttributeNode(myAttr);
myElement1.setAttribute("data-test", "Testing"); // another method to make attribute and we use him previously
// hint: the order is important as append add his content in the end, so here will add comment,then text, then add the variable in the page
// Append Comment To Element
myElement1.appendChild(myComment);

// Append Text To Element and appendChild as text is considered as child inside the element
myElement1.appendChild(myText);

// Append Element To Body:put our element inside page and now will appear his text inside page and element will appear in html page in browser
document.body.appendChild(myElement1);

/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/
// to repeat this 10 times
for (let i = 1; i <= 10; i++) {
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title" +" "+[i]);
let myParagraphText = document.createTextNode("Product Description" +" "+ [i]);
  // Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);;
  
}

/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement2 = document.getElementsByTagName("div")[8];

console.log(myElement2);
console.log(myElement2.children); // return the children element only(don't text or comment) that inside the parent
console.log(myElement2.children[0]); // return first element inside the parent and we can do anything on him like innerhtml
console.log(myElement2.childNodes); // return what inside the parent whether element or text or comment and deal with the space as text
console.log(myElement2.childNodes[0]); // return first what inside the parent whether element or text or comment

console.log(myElement2.firstChild); // return first child regardless is he element or text or comment
console.log(myElement2.lastChild); // return last child regardless is he element or text or comment

console.log(myElement2.firstElementChild); // return first element only in the parent
console.log(myElement2.lastElementChild); // return last element only in the parent

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu: event to right click in mouse and show menu of right click and we can edit on this menu
  --- onmouseenter: event to as soon as hover on the element
  --- onmouseleave: event to as soon as leave hover on the element

  --- onload
  --- onscroll : every scroll to the page we can make action
  --- onresize : every make resize the page we can make action

  --- onfocus : when focus on a particular input, make action
  --- onblur : when leave focus on a particular input, make action
  --- onsubmit : when press submit on the button, make action for example see if data in inputs valid or not
  event is considered an action that is happened in the page
*/

let myBtn = document.getElementById("btn");

// another method by js to print in console clicked
/* myBtn.onclick = function () {
  console.log("Clicked")
}; */

myBtn.onmouseleave = function () {
  console.log("Clicked");
};
// every scroll print in console word of scroll
window.onscroll = function () {
  console.log("scroll")
}
// every resize print in console word of scroll
window.onresize = function () {
  console.log("Scroll");
};

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

// make validation condition to inputs to do submit to them 
document.forms[3].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[3].onclick = function (event) {
  console.log(event);
  // preventDefault prevent behavior of event(here we prevent onclick event)
  event.preventDefault();
};

/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");
// focus on a particular element as soon as open the page
window.onload = function () {
  two.focus();
};
// as soon as leave a particular input make click on link(here leave input that stored in variable called one)
one.onblur = function () {
  document.links[4].click();
};

/*
  DOM [Class List]
  - classList
  --- length
  --- contains: check if a particular class is existed in the element or not (receive one string only)
  --- item(index): take index and return className that have this index
  --- add: add classes (we can add more than one class)
  --- remove:remove classes (we can remove more than one class) and if we put class don't exist in the element, he will not deal with him
  like he don't see him
  --- toggle: if the class that you put is existed in the element, will remove him and if this class don't exist, will add him
  and receive one string only
*/

let element = document.getElementById("my-div1");

console.log(element.classList); // all classes in element
console.log(typeof element.classList); // object
console.log(element.classList.contains("osama")); // false
console.log(element.classList.contains("show")); //true
console.log(element.classList.item("3")); // test
//as soon as click on the element add two classes called add-one and add-two
element.onclick = function () {
  element.classList.add("add-one", "add-two");
}
// as soon as click on the element remove classes called one and two
element.onclick = function () {
  element.classList.remove("one", "two")
}
element.onclick = function () {
  element.classList.toggle("show");
};

/* DOM [CSS] 
- style
- cssText
- removeProperty(propertyName) [Inline, Stylesheet]
- setProperty(propertyName, value, priority)
priority: means if we want to put important to make this property overwrite on any another property is same this property    
*/

let element1 = document.getElementById("my-div2");
//inline style
element1.style.color = "red";
element1.style.fontWeight = "bold";

// another inline style(here do overwrite on formats that is before him)
element1.style.cssText = "color:green; opacity:0.9; font-weight:bold";

//method to remove property from inline style and here we make remove to color property from inline style
element1.style.removeProperty("color")
// method to set property as inline style
element1.style.setProperty("font-size","40px","important")
//method to remove property from css file
//here we enter css file then rules means class in css file that have formats then style and finally remove a particular property
// here we enter our css file then choose div in css file and remove line-height from him 
document.styleSheets[0].rules[0].style.removeProperty("line-height");
// setProperty with css file and setProperty here have same values that setProperty that belong to inline style have
document.styleSheets[0].rules[0].style.setProperty("background-color", "#ccc", "important");
console.log(document.styleSheets[0].rules);
/*
  DOM [Deal With Elements]
  - before [Element || String] : put text or element before target element
  - after [Element || String] : put text or element after target element
  - append [Element || String] : put text or element in the end inside our element
  - prepend [Element || String] : put text or element in the start inside our element
  - remove : remove the element completely from the page
*/

let element2 = document.getElementById("my-div3");
let createdP = document.createElement("p");
element2.before("Hello From Js") // here we put text before our element
element2.after("Hello From js") // here we put text after our element
element2.before(createdP); // put p before our element(div)
element2.after(createdP); // pu p after our element(div)
element2.append("Hello From js") // put this text in the end, inside our element(div) 
element2.prepend("Hello From js") // put this text in the start, inside our element(div)
element2.append(createdP);
element2.prepend(createdP);
// element2.remove();

/*
  DOM [Traversing]
  - nextSibling: return after which our element whether element or text or comment
  - previousSibling : return before which our element whether element or text or comment
  - nextElementSibling: return element (only and don't text or comment) after which our element 
  - previousElementSibling : return element (only and don't text or comment) before which our element
  - parentElement: return the parent element that our element belong to him
*/

let span = document.querySelector(".two1");

console.log(span.nextSibling); // return <!-- comment--> as after our element
console.log(span.nextElementSibling) // return span element that have class called three as this element after our element
console.log(span.previousElementSibling) // return span element that have class called one as this element before our element
console.log(span.previousSibling); //return <!-- comment--> as before our element
console.log(span.parentElement); // return div that have id= my-div4 as this div is considered a parent for our element

span.onclick = () => {
  span.parentElement.remove();
}

/*
  DOM [Cloning]
  - cloneNode(Deep): take a copy form element or text and put her any another place with keep the element in her place just take a copy
  add to my element cloneNode have true or false and default is false 
  false means take copy from this element with her attribute and exclude what inside this element whether elements or text or comment 
  true takes element and whole what inside the element 
*/
// here as soon as put cloneNode, this make variable myP1 is the element that you copy
let myP1 = document.getElementById("my-p1").cloneNode(true);
let myDiv = document.getElementById("my-div5");
// here we change id of copy element from id of main element as id shouldn't be repeated
myP1.id = `${myP1.id}-clone`; // here copy element became have id called my-p1-clone

myDiv.appendChild(myP1);

/*
  DOM [Add Event Listener]
  - addEventListener: add event on the element and make more than one event on the element without overwrite
  addEventListener have two parameter first the event and second the function
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP2 = document.getElementById("my-p2");

//here will make overwrite on first event with second event,so here come benefit from addEventListener
// myP2.onclick = one1;
// myP2.onclick = two2;  

function one1() {
  console.log("Message From OnClick 1");
}
function two1() {
  console.log("Message From OnClick 2");
}

// window.onload = "Osama";

//here make event click print message 
myP2.addEventListener("click", function () {
  console.log("Message From OnClick 1 Event");
});

myP2.addEventListener("click", one1);
myP2.addEventListener("click", two1);

// myP2.addEventListener("click", "String"); // Error as he want object

//here when click make copy element and add className to him called clone
myP2.onclick = function () {
  let newP = myP2.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};
/* with normal method use event click on the element we will create him by event click from another element this will make error 
as the compiler considered this element don't exist, so here we should use addEventListener as she enabled us add event on element 
isn't existed yet */
// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };
/* parameter e inside function means event that you put in addEventListener for a particular element and target is element 
that event happened on him, here we make condition if the element that we click on him have className called clone, 
this will print iam Clone in console */
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object and console
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

window.document.title = "Hello JS";

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
  alert:is one of disadvantages is prevent any thing after him until he disappear,so we make like him with html and css,but don't have
  these are disadvantages
  confirm: return boolean value
  prompt: take message that appear to user and default message appear inside the place that user write her data
*/
// in global scope there is no different between write window.alert or alert or this.alert
// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);
// method to depend on the boolean value of confirm
// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }
//here appear pop window inside her message Good Day To You and place that user will write inside him, have message write Day With 3 Character
// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

// console.log(promptMsg);

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params): after period of time we can call function
  first parameter function then second is time that be taken to call this function
  and third parameter is considered the argument(values) that you pass to function to enable him and we can add more than one of arguments
  hint: time here with milliseconds 
  - clearTimeout(Identifier): stop setTimeout means if we use him in a particular moment, this will stop setTimeout
  and have one parameter is handler means setTimeout that you want to stop him
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }
// setTimeout(sayMsg, 3000);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);


let btn = document.querySelector(".stop");
function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}
let counter = setTimeout(sayMsg, 3000, "Osama", 38);
// console.log(counter) // here will print 1
// here we will stop work of setTimeout, if we click on the button
btn.onclick = function () {
  clearTimeout(counter); // here counter is a variable that store our setTimeout and we will stop him in case of click on button
};


/*
  BOM [Browser Object Model]
  - setInterval(Function, Milliseconds, Additional Params): he like setTimeout, but execute code every a period of time that you put on him  
  - clearInterval(Identifier): like clearTimeout stop setInterval
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }
// setInterval(sayMsg, 1000);


// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }
// setInterval(sayMsg, 1000, "Osama", 38);


let div = document.querySelector(".set-time");
// here we make countdown to the number inside the div and stop the counter when reach to 0
function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter1);
  }
}
let counter1 = setInterval(countDown, 1000);

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host : return website name and his port
  and hostname :return website name only
  with location hostname we can change hostname only and still the rest link as is 
  --- hash : if the website or anything you put for him hash, this property return him like #sec02
  when change href to div that have id sec02 and use hash, this hash will return #sec02
  --- protocol: http or https and we can change them 
  --- reload(): make reload to the page
  --- replace(): change url of our page to another page, but remove our page from history when turn to target page
  so replace change url of a particular page and remove her from history and put inside the replace a new url that you want 
  to go to another page
  --- assign() : like replace, but don't remove page from history that you exit form him
*/

console.log(location);
console.log(location.href); // print href of page

// location.href = "https://google.com"; // here we turn our page to google page as soon as open our page
// here if use hash, will return #sec02
// location.href = "/#sec02"; // here we turn our page to the element that have id = "sec02"
// here turn our page to a particular section in another website
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference"; 

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close(): close the window that be opened by window.open
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]
url in window.open is possible image or link or anything have url and name is identifier to window that you open only then target
is self to open window in same your page or blank in a new page and default value is blank then some features to add to your window that you 
will open then history replace if you want this window replace our page in history or not 

  Search
  - Window.Open Window Features
*/

// some examples to open window after period of time
// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);
// here some features width and height to window that you open and determine her place in your page with left and top
// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
// }, 2000);

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length: number of pages in our history including the page that we inside him now
  --- Methods
  ------ back(): go with us where before our page in history
  ------ forward(): go with us next page in history from our page
  ------ go(Delta) => Position In History => negative relate to back means go(-2): back two step to what inside history
  and positive to forward

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

/*
  BOM [Browser Object Model]
  - stop():stop loading of page at a particular moment
  - print(): to print the page
  - focus(): focus on a particular window
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  scroll and scrollTo are the same but there is one don't supported in a particular browser and the another is same as 
  x is horizontal scroll and y vertical scroll and we can write our values inside by bracket and comma to separate or put all inside 
  carly braces and scroll and scrollTo to make scroll to a particular coordinates
  - scrollBy(x, y || Options): same parameter in scroll and scrollTo ,but here don't see coordinates, he make scroll with values that he take
  in every time you call him and options there are in all methods of scroll and options mean behavior that you want to scroll
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
// myNewWindow.focus() // to focus on the this window

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth" // here we make the scroll is a smooth
// });

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset] : return the scroll x that you did
  - scrollY [Alias => PageYOffset] : return the scroll y that you did
  PageXOffset and PageYOffset like scrollX and scrollY, but to old browser 
*/

// console.log(window.scrollX === window.pageXOffset);

let btn1 = document.querySelector("#scroll");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn1.style.display = "block";
  } else {
    btn1.style.display = "none";
  }
};

btn1.onclick = function () {
  window.scrollTo({
    left: 0, // to confirm if there is scroll x
    top: 0,
    behavior: "smooth",
  });
};

/*
  BOM [Browser Object Model]
  Local Storage: if modify any thing in the page local storage enable us to save these modification even if close the page and open again
  hint: we can deal with localStorage like objects exactly
  - setItem: first parameter is property and second one the value for this property 
  - getItem: one parameter is key(property)
  - removeItem: one parameter is key(property)
  - clear:remove all what inside the localStorage
  - key : return the property inside localStorage by putting index inside the key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
// methods to add item inside local storage and there are two methods like object 
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// // Get : to bring the property from the localStorage
// // methods to get item from localStorage and there are two methods like object
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// // Remove One
// // window.localStorage.removeItem("color");

// // Remove All
// // window.localStorage.clear();

// // Get Key
// console.log(window.localStorage.key(0)); // return fontSize  

// // Set Color In Page : here we make the whole page have backgroundColor: red and if we close the page, this will not be removed 
// // document.body.style.backgroundColor = window.localStorage.getItem("color");  

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll(".list li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

/*
  BOM [Browser Object Model]
  Session Storage:like local storage,but save data when reload or when we inside page as soon as close the page,the all saved data will remove
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
  New Session: means remove data from Session Storage
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");
// to keep the data inside the input even if make reload to page  
let inputSave =document.querySelector(".name")
inputSave.onblur = function () {
  // console.log(this.value);
  window.sessionStorage.setItem("input-name", this.value);
};
if (window.sessionStorage.getItem("input-name")) {
  inputSave.value = window.sessionStorage.getItem("input-name");
} 

/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a1 = 1;
let b1 = 2;
let c1 = 3;
let d1 = 4;

let myFriends10 = ["Ahmed", "Sayed", "Ali", "Maysa"];
/* let [a1,b1,c1,d1] = myFriends10; // here we put elements of array in a new variables means we extract elements of array in variables
we can extract some elements of array don't all if we want and if we put variable more than elements of array to extract these elements, 
the variable that overload will return undefined, so we can put default value for variables that extract elements of array,
if don't extract elements from the array will return default value */
[a1 = "A", b1, c1, d1, e = "Osama"] = myFriends10; // here variable e is overload so will return her default value 

console.log(a1); // Ahmed
console.log(b1); // Sayed
console.log(c1); // Ail
console.log(d1); // Maysa
console.log(e); // here return default value as elements of array is extracted completely

// console.log(myFriends10[4]);

// here we skip first and third element from the array, so any element we want to skip, we will not put any variable in her place, just comma 
let [, y, , z] = myFriends10;

console.log(y); // Sayed
console.log(z); // Maysa

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends11 = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends11[3][2][1]); // Gamal

// let [, , , [a2, , [, b2]]] = myFriends11;
// make square bracket to enter to nested array
let [, , , [a2, , [, b2]]] = myFriends11;

console.log(a2); // Shady
console.log(b2); // Gamal

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// old method to swap variable
// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

// swap by destructuring
[book, video] = [video, book];

console.log(book);
console.log(video);

/*
  Destructuring
  - Destructuring Object
*/

const user10 = {
  theName2: "Osama",
  theAge2: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// console.log(user10.theName2);
// console.log(user10.theAge2);
// console.log(user10.theTitle);
// console.log(user10.theCountry);

// let theName2 = user10.theName2;
// let theAge2 = user10.theAge2;
// let theTitle = user10.theTitle;
// let theCountry = user10.theCountry;

// console.log(theName2);
// console.log(theAge2);
// console.log(theTitle);
// console.log(theCountry);

// if we declare the variable before and destruct object inside them we should put whole statement inside brackets
// ({ theName2, theAge2, theTitle, theCountry } = user10);
/* here we declare variable and destruct object inside them and must names of variables like names of properties object, so we can skip
a particular property by don't put his name during destructuring */
const { theName2, theAge2, theCountry } = user10; // here we skip theTitle by don't put him

console.log(theName2);
console.log(theAge2);
console.log(theCountry);

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user11 = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry1: "Egypt",
  skills: {
    html: 70,
    css: 80,
  },
};
/* here we change the property name during destructuring, so theName now became n and theAge is b and during calling to every one 
became n and b and if the variable don't exist like array will return undefined, so we put default value and change his name during calling
and skills is nested object and if we want one property inside nested object we put this property only */
const {theName: n, theAge: a4, theCountry1, theColor: co = "Red", skills: { html: h, css },} = user11;

console.log(n);
console.log(a4);
console.log(theCountry1);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

// method to destructuring the nested object only
const { html: skillOne, css: skillTwo } = user11.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

/*
  Destructuring
  - Destructuring Function Parameters
*/

const user9 = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user9);

// here we use properties of object inside the function
// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

// use destructuring with function to use properties of object
function showDetails({ theName: n, theAge: a, skills: { css: c } } = user9) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}

/*
  Destructuring
  - Destructuring Mixed Content
*/

const user12 = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const { theName: n1, theAge: a3, skills: [, , three], addresses: { egypt: e1 }, } = user12;

console.log(`Your Name Is: ${n1}`);
console.log(`Your Age Is: ${a3}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e1}`);

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size: like length in array

  Methods:
  - add
  - delete
  - clear: delete all elements from the set
  - has: check if target element is existed or not inside the set
*/

let myData = [1, 1, 1, 2, 3, "A"];
// we can put variable that have array or put elements of array directly or use method add
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();
// here declare new set and then add values inside him and we can add values on more than on line 
myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`); // true as he make a is capital and, then check 

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]); // undefined as set don't see index

// myUniqueData.delete(2); // remove value of 2 from the set
console.log(myUniqueData.delete(2)); // return true as delete operation enabled

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected(clean them).
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage of weakset: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

/* Values + Keys [Alias For Values] and by values and keys we can use next to get next value and we can get state of done from next.
done always false until reach to last element in the set */
let iterator = mySet.keys();

console.log(iterator.next().value); // first element is 1 as here we get value from the next 
console.log(iterator.next().value); // second element is 2
console.log(iterator.next().value); // third element is 3
console.log(iterator.next().value); // fourth element is 4
console.log(iterator.next()); // here value is undefined and done is true as he finish all elements in the set

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

/*normal object have default keys, so we can remove this keys by use object.create(null) and Map also don't have default keys */
let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);
// here object will deal with number 10 like string 10
let myNewObject = {
  10: "Number",
  "10": "String",
};

console.log(myNewObject[10]);
// we can add elements of map inside here directly or after him
let myNewMap = new Map();
// here in set allow use to add properties to map by adding key and value and map will not deal with number 10 like string 10 
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean"); // add boolean value inside map
myNewMap.set({a: 1, b: 2}, "Object"); // add object inside map
myNewMap.set(function doSomething() {}, "Function"); // add function inside map
// get ask for key that we want to print
console.log(myNewMap.get(10)); // Number
console.log(myNewMap.get("10")); // String

console.log("####");

console.log(myNewObject); // will return last value of 10 that have string word as make overwrite on number 10 as he deal with them as same
console.log(myNewMap); // here return number 10 and string 10 with their values

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/
// another method to add elements inside map by putting square brackets and add key and his value inside another square value
let myMap1 = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap1.set(10, "Number");
// myMap1.set("Name", "String");

console.log(myMap1);

console.log(myMap1.get(10));
console.log(myMap1.get("Name"));
console.log(myMap1.get(false)); // here he deal with false as key don't as boolean value

console.log("####");

console.log(myMap1.has("Name")); // true as has check if key is existed inside the map or not

console.log("####");

console.log(myMap1.size);

console.log(myMap1.delete("Name")); // return true means he really deleted this key

console.log(myMap1.size);

myMap1.clear();

console.log(myMap1.size);

/*
  - Map vs WeakMap : same as set and weakset
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap2 = new Map();

myMap2.set(mapUser, "Object Value");

mapUser = null; // Override The Reference and remain inside the map

console.log(myMap2);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap); // here will remove the object inside him as we removed object reference , so it's benefit from the weakmap

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  hint: Map function here refer to higher order function will is executed on every element in array
  This: it's a value that use as this when executing the mapFunc
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));
// console.log(Array.from(1234)) // it's not iterable, so if we want this iterable is number, we will use Map Function 

let myArray = [1, 1, 1, 2, 3, 4];

// use set to return unique elements and then turn him to array again
// let mySet1 = new Set(myArray);

// console.log(Array.from(mySet1));

console.log([...new Set(myArray)]); // Future

// function to turn any argument, we pass to her to array and this array inside him these arguments
function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArray1 = [10, 20, 30, 40, 50, "A", "B"];

// default value to the end is whole array, but he leave last of three elements as this will exceed from length of array, so he skip them
// myArray1.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray1.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray1.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray1.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArray1.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray1);

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
  some method : check if a particular condition is existed in elements of array or not and return true or false
  hint: if some method found the condition is true, he will stop
*/

let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check1 = nums1.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let check1 = nums1.some(function (e) {
  return e > this; // this here return to myNumber that we put her inside some method
}, myNumber);

// let check1 = nums1.some((e) => e > 5);

console.log(check1);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val; // check if a particular value is existed in the array or not
  });
}

console.log(checkValues(nums1, 20)); // false as this number don't exist in the array
console.log(checkValues(nums1, 5)); // true as this number exist in the array

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums1.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max; // see if element is existed in a particular range or not
}, range);

console.log(checkNumberInRange);

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  -- every like some, but every means all elements should accept the condition to return true otherwise return false, so if one elements from
  all elements don't achieve the condition that you put in every method, this will return false
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers);

let check2 = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check2); // return true as all elements greater than 15

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
  spread operator is his idea like that rest parameter in function
*/

// Spread With String => Expand String

console.log("Osama"); // Osama
console.log(..."Osama"); // O s a m a
console.log([..."Osama"]); // turn osama to array and every character is an element inside this array

// Concatenate Arrays

let myArray2 = [1, 2, 3];
let myArray3 = [4, 5, 6];
// hint: should put square bracket in start and in the end to turn this variable to array after use spread operator 
let allArrays = [...myArray2, ...myArray3]; // method to concatenate arrays with us by spread operator
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray2];
console.log(copiedArray);

// Push Inside Array

let allFriends1 = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

/* method to put elements belong to array inside the array, if we put array without spread operator, this will return him as array 
inside array, but we extract elements of array inside another array */
allFriends1.push(...thisYearFriends);

console.log(allFriends1);

// Use With Math Object

let myNums1 = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums1)); // if we put array only this will return NaN as spread operator extract array as elements

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 }); // extract elements that inside objects and add new element 

/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
  regular expression : provide the pattern and test a particular statment if he pass this pattern, he will valid otherwise invalid
*/

let str1 = '10 20 100 1000 5000';
let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

let invalidEmail = 'Osama@@@gmail....com';
let validEmail = 'o@nn.sa';

let ip = '192.168.2.1'; // IPv4

let url = 'elzero.org';
let url1 = 'elzero.org/';
let url2 = 'http://elzero.org/';
let url3 = 'http://www.elzero.org/';
let url4 = 'https://.elzero.org/';
let url5 = 'https://www.elzero.org/';
let url6 = 'https://www.elzero.org/?facebookid=asdasdasd';

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)") // another method to write regular expression

  Modifiers => Flags
  i => case-insensitive :small character like capital one
  g => global
  m => Multilines : to match more than one line if every line valid to pattern

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero"; // input
// here i means case-insensitive and g here will return all possible result
let regex = /elzero/ig; // this is expression that we match with the string 

/* here we see word of elzero inside myString and here will return details about word and myString(input) like index of matched variable
and input that we match variable with him and here return two words of elzero regardless character capital or small and 
put g in matched variable make return all possible results not details about variable and his input and collect these results in array */
console.log(myString.match(regex));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig; 
/* here he return org as you put three values and he return first value from them that will meet him and he put g means all values
will return */
console.log(tld.match(tldRe));

let nums2 = "12345678910";
let numsRe = /[0-2]/g; // this is range and we put g, so he return all values within range that existed inside our string(nums2)
console.log(nums2.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g; // ^ means every thing except this range, so here will return all values except within 0 to 2
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g; // here filter all numbers and return all special character
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g; // here we return Os8Os as pattern that we put 
console.log(practice.match(practiceRe));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString1 = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g; // return all a, b and c
let NotaAndcAnde = /[^ace]/g; // return all except a,b and c 
let lettersCapsAndSmall = /[a-zA-Z]/g; // all small and captial letters
let numsAndSpecials = /[^a-zA-Z]/g; // all except small and captial letters
let specials = /[^a-zA-Z0-9]/g; // here special character only as we put numbers and letters, but with ^
// hint if we put ^ twice , he will deal with second one as character only 
console.log(myString1.match(atozSmall));
console.log(myString1.match(NotAtozSmall));
console.log(myString1.match(atozCapital));
console.log(myString1.match(NotAtozCapital));
console.log(myString1.match(aAndcAnde));
console.log(myString1.match(NotaAndcAnde));
console.log(myString1.match(lettersCapsAndSmall));
console.log(myString1.match(numsAndSpecials));
console.log(myString1.match(specials));

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
// let test = /\w@/g; here target charcter or number and after him @
// hint if we put /\w@\w/g; target character or number then @ then character or number also
let valid = /\w@\w.(com|net)/g; // here character or number, then @, then character or number, then ., then com or net 
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input): to check if a particular pattern is existed inside input or not
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// hint: if we put in regular expression spam only, this will return spam from any string have spam in any place inside this string
let re = /(\bspam|spam\b)/ig; // here we return spam if spam is existed in the beginning or in the end only
console.log(names.match(re));

console.log(re.test(names)); // true as spam that inside variable re is existed inside the variable names
console.log(/(\bspam|spam\b)/ig.test("Osama")); // false as osama don't have spam in the start or the end
console.log(/(\bspam|spam\b)/ig.test("1Spam")); // true as spam in the start
console.log(/(\bspam|spam\b)/ig.test("Spam1")); // true as spam in the end

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+/g; // here means one from \w or more 
// let mailsRe = /\w+@\w+.(com|net)/ig; //return pattern with com or net only
let mailsRe = /\w+@\w+.\w+/ig; // here return pattern with any top level domain(com, net ,org, etc..) 
console.log(mails.match(mailsRe));

let nums3 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe1 = /0\d*0/ig; // d* means there are one or more digits or there isn't digits
console.log(nums3.match(numsRe1));

let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?)/ig; // means http or https as s is possible existed or not by using ? 
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig; // here we use \ to make compiler recognize on / as character 
console.log(urls.match(urlsRe));

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $  => End With Something 
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString2 = "We Love Programming";
let names1 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString2)); // true as string ends with ing
console.log(/^we/ig.test(myString2)); // true as string starts with we
console.log(/lz$/ig.test(names1)); // true as string ends with lz 
console.log(/^\d/ig.test(names1)); // true as this string starts with digit

console.log(names1.match(/\d\w{5}(?=Z)/ig)); // return 1Osama, 2Ahmed, 5Gamal as these follwed by Z after 5 character
console.log(names1.match(/\d\w{8}(?!Z)/ig)); // return 3Mohamed as this string not followed by Z

/*
  Regular Expression

  - replace : replace one time only
  - replaceAll 
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript")); // replace one @ to javaScript
console.log(txt.replaceAll("@", "JavaScript")); // replace all @ to javaScript
let re1 = /@/ig;
console.log(txt.replaceAll(re1, "JavaScript")); // with regular expression make replace
console.log(txt.replaceAll(/@/ig, "JavaScript")); // use regular expression directly

/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false; // means don't make submit to data (event will not work)
  }
  return true; // means make submit to data (event will work)
}

/*  
  Constructor Function : with him we can create object inside her what we need completely
  OOP : it's make a standarazation(pattern) to use him to make somethings have same pattern and can modify on this pattern in 
  a particular thing
*/
// Constructor Function and best practice write first letter with capital letter 
function User(id, username, salary) {
  // hint: this is object that you create from constructor function
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
  /* hint: if we created object without OOP, we would go to every object and make a particular task that we want in them, 
  but by using OOP we access on all of them from constructor function for example we add 1000 on salary for all objects that we
  create by constractor function */
}
/* here way to create object from constructor function by use key word new followed by name of constructor function
and ask arguments of contructor function */
let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);

console.log(userOne.i); // here 100 as property called i and equal id that we pass to function
console.log(userOne.u); // Elzero 
console.log(userOne.s); // 6000 as we add 1000 to salary inside constructor function

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

/*
  Constructor Function
  - New Syntax
*/

class User1 {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne1 = new User1(100, "Elzero", 5000);

console.log(userOne1.i);
console.log(userOne1.u);
console.log(userOne1.s);

console.log(userOne1 instanceof User1); /* true as this use to know object is created with which one from classes(constructor function)
and we can use him in if condition */
console.log(userOne1.constructor === User1); // like instancesof 

/*
  Constructor Function
  - Deal With Properties And Methods
*/

class User2 {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    // deal with him like functions like use short condition or logical or
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    // This is a Property
    this.msg = function () {
      // use this.u instead of username to return Unknown if username is null, so always we write property not argument
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne2 = new User2(100, "Elzero", 5000);
let userTwo1 = new User2(101, "", 6000);

console.log(userOne2.u);
console.log(userOne2.s);
console.log(userOne2.msg());
console.log(userOne2.writeMsg());

console.log(userTwo1.u);
console.log(userTwo1.s);
console.log(userTwo1.msg); // Native Code
console.log(userTwo1.writeMsg); // Native Code

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User3 {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  // method to update userName
  updateName(newName) {
    this.u = newName;
  }
}

let userOne3 = new User3(100, "Elzero", 5000);

console.log(userOne3.u); // Elzero
userOne3.updateName("Osama");
console.log(userOne3.u); // Osama

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne); // string
console.log(typeof strTwo); // object as we use built in constructor (new string)

console.log(strOne instanceof String); // false as this use string constructor, but by different way
console.log(strTwo instanceof String); // true

console.log(strOne.constructor === String); // true as he use string constructor
console.log(strTwo.constructor === String); // true
// number like string is possible use number constructor
let numOne = 123
let numTwo = new Number(123)

console.log(typeof numOne)
console.log(typeof numTwo)

console.log(numOne instanceof Number); // false
console.log(numTwo instanceof Number); // true

console.log(numOne.constructor === Number); // true 
console.log(numOne.constructor === Number); // true 

/*
  Class
  - Static Properties And Methods
*/

class User4 {
  // Static Property : belong to class itself and static property don't related with objects that are created
  // hint if we don't put static, this will not static property and access on property will be by object not class
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User4.count++; // with every object is created count will increase 1, so by this way we know numbers of object was created
  }

  // Static Methods : same as static property
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne4 = new User4(100, "Elzero", 5000);
let userTwo3 = new User4(101, "Ahmed", 5000);
let userThree1 = new User4(102, "Sayed", 5000);

console.log(userOne4.u);
console.log(userTwo3.u);
console.log(userOne4.count); // undefined if we use count without static, he will return 0 
console.log(User4.count); // 0 if we use count without static, he will return undefined
console.log(User4.sayHello());
console.log(User4.countMembers());

/*
  Class
  - Inheritance : use him in case of some classes have same properties and methods, but also have some properties and method is different,
  so we can inheritance which is the same to avoid repeate yourself and if we want change some thing, we change this thing from one place
  only and will return to all by inheritance
*/

// Parent Class
class User5 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class
/* inheritance is enabled by write extends then class name that we inheritance from him */ 
class Admin extends User5 {
  constructor(id, username, permissions) {
    /* here write super and inside her properties that we want inherite from the parent class(target class: User5) and methods is 
    inherited directly */
    super(id, username); 
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne5 = new User5(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne5.u);
console.log(userOne5.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
  hint: all elements in class can see the private property and make anything in him
  - we can make private method like property
*/

class User6 {
  // Private Property : put here as we should declare her firstly
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    // private property put # before the property
    this.#e = eSalary;
  }
  // here we acces on private property and make some edition and exit output without appear private property and complexity that inside class
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne6 = new User6(100, "Elzero", "5000 Gneh");

console.log(userOne6.u);
console.log(userOne6.getSalary() * 0.3);

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
    in the another hand prototype is created as soon as make function and store all features of this function inside this prototype
    and when create class and as soon as create object from this class, the object will access on all features by prototype of class 
    hint: prototype is an object
*/

class User7 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne7 = new User7(100, "Elzero");
console.log(userOne7.u);

console.log(User7.prototype);

let strOne1 = "Elzero";

console.log(String.prototype);

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/
// hint : constructor of Class is an object (means class inherite from prototype of object)
class User8 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}
/* hint: userOne is an object, so he can inherite from the Class User8 and from built in constructor object as class itself inherited 
from built in constructor object(class is an object) and all of that is enabled by prototype of parent that is inherited from him */
let userOne8 = new User8(100, "Elzero");
console.log(userOne8.u);
console.log(User8.prototype);
console.log(userOne8); // inherite from prototype of User8
// here we add for class User8 a method(function) called sayWelcome by prototype
User8.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};
// here we add for built in constructor(object) property called love and have value is Elzero Web School
Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString3 = "Elzero";
console.log(myString3.addDotBeforeAndAfter()) // .Elzero.

/*
  Object Meta Data And Descriptor
  - writable : enable us to override on value of property or not(edit on value of property later or not)
  - enumerable : exit property from looping on object
  - configurable [Cannot Delete Or Reconfigure]: if she false we cann't delete property and cannot redefine property another time,but
  if we repeate property with same things, this will not return error as redefine. as soon as redefine the property and change
  anything, this will return error as redefine
  hint: default value for elements of descriptor is false and these elements by them we can full control on property 
*/

const myObject1 = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject1, "c", {
  writable: false, // here we cann't change value of c later
  enumerable: true,
  configurable: false, // don't allow delete property or redefine this property
  value: 3,
});
// method to add or edit on property in a particular object
// defineProperty have three parameter: first target object ,then key(property name) ,then descriptor
// Object.defineProperty(myObject1, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, 
//   value: 200, <= make error as we redefine the property (configurable is false in the above object)
// });

myObject1.c = 100; // this not work as writable false
// here we delete propety c by using delete operator, but as configurable is false, so delete operation don't occur
console.log(delete myObject1.c); // false as configurable is false means property c don't be deleted
// making looping on elements of object and here return c and his index as enumerable is a true
for (let prop in myObject1) {
  // prop is properties of object
  console.log(prop, myObject1[prop]);
}

console.log(myObject1);

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties: like defineProperty, but add or edit more than one property
  - Check Descriptors
  hint: all properties that inside object(with declaration of object) are have default value is true to elements of descriptor
*/

const myObject2 = {
  a: 1,
  b: 2,
};
// add or edit more than one property in object
Object.defineProperties(myObject2, {
  // first property and his descriptor
  c: {
    configurable: true,
    value: 3,
  },
  // second property and his descriptor
  d: {
    configurable: true,
    value: 4,
  },
  // third property and his descriptor
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject2);
// check on descriptor of one property
console.log(Object.getOwnPropertyDescriptor(myObject2, "d"));
// check on descriptor of all properties in object
console.log(Object.getOwnPropertyDescriptors(myObject2));

/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date(); // 

console.log(dateNow); // information about current time

console.log(Date.now()); // time now from 1970 with milliseconds // 1000 Mill = 1 Second 

let seconds = Date.now() / 1000; // Number Of Seconds from 1970 to now
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear() => return current year
  - getMonth() => Zero Based and this return month by index and include zero
  - getDay() => Day Of The Week and return index of day including zero, sunday in the first day means have index 0
  - getHours() => return hour
  - getMinutes() => return minutes
  - getSeconds() => return seconds
*/

let dateNow1 = new Date(); // return current date and time
let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow1 - birthday; // to return difference from date now to a particular date

console.log(dateDiff);  
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow1);
console.log(dateNow1.getTime()); // return time with milliseconds from Epoch time to now
console.log(dateNow1.getDate());
console.log(dateNow1.getFullYear());
console.log(dateNow1.getMonth());
console.log(dateNow1.getDay());
console.log(dateNow1.getHours());
console.log(dateNow1.getMinutes());
console.log(dateNow1.getSeconds());

/*
  Date And Time
  - setTime(Milliseconds(from the Epoch time))
  - setDate() => Day Of The Month [Negative And Positive] : positive in future and negative in the past
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31]) 
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
  hint: any increase about number of days or months this will go to the future and reduce all to negative this will back to the past
*/

let dateNow2 = new Date();
console.log(dateNow2);

console.log("#".repeat(66));

dateNow2.setTime(0);
console.log(dateNow2); // return time of epoch time means from 1970 as setTime have value 0

console.log("#".repeat(66));

dateNow2.setTime(10000); // after 10 second from epoch time
console.log(dateNow2);

console.log("#".repeat(66));

// return 4 days from the month that after month now or return 5 days if month now have 30 days only and negative is back the date
dateNow2.setDate(35); 
console.log(dateNow2);

// 13 means 2021 after 2 months(februray) as we exceed from 11, all of this also like days
dateNow2.setFullYear(2020, 13);
console.log(dateNow2);

dateNow2.setMonth(15);
console.log(dateNow2);

/*
  Date And Time

  new Date(timestamp) // inside new Date we can write miiliseconds to determine the time
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982" method to write date inside new date 
  - "10/25/1982" method to write date inside new date
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982")); // return this time as milliseconds

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000); // return date of this milliseconds
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);
// hint: here 9 is octobers as this index including zero
let date7 = new Date(1982, 9, 25, 2, 10, 0); // date with hours, minutes, seconds and milliseconds
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);
// here Z is determine time zone so here will add 2 hours from the GMT and if we remove Z will return GMT time
let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/
// tracking a particular operation and see how much time is she took
// Start Time
// let start = new Date();

// Operation
// for (let i = 0; i < 100000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
  -Generators function have * in the end of function word and generator operation is enabled by key word yield
*/

function* generateNumbers() {
  yield 1;
  // don't enable console.log until enter to second yield as we take data from yield one and stop until enter to second yield
  console.log("Hello After Yield 1"); 
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);
// next is an object have value and done
console.log(generator.next()); // value 1 from yield 1 and done is false as there are elements next(means loop don't reach to last element)
// here will execute console.log, then execute yield 2 as any thing after yield 2 don't execute untill reach to yield 3
console.log(generator.next()); 
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// making loop on all what inside the generator function 
for (let value of generateNumbers()) {
  console.log(value);// return values of generator function
}
/* don't making loop as we making next to all elements that inside generator function (means empty generator function from all yields)
and exit them with next object, so now variable that called generator that store generator function, don't have anything inside him now ,
but if we use name of generator function directly this will making loop regardless we make next from him by name of generator function or not
as we reuse generator function to make yield to data again */
for (let value of generator) {
  console.log(value);
}

/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  /* to making yield to generator function inside one another we should put * to yield all elements inside this generator function
  if we don't make this, he will return name of generator function only */
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6]; // if we not put * he will deal with whole array, don't elements that inside the array
}

let generator1 = generateAll();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
/* to stop operation of generator function, so anything after return will stop and including return itself and we can put value 
inside return to print her with return and done will be true and any next after return will have value undefined and done is true */
console.log(generator1.return("Z")); 
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

function* generateNumbers1() {
  // yield 1;
  // yield 2;
  // return "A"; // here will stop any thing after her(like that any after him is don't exist or have value undefined and done is true) 
  // yield 4;
  // yield 3;
  let index = 0;
  /* method to making yield to infinty in every time call generator function
  means generate yield in every time call generator function */
  while (true) {
    yield index++;
  }
}

let generator2 = generateNumbers1();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next()); 
console.log(generator2.next()); 

// here module lesson, so here we must go to module.html and module.js and app.js to know about module

/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/

/*
  JSON 
  - API Overview
  - Tools To Test API
  - Preview Github API
  API: is interface sharing to show what can you see to access on him and what cann't see in database that belong to a particular website
  like you want to make website show price of gold and currency, so to make this dynamic to change without enter by you, you resort
  to website provide you API show these price and take this data to your website and make format to her as you like
  there are puplic API and private API and private API have secret key to manage this API you should have secret key like youtube channel 
  have private API that be managed by honor of this channel and he can make a particular domain manage data of this API  
  another example: if you make website to person want to show last five twitt from his twitter account in his website, so twitter presents
  API to take these twitts and show them in a particular place
*/

/*
  JSON : is mainly a string when he reach to js
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation"); // should end as after which is enabled
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000); // here this will wait 3 seconds to run regardless any other operations
console.log("3");

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
  like document and there are programming language deal with Wep API like js and python
*/
// last thing will return as call stack wait all things finish, then leave browser to deal with Wep API methods in the end
setTimeout(() => {
  console.log("Web API");
}, 0); 

function one2() {
  console.log("One");
}
function two2() {
  one2();
  console.log("Two");
}
function three1() {
  two2();
  console.log("Three");
}

three1();

/*
LIFO principle
=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================
*/

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/
/* hint: console.log is wep API, but he synchronously write to browser(he don't use event loop, but asynchronous like setTimeout use 
event loop and wait) */
console.log("One");
setTimeout(() => {
  console.log("Three"); // will reutrn before another setTimeout as callback queue follow FIFO but all setTimeout will execute in the end
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
  console.log(myVar1); // it's valid as setTimeout go to wep API and will be executed in the end 
}, 0);

let myVar1 = 100;
myVar1 += 100;

/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

let req = new XMLHttpRequest();
console.log(req);

/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished(regardless have problem or not) And Response Is Ready
  - Status : to check if response is success or not by status code
  [200] Response Is Successful
  [404] Not Found
*/

let myRequest = new XMLHttpRequest();
/* open have three paramter request method like get and post, then url of API that we get data from him, then code is synchronous or asynchronous
and default is true(asynchronous),then username and passowrd if API is private */
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);
// onreadystatechange : it's event occurs in case of ready state change
myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest1 = new XMLHttpRequest();
// myResquest.open("GET,"Main.json") // here we can enter on our API(Main.json)
myRequest1.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest1.send();
myRequest1.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell : example like function make a task then inside him call another function to make another task, then inside
  him call another function etc... 

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test1");
p.addEventListener("click", makeItRed);

function iamACallback() {
  console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);
// example on callback hell
setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved(successful) State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success to promise Or Failure to promise] means at fulfil what will happen and at reject 
  also what will happen
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );
/* Promise accepts inside him function that make initialize to our promise and this function accepts two arguments , one to resolve(success)
and another to reject means if promise is achieved what we will return and reject if promise isn't achieved */
const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);
// here we make function outside and store him inside variable, then use this variable inside then method
let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);
// we can use then method alone or chain with the promsie 
myPromise.then(resolver, rejecter);
// we can use then method many times as we like to solve problem of callback hell 
myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`), // here we print value of resolve that inside the promise (Goog Connection Established)
  (rejectValue) => console.log(`Bad ${rejectValue}`) // here we print value of rejected that inside the promise (Bad Connection Falied)
);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came) means the promise isn't achieved

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromise1 = new Promise((resolveFunction, rejectFunction) => {
  let employees = [];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    // hint: we put Error to know us where this error in the code
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});
/* he we solve problem of callback hell and if resolve don't be achieved, reject will return his default value 
(Error("Number of Employees Is Not 4")) and if we make all then method with chain, this will return one Error only to reject,
don't three like numbers of then */
myPromise1
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  }) 
  // catch handle the rejected value by make his error as statment (normal code)
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done")); // this code will be achieved whether the promise success or failed

  /*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));

/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData); // return promise and his results
    return myData;
  })
  // we can pass to then method any name and use this name inside then method ,then we can change this name at another then method
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });

/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});
// return all resolved values from promises in array , but if one promise return reject value, the all method will return value of this promise
// hint if there are two promises have rejected value, the all method will return rejected value of first promise that she met
// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );
/* return array have number of promises like you put inside the allSettled method and return all details from these promises like result and
status(fulfiled or rejected) upon on value of these promises resolved or rejected */
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );
// he returns the first promise he meets whether he resolved or rejected promise
Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/
// ways to make behavior of promises
// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

async function getData1() {
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getData1());

getData1().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
  and we can use Await instead of then method
*/

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Iam The Good Promise");
    reject(Error("Iam The Bad Promise"));
  }, 3000); // to test the await as js don't execute anything until the await is executed
});

async function readData() {
  console.log("Before Promise");
  // myPromise2.then((resolvedValue) => console.log(resolvedValue));
  // console.log(await myPromise2); // here js wait result of promise , then complete after which the promise
  console.log(await myPromise2.catch((err) => err)); // here also js will wait result of promise, even if promise is rejected
  console.log("After Promise");
}

readData();

/*
  Async & Await With Try, Catch, Finally
*/

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
  }, 3000);
});

// async function readData() {
//   console.log("Before Promise");
//   try {
//   // inside try we put value or anything in case of our promise is achieved
//     console.log(await myPromise3);
//   } catch (reason) {
//   // inside catch we put value or anything in case of our promise isn't achieved and here js will wait and then execute after the catch like the try
//     console.log(`Reason: ${reason}`);
//   } finally {
//   // inside finally we put last value will print with promise whether prmoise is resolved or rejected
//     console.log("After Promise");
//   }
// }

// readData();

// "https://api.github.com/users/elzerowebschool/repos"

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
    console.log(await myData.json());
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();

/*
  The End
  - Other Information => Practice + Tutorials
  - Problem Solving
  - Search In Lessons
  - Advanced Books
*/










