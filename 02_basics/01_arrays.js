const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman" , "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// //array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9) pehle position pe gaya tha
// myArr.shift() pehle position ka remove hota hai
// console.log(myArr);
// const newArr = myArr.join() // array ko string main convert


// console.log(myArr);
// console.log(newArr);
//slice,spice

console.log("A" , myArr);
const myn1 = myArr.slice(1,3)//Start at index 1 → stop BEFORE index 3
console.log(myn1);
console.log("B" , myArr);
const myn2 = myArr.splice(1,3)//Start at index 1 → remove 3 elements
console.log("c" , myArr);
console.log(myn2)