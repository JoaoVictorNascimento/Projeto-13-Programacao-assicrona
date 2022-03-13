import fetch from "node-fetch";

const getPokemonsByUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const fetchFirstPokemons = () => {
    const pokemonPromises = [];

    for (let i = 1; i <= 150; i++) {
        pokemonPromises.push(
            fetch(getPokemonsByUrl(i))
                .then(response => response.json())
        );
    };

    Promise.all(pokemonPromises)
        .then(pokemons => {
            console.log({ pokemons })
        })
}

const promiseAllSettled = () => {
    const promise_1 = new Promise((resolve, reject) => 
        setTimeout(reject, 1000, 'failed promise')
    );

    const promise_2 = new Promise((resolve, reject) => 
        setTimeout(resolve, 1000, 'resolve promise')
    );

    Promise.allSettled([promise_1, promise_2])
        .then(values => console.log(values));
}

const promiseRace = () => {
    const promise_1 = new Promise((resolve, reject) => 
        setTimeout(reject, 1000, 'failed promise')
    );

    const promise_2 = new Promise((resolve, reject) => 
        setTimeout(resolve, 1000, 'resolve promise')
    );

    Promise.race([promise_1, promise_2])
        .then(values => console.log(values))
        .catch(err => console.log(err))
}

const promiseAny = () => {
    const promise_1 = new Promise((resolve, reject) => 
        setTimeout(reject, 1000, 'failed promise')
    );

    const promise_2 = new Promise((resolve, reject) => 
        setTimeout(resolve, 1000, 'resolve promise')
    );

    Promise.any([promise_1, promise_2])
        .then(values => console.log(values))
        .catch(err => console.log(err))
}

// fetchFirstPokemons()
// promiseAllSettled()
// promiseRace()
// promiseAny()
