import subscriptions from "./subscriptions.js";

// TITLE
const container = document.querySelector("#gallery");

const title = document.createElement("h1");
title.textContent = "ABBONAMENTI";

const list = document.createElement("div");
list.classList.add("list");
container.append(title, list);

// CARD ABBONAMENTI
const displayRecipes = (name, type, price) => {
    const container = document.querySelector("#gallery");

            const card = document.createElement('div');
            card.classList.add('card');
    
            // NAME
            const nameEl = document.createElement('h3');
            nameEl.textContent = name;
            card.appendChild(nameEl);

            // TYPE
            const typeEl = document.createElement('p');
            typeEl.textContent = type;
            typeEl.classList.add("type");
            card.appendChild(typeEl);
    
            // PRICE
            const priceEl = document.createElement('p');
            priceEl.textContent = price;
            priceEl.classList.add("price");
            card.appendChild(priceEl);

            const button = document.createElement("button");
            button.textContent = "Buy it";
            button.classList.add("card-btn");
            card.appendChild(button);

            list.appendChild(card);
            container.appendChild(list);
  };

    subscriptions
    .filter((subscription) => displayRecipes(
     subscription.name, 
     subscription.type, 
     subscription.price
     )
     );


     const searchBar = document.createElement("div");
            searchBar.classList.add("search");

            const textSearch = document.createElement("p");
            textSearch.textContent = "Search: ";
            searchBar.appendChild(textSearch);

            const inputSearch = document.createElement("input");
            searchBar.appendChild(inputSearch);
            container.appendChild(searchBar);

     // DARK MODE
     const darkToggle = document.querySelector('#darkMode');

     const type = document.querySelector(".type");   // non funziona al querySelectorAll
     const price = document.querySelector(".price");  // non funziona al querySelectorAll
     darkToggle.addEventListener('click', ()=> {
     document.body.classList.toggle('dark-mode');
     type.style = "color: black;";
     price.style = "color: black;";
     });


     // TORTA AL TOP DELLA PAGINA
     function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
       }
  
       const button = document.getElementById("myBtn");
       button.addEventListener("click", topFunction);


       // MOSTRA LA MODAL AL CLICK DEL BOTTONE BUY IT DELLA CAR IN ABBONAMENTI
      const modal = document.querySelector(".modal");
      const openButton = document.querySelector(".card-btn");  // non funziona al querySelectorAll
      const closeButton = document.querySelector(".close-button");

      function toggleModal() {
       modal.classList.toggle("show-modal");
     }

      function windowOnClick(event) {
         if (event.target === modal) {
             toggleModal();
         }
      }

       openButton.addEventListener("click", toggleModal);
       closeButton.addEventListener("click", toggleModal);
       document.addEventListener("click", windowOnClick);

       
    // SEARCH BAR CON FILTRO PER NAME, TYPE, PRICE
