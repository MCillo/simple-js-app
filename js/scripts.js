

const pokemonRepository = (function () {

    let pokemonList = [
        { name: 'Bulbasaur', height: '0.7', type: 'poison' }, //variable name, height, and type with values of Bulbasaur, 0.7, and poison
        { name: 'Charmander', height: '0.6', type: 'fire' },
        { name: 'Squirtle', height: '0.5', type: "water" },
    ]

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (typeof pokemon === "object") {
            pokemonList.push(pokemon);
        } else {
            console.log('Input is not valid, try again Please.')
        }
    }

    return {
        getAll: getAll,
        add: add
    }

})();

// this would be coded for the user to add to the array  
pokemonRepository.add({ name: 'Pikachu', height: '0.3', type: 'electric' });

// this would be coded for the user to add to the array, this should throw the "else" in the add function since it is not the correct data type
pokemonRepository.add('mario');

console.log(pokemonRepository.getAll());




