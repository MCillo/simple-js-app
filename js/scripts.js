"use strict";

// IIFE 
let pokemonRepository = (function () {
    let pokemonArray = [
        { name: "Bulbasaur", height: "2.7", type: "poison" }, //variable name, height, and type with values of Bulbasaur, 0.7, and poison
        { name: "Charmander", height: "1.6", type: "fire" },
        { name: "Squirtle", height: "1.5", type: "water" },
    ];

    // defining the add function code to be able 
    function add(pokemon) {
        if (typeof pokemon === "object" && "name" in pokemon && "height" in pokemon && "type" in pokemon) {
            pokemonArray.push(pokemon);
        } else {
            // code to display error with DOM manipulation will be written in later
            // console.log('Pokemon Data is incorrect. Please try again.');
            // document.write('Pokemon Data is incorrect. Please try again.');
        }
    }

    // defining the getAll function
    function getAll() {
        return pokemonArray;
    }

    // creating the addListItem function
    function addListItem(pokemon) {

        // creating variables for DOM manipulation

        let pokemonList = document.querySelector('.pokemon-list'); //selects the <ul> node with class name pokemon-list
        let pokemonListItem = document.createElement('li'); // creates an <li> node
        let button = document.createElement('button'); // creates a button 

        // manipulating the nodes 
        button.innerText = (pokemon.name); // assigns text to the created button
        button.classList.add('button');  // adds class name "button" to the created button

        pokemonListItem.appendChild(button);  // appends the created button to the created <li> node
        pokemonList.appendChild(pokemonListItem); // appends the <li> node to the <ul> node

        button.addEventListener('click', function (event) { // adds an eventListener, when user clicks on button call showDetails function for the pokemon listed in button
            showDetails(pokemon);
        });
    }

    // create a function to show the pokemon details
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    // return only key-value pairs
    return {
        add: add, //key = add, value = add
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    };

})();
// function to add a pokemon to the Pokemon Array
pokemonRepository.add({ name: "Pikachu", height: 0.3, type: ["electric"] });

// // using a forEach() to list all elements of the pokemonList array
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});




