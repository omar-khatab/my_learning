// file js to test module 
/* file to import module in him by using keyword import and inside carly braces put what inside to import,
then put keyword from, then file that we export function from him 
and we can change name of imported function by use keyword as, then new name to this function */
import { a, arr, saySomething as s } from "./module.js";

console.log(a);
console.log(arr);
console.log(s());

// here we put default export(elzero) alone when we call him 
// import elzero, { myNumber, arr1, saySomething1 as s1 } from "./module.js";

// console.log(myNumber);
// console.log(arr1);
// console.log(s1());
// console.log(elzero());
// here to import all exported function and put name all for them 
import * as all from "./module.js";
// here return module inside him all exported function
console.log(all);
// here return a particular exported function from whole module
console.log(all.myNumber);
console.log(all.arr);