import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  // const elements = {
  //   cardEl: ce("div"),
  //   imgEl: ce("img"),
  //   titleEl: ce("h4"),
  //   urlEl: ce("p")
  // }
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "cardimg";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "cardtitle";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

let prod = [];

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  prod = productsList.map((product) => {
    createCardEl(product, cardList);
    return product;
  });
});

inputEl.addEventListener("input", (e) => {
    cardList.textContent = "";
    prod.filter(
      (product) =>
        product.title.includes(e.target.value) && createCardEl(product, cardList)
    );
  });


// MOSTRA LA MODAL AL CLICK DEL BOTTONE
const modal = qs(".modal");
const modalBtn = ce("button");
modalBtn.classList.add("modal-btn");  
modalBtn.textContent = "ADD NEW ITEM";
const closeButton = qs(".close-button");
const hero = qs(".hero");
hero.appendChild(modalBtn);
const save = qs(".save");


function toggleModal() {
 modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
   if (event.target === modal) {
       toggleModal();
   }
}

 modalBtn.addEventListener("click", toggleModal);
 closeButton.addEventListener("click", toggleModal);
 document.addEventListener("click", windowOnClick);


//  MODAL FORM -> POST METHOD
// const form = qs(".save-box");

// form.addEventListener("submit", (e) => {
//     const titleEl = qs(".card__title");

// 	e.preventDefault();
// 	const data = {
// 		title: titleEl.value
// 	}

// 	POST(BASE_URL, data)
// 		.then((response) => response.json())
// 		.then((res) => {
// 			console.log('Success:', res);
// 		})
// 		.catch((error) => {
// 			console.error('Error:', error);
// 		})
// })