import subscriptions from "./subscriptions.js";

// TITLE
const container = document.querySelector("#gallery");

const title = document.createElement("h1");
title.textContent = "ABBONAMENTI";

const list = document.createElement("div");
list.classList.add("list");
container.append(title, list);


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
            card.appendChild(typeEl);
    
            // PRICE
            const priceEl = document.createElement('p');
            priceEl.textContent = price;
            card.appendChild(priceEl);

            const button = document.createElement("button");
            button.textContent = "Buy it";
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


     const darkToggle = document.querySelector('#darkMode');
     darkToggle.addEventListener('click', ()=> {
     document.body.classList.toggle('dark-mode');
     });


     

