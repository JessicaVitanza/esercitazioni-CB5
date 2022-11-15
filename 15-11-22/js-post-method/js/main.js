import { c, q, GET, POST, uuidv4 } from './utils.js'
const url = "http://localhost:3000/pokemon"

const form = document.forms.pokemon;
const element = form.elements

const ul = q(".pokemonList")


form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = {
		id: uuidv4(),
		name: element.pkmName.value,
		type: element.pkmType.value
	}

	POST(url, data)
		.then((response) => response.json())
		.then((res) => {
			console.log('Success:', res);
		})
		.catch((error) => {
			console.error('Error:', error);
		})
})


window.onload = GET(url).then(res => res.map(pkm => displayCard(pkm)));




const displayCard = (resCard) => {
	const container = document.getElementById("container");
	const containerCard = document.getElementById("container-card");
const card = document.createElement("div");
const img = document.createElement("img");
const namePkn = document.createElement("h1");
const typePkn = document.createElement("h3");

	card.classList.add("card");
	namePkn.textContent = resCard.name;
	typePkn.textContent = "Type: " + resCard.type;

	card.classList.add(`bg-${resCard.type}`);
	card.append(img, namePkn, typePkn);
	containerCard.appendChild(card);
	container.appendChild(containerCard);
}
