
/* create an array with with three objects with 3 variables*/
let pokemonList = [
    {name: 'Bulbasaur', height: '0.7', type: 'poison'}, //variable name, height, and type with values of Bulbasaur, 0.7, and poison. all objects will have similar setup
    {name: 'Charmander', height: '0.6', type: 'fire'},
    {name: 'Squirtle', height: '0.5', type: "water"},
];

/* creates a for loop, initializing variable i at 0 for the start of the array, the condition is for the length or number of objects in the array, the action is to add 1 
 to the variable i and to continue until the number of objects in the array is met */
for (let i=0; i < pokemonList.length; i++){ 
    if (pokemonList[i].height < 0.6 && pokemonList[i].height > 0.4){ //if statement checks if height is less than 0.6 and greater than 0.4
        document.write(pokemonList[i].name + "\n weighs \n" + pokemonList[i].height + " that's an average weight." + "<br>"); // if above if statement is true then prints out pokemon name + text + pokemon weight + text, if statement is false then continues to next line
    }else if (pokemonList[i].height >0.6){ // checks if height is greater than 0.6
        document.write(pokemonList[i].name + "\n weighs \n"  + pokemonList[i].height + " Wow, that's big!" + "<br>"); // // if above if statement is true then prints out pokemon name + text + pokemon weight + text, if statement is false then continues to next line
    }else { // if previous statements are false then pokemon height is not between 0.4 and 0.6, or is greater than 0.6
        document.write(pokemonList[i].name + "\n weighs \n"  + pokemonList[i].height + " that is underweight." + "<br>"); // prints out pokemon name + text + pokemon weight + text
    }
}