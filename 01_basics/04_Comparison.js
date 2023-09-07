console.log (2 > 1); // 2 is greater than 1
console.log (2 >= 1); // 2 is equal to and greater than 1
console.log (2 < 1); // 2 is less than 1
console.log (2 <= 1); // 2 is equal to and less than 1
console.log (2 == 1); // 2 is equal to 1
console.log (2 != 1); // 2 is not equal to 1

// avoide those coversion

console.log( null > 0); // false
console.log( null < 0); // false
console.log( null == 0); // false
console.log( null >= 0); // true
console.log( null <= 0); // true

console.log( undefined > 0); // false
console.log( undefined < 0); // false
console.log( undefined == 0); // false
console.log( undefined >= 0); // false
console.log( undefined <= 0); // false


// #### Strictly check ####### 

console.log (null === 0);