/*
  Modules : is a programming unit execute a particular task like module deal with images or data base and etc...
  for example there is module execute some function on images as soon as import this module like resize image or put logo inside her
  so we for example import a particular function from this module to deal with image that inside our main file or import all function that
  inside the module
  - Import And Export
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}
/* export means this can be exported to another file and we can export by put export keyword at every thing we want export or collect them
inside carly braces and put before this keyword export */
export { a, arr, saySomething };

/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

let a1 = 10;
let arr1 = [1, 2, 3, 4];

function saySomething1() {
  return `Something`;
}
/* here put another name to exported function like when import function we can put another name for her and put this new name when import 
this function and named export is export function with his name */
export { a1 as myNumber, arr1, saySomething1 };
/* here default export and every module have one default export and we can call default export without her name and 
default export can be data, function or object etc... and default export can be anonymous(without name) or with name and inside file 
that we import default export for him we can put any name for default export and call him with this name, but default export should be alone 
when we call him */
export default function () {
  return `Hello`;
}