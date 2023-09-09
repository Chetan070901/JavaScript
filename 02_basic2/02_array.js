const marvel_heros = ["IronMan", "Thor" , "SpirderMan"];

const dc_heros = [ "superMan", "flash", "batman" ]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);  // Simple type to merge two arrays
// console.log(marvel_heros [3][2];

// const my_new_heroes = marvel_heros.concat(dc_heros);
// console.log(my_new_heroes);
// console.log(typeof my_new_heroes); //merged two arrays with concate

// const all_new_heros = [...marvel_heros, ...dc_heros ]
// console.log(all_new_heros); // by spread method

 const another_array = [1, 2, 3, [4, 5, 6],7 , [6, 6, [5, 4]]]

 const real_another_hero = another_array.flat(Infinity);
 console.log(real_another_hero); // use flat to convert multiples array to a single array.

 console.log(Array.isArray("chetan"));
 console.log(Array.from("chetan"));


 let score1 = "chetan"
 let score2 = "mayank"
 let score3 = "ankit"

 console.log(Array.of(score1, score2, score3));

