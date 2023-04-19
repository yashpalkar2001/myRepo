if (new Array())
    console.log("Message Display1");

if ("false")
    console.log("Message Display2");

if ("")
    console.log("Message Display3");

if ({})
    console.log("Message Display4");
// //output 
// 3rd if does not displayed

function hello(name, age) {
    console.log(name, age);
}
hello("yash", 21);
// console.log(hello("yash ", 21));

//shallow copy
const arr = [1, 10, 23, 53, 44, 75];
const arr2 = [...arr];
arr2.unshift(200);

console.log(arr);
console.log(arr2);

const change = [1, 10, { name: "yash", age: 21 }];

const change1 = structuredClone(change);

change1.name = "maulik";





console.log(change);

console.log(change1);


