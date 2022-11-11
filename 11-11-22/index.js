let i = 1;
let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
fetch(result)
  .then((res) => res.json())
  .then((res) => displayPokemon(res));

  const container = document.getElementById("container");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const namePokemon = document.createElement("h1");
  const id = document.createElement("p");
  const type = document.createElement("h5");

  const displayPokemon = (pokemon) => {
    
    card.classList.add("card");
    card.classList.add(`bg-${pokemon.types[0].type.name}`);
    img.src = pokemon.sprites.front_default;
    namePokemon.textContent = pokemon.name;
    id.textContent = "# " + createId(pokemon.id);
    function createId (id) {
        if ( !id ) return null;
        if ( id < 10 ) {return `00${id}`}
        else if ( id < 100 ){ return `0${id}`}
        return id 
    }
    type.textContent = "Type: " + pokemon.types[0].type.name;

    card.append(img, namePokemon, id, type);
    container.appendChild(card);

  }

  const prev = document.getElementById("prev-btn");
  const next = document.getElementById("next-btn");
  card.append(prev, next);

  next.addEventListener("click", () => {
    i++;
      
    result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => displayPokemon(res));

    if (next >= 10) next.disabled = true;
    if (next === 1) prev.disabled = true;
    else prev.disabled = false;
  });

  prev.addEventListener("click", () => {
    i--;

    result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => displayPokemon(res));

      if (next <= 2) prev.disabled = true;
      
  });


  window.onload = prev.disabled = true;

  