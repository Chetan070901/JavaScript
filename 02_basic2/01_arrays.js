const myArr = [0, 1, 2, 3, 4, "True", "Chetan"]

// console.log(myArr[5]);


// myArr.push(6)
// myArr.push("mayank")
// myArr.pop()

// myArr.unshift("kishan")
// myArr.shift()

// console.log(myArr.includes("Chetan"));
// console.log(myArr.indexOf("True"));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr); // this is obejct by type
// console.log(typeof newArr); // this is string by type

// slice, splice

 console.log("A", myArr );

 const myNewArr = myArr.slice(1,3)

 console.log(myNewArr);
 console.log("B", myArr);

 const myNewArr2 = myArr.splice(1,3)
 console.log(myNewArr2);
 console.log("C", myArr);