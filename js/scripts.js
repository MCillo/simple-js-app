"use strict";

// IIFE 
let pokemonRepository = (function () {
    let pokemonArray = [];  // empty array to hold the objects returned from the loadList function
    // url for pokemon api stored in a variable
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=200';

    // defining the add function code to be able to add pokemon to the list
    function add(pokemon) {
        if (typeof pokemon === "object" && "name" in pokemon) {
            pokemonArray.push(pokemon);
        } else {
            // code to display error with DOM manipulation will be written in later
            console.log('Pokemon Data is incorrect. Please try again.');
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
        pokemonListItem.classList.add('list-group-item');
        let button = document.createElement('button'); // creates a button 

        button.innerText = pokemon.name; // assigns text to the created button
        button.classList.add('btn-primary');  // adds class name "button" to the created button
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');

        pokemonListItem.appendChild(button);  // appends the created button to the created <li> node
        pokemonList.appendChild(pokemonListItem); // appends the <li> node to the <ul> node

        button.addEventListener('click', function (event) { // adds an eventListener, when user clicks on button call showDetails function for the pokemon listed in button
            showDetails(pokemon);
        });
    }

    // function to load the list 
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    // function to load the "clicked" pokemon details
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // item.imageUrl = details.sprites.front_default;
            item.imageUrl = details.sprites.other.dream_world.front_default
            item.height = details.height;
            item.weight = details.weight;
            // item.type = details.types[0, 1].type.name;
            item.type1 = details.types[0].type.name;
            item.type2 = details.types[1].type.name;
            item.id = details.id;

        }).catch(function (e) {
            console.error(e);
        });
    }

    // create a function to show the pokemon details
    function showDetails(item) {
        loadDetails(item).then(function () {
            //console.log(item);
            showModal(item);
        });

        // creating a modal function to display the selected pokemon information
        function showModal(item) {

            const modalBody = document.querySelector('.modal-body');
            //referencing the element to display pokemon info on the modal
            let titleElement = document.querySelector('.modal-title');
            // titleElement.innerText = `${item.name} ID # ${item.id}`;
            titleElement.innerText = (item.name) + ' # ' + (item.id);

            // referencing the element to display the pokemon image
            let pokemonImageElement = document.querySelector('.pokemon-image');
            pokemonImageElement.src = item.imageUrl;

            // creating the element to display the pokemon height
            let heightElement = document.querySelector('.pokemon-height');
            heightElement.innerText = 'Height: ' + (item.height) + ' m';

            // creating the element to display the pokemon height
            let weightElement = document.querySelector('.pokemon-weight');
            weightElement.innerText = 'Weight: ' + (item.weight) + ' kg';

            // creating the element to display the pokemon type
            let typeElement = document.querySelector('.pokemon-types');
            // typeElement.innerText = 'Types: ' + (item.type);
            typeElement.innerText = 'Types: ' + (item.type1) + ' & ' + (item.type2);
        }
    }

    // Search function
    let searchString = document.querySelector('#search-field');
    searchString.addEventListener('input', function () {
        pokemonRepository.searchPokemon(searchString);
    });

    function searchPokemon(searchString) {
        let filterString = searchString.value.toLowerCase();

        let filteredPokemon = pokemonArray.filter(function (pokemon) {
            return pokemon.name.toLowerCase().indexOf(filterString) > -1;
        });

        let pokemonListElement = document.querySelector('.pokemon-list');
        pokemonListElement.innerHTML = '';
        filteredPokemon.forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
    }

    // return only key: value pairs
    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails,
        searchPokemon: searchPokemon,
    };

})();

// using a forEach() to list all elements of the pokemonList array
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
})