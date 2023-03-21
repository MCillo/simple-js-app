// Career Foundry Code
"use strict";
// last correct code submission

// let pokemonList = [
//   { name: "Bulbasaur", height: "0.7", type: "poison" }, //variable name, height, and type with values of Bulbasaur, 0.7, and poison
//   { name: "Charmander", height: "0.6", type: "fire" },
//   { name: "Squirtle", height: "0.5", type: "water" },
// ];

// function printArrayDetails() {
//   for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height < 0.6 && pokemonList[i].height > 0.4) {
//       //if statement checks if height is less than 0.6 and greater than 0.4
//       document.write(
//         pokemonList[i].name +
//           "\n weighs \n" +
//           pokemonList[i].height +
//           " that's an average weight." +
//           "<br>"
//       ); // if above if statement is true then prints out pokemon name + text + pokemon weight + text, if statement is false then continues to next line
//     } else if (pokemonList[i].height > 0.6) {
//       // checks if height is greater than 0.6
//       document.write(
//         pokemonList[i].name +
//           "\n weighs \n" +
//           pokemonList[i].height +
//           " Wow, that's big!" +
//           "<br>"
//       ); // // if above if statement is true then prints out pokemon name + text + pokemon weight + text, if statement is false then continues to next line
//     } else {
//       // if previous statements are false then pokemon height is not between 0.4 and 0.6, or is greater than 0.6
//       document.write(
//         pokemonList[i].name +
//           "\n weighs \n" +
//           pokemonList[i].height +
//           " that is underweight." +
//           "<br>"
//       ); // prints out pokemon name + text + pokemon weight + text
//     }
//   }
// }
//printArrayDetails();

/*
Exercise 1.5
*/

// let userList = [
//   {
//     name: 'Liz', age: 20
//   },
//   {
//     name: 'John', age: 30
//   },
//   {
//     name: 'Sammy', age: 40
//   },
// ];

// userList.forEach(function(user) {
//   //document.body.innerHTML = (user.name + ' is ' + user.age + ' years old.');
//   console.log(user.name + ' is ' + user.age + ' years old.');
// });

// function myLoopFunction(user) {
//   console.log(user.name + ' is ' + user.age + ' years old.');
// }
// userList.forEach(myLoopFunction);

// let anne = {
//   name: 'Anne',
//   age: 38,
//   children: [
//     // {
//     //   childName: 'Mary',
//     //   childAge: 12
//     // },
//     // {
//     //   childName: 'John',
//     //   childAge: 6
//     // },
//   ],
//   occupation: 'Teacher'
// };

// Object.keys(anne).forEach(function (property) {
//   console.log(anne[property]);
// });


/*
My Project Code
*/

// // Normal array followed by functions acting on the array
// let pokemonList = [
//   { name: "Bulbasaur", height: "0.7", type: "poison" }, //variable name, height, and type with values of Bulbasaur, 0.7, and poison
//   { name: "Charmander", height: "0.6", type: "fire" },
//   { name: "Squirtle", height: "0.5", type: "water" },
// ];


// // using a forEach() funcition instead of the for loop in lines 11-43 above
// pokemonList.forEach(function (pokemon) {
//   //console.log(pokemon.name + ' weighs ' + pokemon.height + ' and is ' + pokemon.type + ' type.'); // will write to the console log
//   //document.write(pokemon.name + ' weighs ' + pokemon.height + ' and is ' + pokemon.type + ' type. <br>');  // will write to the html document
// });

// // a cleaner way to write the forEach() function
// function pokemonForEachLoop(pokemon) {
//   console.log(pokemon.name + ' weighs ' + pokemon.height + ' and is ' + pokemon.type + ' type.');
// }
// pokemonList.forEach(pokemonForEachLoop);

// // combining objec.keys()function with the forEach() function
// Object.keys(pokemonList).forEach(function (property) {
//   console.log(pokemonList[property]);
// });


// // wrapping the pokemon array and functions into an IIFE part 1
// let pokemonRepository = (function () {
//   let pokemonList = [
//     { name: "Bulbasaur", height: "2.7", type: "poison" }, //variable name, height, and type with values of Bulbasaur, 0.7, and poison
//     { name: "Charmander", height: "1.6", type: "fire" },
//     { name: "Squirtle", height: "1.5", type: "water" },
//   ];

//   return {
//     add: function (pokemon) {
//       pokemonList.push(pokemon);
//     },
//     getAll: function () {
//       return pokemonList;
//     }
//   };
// })();
// console.log(pokemonRepository.getAll);
// pokemonRepository.add({ name: 'Pikachu', height: '.75', type: 'electric' });
// console.log(pokemonRepository.getAll());


// wrapping the pokemon array and functions into an IIFE part 2 defining functions inside IIFE using function keywords and returning only key-value pairs
let pokemonRepository = (function () {
    let pokemonList = [
        { name: "Bulbasaur", height: "2.7", type: "poison" }, //variable name, height, and type with values of Bulbasaur, 0.7, and poison
        { name: "Charmander", height: "1.6", type: "fire" },
        { name: "Squirtle", height: "1.5", type: "water" },
    ];

    // defining the add function inside the IIFE
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // defining the getAll function inside the IIFE
    function getAll() {
        return pokemonList;
    }

    // return only key-value pairs
    return {
        add: add, //key = add, value = add
        getAll: getAll
    };

})();

// using a forEach() funcition instead of the for loop in lines 11-43 above
pokemonRepository.getAll().forEach(function (pokemon) {
    console.log(pokemon.name + ' weighs ' + pokemon.height + ' and is ' + pokemon.type + ' type.'); // will write to the console log
    document.write(pokemon.name + ' weighs ' + pokemon.height + ' and is ' + pokemon.type + ' type. <br>');  // will write to the html document
});

// // a cleaner way to write the forEach() function
// function pokemonForEachLoop(pokemon) {
//   console.log(pokemon.name + ' weighs ' + pokemon.height + ' and is ' + pokemon.type + ' type.');
// }
// pokemonList.forEach(pokemonForEachLoop);



// console.log(pokemonRepository);   // calls the return of the overall IIFE
// console.log(pokemonRepository.getAll);   // references the getAll method
// pokemonRepository.add({ name: 'Pikachu', height: '.75', type: 'electric' });  //calls the add function with the value in ()
//console.log(pokemonRepository.getAll());  // calls the getAll function with the method getAll