for (let i = 0; i < 1000000; i++) {
    if (i == 10)
        break;
    console.log("value of i :" + i);

}

const arr = ['ahmedabad', 'surat', 'pune', 'mumbai', 'hydrabad', 'chennai', ' pinpri', 'masoori', 'amritsar', 'shreenagar'];

arr.push("banglore");
arr.unshift("Kolkata");

console.log(arr);
console.log("initail 5 index value :-" + arr.slice(0, 4));

const arr2 = [67, 23, 8, 97, 5, 21, 12];

arr2.sort((num1, num2) => {
    if (num1 > num2) return -1;
})
console.log(arr2);

let city = arr.filter((arr) => arr.length < 5);
console.log(city);
console.log(city.length);



