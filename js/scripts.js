"use strict";

// IIFE 
let pokemonRepository = (function () {
    let pokemonArray = [];  // empty array to hold the objects returned from the loadList function
    // url for pokemon api stored in a variable
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

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
        //let pokemonList = document.querySelector('.pokemon-list'); //selects the <ul> node with class name pokemon-list
        // seeing if i can make the pokemon list display as a grid instead of a list
        let pokemonList = document.querySelector('.grid'); //selects the <div class = "grid">

        let pokemonListItem = document.createElement('div'); // creates an <li> node
        let button = document.createElement('button'); // creates a button 

        // manipulating the nodes 
        // let pokemonButtonText = pokemon.name;
        // button.innerText = pokemonButtonText.toUppercase();
        button.innerText = pokemon.name; // assigns text to the created button
        button.classList.add('button');  // adds class name "button" to the created button

        pokemonListItem.appendChild(button);  // appends the created button to the created <li> node
        pokemonList.appendChild(pokemonListItem); // appends the <li> node to the <ul> node

        button.addEventListener('click', function (event) { // adds an eventListener, when user clicks on button call showDetails function for the pokemon listed in button
            showDetails(pokemon);
        });
    }



    // create a function to show the pokemon details
    function showDetails(item) {
        loadDetails(item).then(function () {
            //console.log(item);
            showModal(item);
        });

        // creating a modal to house the pokemon info
        let modalContainer = document.querySelector('#pokemon-modal');
        // creating a modal to display the selected pokemon information
        function showModal(item) {

            // clear existing modal content
            modalContainer.innerHTML = '';

            let modal = document.createElement('div');
            modal.classList.add('modal');

            // creating a button to close the modal
            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', hideModal);

            //creating the element to display pokemon info on the modal
            let titleElement = document.createElement('h1');
            titleElement.innerText = item.name;

            // creating the element to display the pokemon image
            let pokemonImageElement = document.createElement('img');
            pokemonImageElement.src = item.imageUrl;
            pokemonImageElement.classList.add('pokemonImage');

            // creating the element to display the pokemon height
            let heightElement = document.createElement('p');
            heightElement.innerText = 'Height: ' + (item.height) + ' m';

            // creating the element to display the pokemon type
            let idElement = document.createElement('p');
            idElement.innerText = 'ID # ' + (item.id);

            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(pokemonImageElement);
            modal.appendChild(heightElement);
            modal.appendChild(idElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');
        }

        // function to hide the pokemon information modal
        function hideModal() {
            modalContainer.classList.remove('is-visible');
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideModal();
            }
        });

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

        // document.querySelector('button').addEventListener('click', () => {
        //     showModal();
        // });
    }

    // function to show a loading message
    // researching how to do this

    // function to hide a loading message
    // researching how to do this

    // function to load the list 
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
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
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            item.id = details.id;
        }).catch(function (e) {
            console.error(e);
        });
    }

    // return only key-value pairs
    return {
        add: add, //key = add, value = add
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails,
        //showModal: showModal,
    };

})();

// using a forEach() to list all elements of the pokemonList array
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
})

