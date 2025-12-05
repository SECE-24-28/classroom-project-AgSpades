let arr = [10,202,202,303,404];
let [a, , b, ...rest] = arr;

console.log(a);    // 10
console.log(b);    // 202
console.log(rest); // [303, 404]

let obj = {x: 1, y: 2, z: 3, w: 4};
let {x, z, ...others} = obj;

console.log(x);      // 1
console.log(z);      // 3
console.log(others); // {y: 2, w: 4}