
    let pokemonList = []

    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }

})()
//console.log(pokemonRepository.getAll());

//forEach function before implementing IIFE above
pokemonRepository.getAll().forEach(function() {
    console.log(pokemonRepository);
});

