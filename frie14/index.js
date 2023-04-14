//this point number 4
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//this is point number 5
let number1 = 10;

let number2 = 20;

let sum = number1 + number2;




while (sum <= 50) {

    number1 += 1;

    number2 += 2;

    sum = number1 + number2;

    console.log(sum);

}




//point number 6
const obj = {
    lebel: "Box",
    Dimention: "22*33*22"
}
for (let i in obj) {
    console.log(i, obj[i]);
};

//point number 7 
const arr = [10, 20, 30];

for (let [i, v] of arr.entries()) {
    console.log(i, v)
}
