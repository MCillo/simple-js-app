
// last correct code submission

/*
let pokemonList = [
    { name: 'Bulbasaur', height: '0.7', type: 'poison' }, //variable name, height, and type with values of Bulbasaur, 0.7, and poison
    { name: 'Charmander', height: '0.6', type: 'fire' },
    { name: 'Squirtle', height: '0.5', type: "water" },
];

function printArrayDetails() {
    for (let i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].height < 0.6 && pokemonList[i].height > 0.4) { //if statement checks if height is less than 0.6 and greater than 0.4
            document.write(pokemonList[i].name + "\n weighs \n" + pokemonList[i].height + " that's an average weight." + "<br>"); // if above if statement is true then prints out pokemon name + text + pokemon weight + text, if statement is false then continues to next line
        } else if (pokemonList[i].height > 0.6) { // checks if height is greater than 0.6
            document.write(pokemonList[i].name + "\n weighs \n" + pokemonList[i].height + " Wow, that's big!" + "<br>"); // // if above if statement is true then prints out pokemon name + text + pokemon weight + text, if statement is false then continues to next line
        } else { // if previous statements are false then pokemon height is not between 0.4 and 0.6, or is greater than 0.6
            document.write(pokemonList[i].name + "\n weighs \n" + pokemonList[i].height + " that is underweight." + "<br>"); // prints out pokemon name + text + pokemon weight + text
        }
    }
}

printArrayDetails();
*/

/* following code is deemed incorrect for submission requirements

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

// write the pokemon list to the webpage
document.write('<h2>Pokemon List</h2>');

function pokemonDisplay(pokemon) {
    document.write(pokemon.name + ' is ' + pokemon.height + ' tall, and is ' + pokemon.type + ' type. </br>');
}
pokemonRepository.forEach(pokemonDisplay);


*/
