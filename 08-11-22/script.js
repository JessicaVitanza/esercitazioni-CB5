// for ( let i = 1 ; i <= 150 ; i++)
// fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
// .then((resp) => resp.json())
// .then((pokemon) => displayPokemon(pokemon));


// elemento presente in HTML
const loading = document.querySelector(".loading")

const urlArray = []; //creo array vuoto

for ( let i = 1 ; i <= 150 ; i++) {
    urlArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`)  // aggiungo gli url nell'array
}

let request = urlArray.map((url) => {       // faccio il map dell'array iniziale creandone uno nuovo con le promise
    loading.classList.add("active");            // elemento loading in HTML ora con display block tramite la nuova classe css
    return fetch(url).then((res) => res.json());
});

Promise.all(request).then((res) => res.map((r) => displayPokemon(r)))   // faccio il map dell'array di promises, prendo i singoli oggetti per la creazione delle card
.finally(() => loading.classList.remove("active"));         // rimozione dell'elemento loading 


// CREO LE CARD
function displayPokemon (pokemon) {
    const container = document.getElementById("container");

    // CARD
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(`bg-${pokemon.types[0].type.name}`);

    // IMG
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    // ID
    const id = document.createElement("p");
    id.textContent = "# " + createId(pokemon.id);
    // if (pokemon.id < 10) {
    //     id.textContent = "#00" + pokemon.id;
    // } else if (pokemon.id >= 10 && pokemon.id < 100) {
    //     id.textContent = "#0" + pokemon.id;
    // } else if (pokemon.id >= 100) {
    //     id.textContent = "#" + pokemon.id;
    // }

    // ID
    function createId (id) {
        if ( !id ) return null;
        if ( id < 10 ) {return `00${id}`}
        else if ( id < 100 ){ return `0${id}`}
        return id 
    }

    // NAME
    const name = document.createElement("h1");
    name.textContent = pokemon.name;

    // TYPE
    const type = document.createElement("h5");
    type.textContent = "Type: " + pokemon.types[0].type.name;

    // if (pokemon.types[0].type.name === "electric"){
    //     card.style = "background-color: #FCF7DE";
    // } else if (pokemon.types[0].type.name === "water") {
    //     card.style = "background-color: #DEF3FD";
    // } else if (pokemon.types[0].type.name === "ground") {
    //     card.style = "background-color: #f4e7da";
    // } else if (pokemon.types[0].type.name === "rock") {
    //     card.style = "background-color: #d5d5d4";
    // } else if (pokemon.types[0].type.name === "fairy") {
    //     card.style = "background-color: #fceaff";
    // } else if (pokemon.types[0].type.name === "poison") {
    //     card.style = "background-color: #98d7a5";
    // } else if (pokemon.types[0].type.name === "bug") {
    //     card.style = "background-color: #f8d5a3";
    // } else if (pokemon.types[0].type.name === "dragon") {
    //     card.style = "background-color: #97b3e6";
    // } else if (pokemon.types[0].type.name === "psychic") {
    //     card.style = "background-color: #eaeda1";
    // } else if (pokemon.types[0].type.name === "flying") {
    //     card.style = "background-color: #F5F5F5";
    // } else if (pokemon.types[0].type.name === "fighting") {
    //     card.style = "background-color: #E6E0D4";
    // } else if (pokemon.types[0].type.name === "normal") {
    //     card.style = "background-color: #F5F5F5";
    // } else if (pokemon.types[0].type.name === "fire") {
    //     card.style = "background-color: #FDDFDF";
    // } else if (pokemon.types[0].type.name === "grass") {
    //     card.style = "background-color: #DEFDE0";
    // } else if (pokemon.types[0].type.name === "ghost"){
    //     card.style = "background-color: #705898";
    // } else if(pokemon.types[0].type.name === "ice"){
    //     card.style = "background-color: #98d8d8";
    // }

    card.append(img, id, name, type);
    container.appendChild(card);
}

