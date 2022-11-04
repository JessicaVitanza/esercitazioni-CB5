import recipes from "./recipes.js"

const body = document.querySelector("body");

// const navbar = document.getElementById("navbar");
// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// const li4 = document.createElement("li");
// const li5 = document.createElement("li");
// const li6 = document.createElement("li");
// const a1 = document.createElement("a");
// a1.textContent = "ANTIPASTI";
// const a2 = document.createElement("a");
// a2.textContent = "PRIMI";
// const a3 = document.createElement("a");
// a3.textContent = "SECONDI";
// const a4 = document.createElement("a");
// a4.textContent = "CONTORNI";
// const a5 = document.createElement("a");
// a5.textContent = "DOLCI";
// const a6 = document.createElement("a");
// a6.textContent = "CREME E SALSE";
// li1.appendChild(a1);
// li2.appendChild(a2);
// li3.appendChild(a3);
// li4.appendChild(a4);
// li5.appendChild(a5);
// li6.appendChild(a6);
// ul.append(li1, li2, li3, li4, li5, li6);
// navbar.appendChild(ul);

// const hero = document.getElementById("hero");
// const titleHero = document.createElement("h1");
// titleHero.textContent = "Try Vegan";
// const paragrafHero = document.createElement("p");
// paragrafHero.textContent = "Vuoi provare l'alimentazione vegetale? Esplora le varie sezioni e trova la ricetta che fa al caso tuo! Troverai alcune ricette vegan, facili e veloci.";
// hero.append(titleHero, paragrafHero);

// body.appendChild(hero);

const displayRecipes = (name, img, scope, facility, ingredients, preparation, time) => {
    const container = document.querySelector("#container");

            const card = document.createElement('div');
            card.classList.add('card');
    
            // NAME
            const nameRec = document.createElement('p');
            nameRec.classList.add('name');
            nameRec.textContent = name;
            card.appendChild(nameRec);

            // IMG
            const imgRec = document.createElement('img');
            imgRec.classList.add('img');
            imgRec.setAttribute("src", img);
            card.appendChild(imgRec);
    
            // PORTATA
            const scopeRec = document.createElement('p');
            scopeRec.classList.add('scope');
            scopeRec.textContent = 'Portata : ' + scope;
            card.appendChild(scopeRec);
    
            // DIFFICOLTA'
            const facilityRec = document.createElement('p');
            facilityRec.classList.add('facility');
            facilityRec.textContent = 'Difficoltà : ' + facility;
            card.appendChild(facilityRec);
    
            // CREO UN DIV CONTENENTE LE INFO
            const bottomCard = document.createElement('div');
            bottomCard.classList.add('bottom-card');
            card.appendChild(bottomCard);
  
            // INGREDIENTI
            const ingredientsRec = document.createElement('p');
            ingredientsRec.classList.add('ingredients');
            ingredientsRec.textContent = 'Ingredienti : ' + ingredients;
            bottomCard.appendChild(ingredientsRec);
    
            // PREPARAZIONE
            const preparationRec = document.createElement('p');
            preparationRec.classList.add('preparation');
            preparationRec.textContent = 'Preparazione : ' + preparation;
            bottomCard.appendChild(preparationRec);

            // TEMPO
            const timeRec = document.createElement('p');
            timeRec.classList.add('time');
            timeRec.textContent = 'Tempo : ' + time;
            bottomCard.appendChild(timeRec);

            container.appendChild(card);
  };
    
//  RECIPES with filter Antipasti 
    recipes
    .filter((recipe) => recipe.scope === "Antipasti")
    .map((recipe) =>
      displayRecipes(
      recipe.name,
      recipe.img,
      recipe.scope,
      recipe.facility,
      recipe.ingredients,
      recipe.preparation,
      recipe.time
      )
    );

   const containerAntipasti = document.querySelector("#container-antipasti");
   const antipasti = document.createElement("div");
   const titoloAntipasti = document.createElement("h1");
   titoloAntipasti.classList.add("scope__title");
   titoloAntipasti.textContent = "Antipasti";
   antipasti.appendChild(titoloAntipasti);
   containerAntipasti.appendChild(antipasti);
   body.appendChild(containerAntipasti);

    //  RECIPES with filter Primi 
    recipes
    .filter((recipe) => recipe.scope === "Primi")
    .map((recipe) =>
      displayRecipes(
      recipe.name,
      recipe.img,
      recipe.scope,
      recipe.facility,
      recipe.ingredients,
      recipe.preparation,
      recipe.time
      )
    );

    const containerPrimi = document.querySelector("#container-primi");
   const primi = document.createElement("div");
   const titoloPrimi = document.createElement("h1");
   titoloPrimi.classList.add("scope__title");
   titoloPrimi.textContent = "Primi";
   primi.appendChild(titoloPrimi);
   containerPrimi.appendChild(primi);
   body.appendChild(containerPrimi);
    
    //  RECIPES with filter Secondi 
    recipes
    .filter((recipe) => recipe.scope === "Secondi")
    .map((recipe) =>
      displayRecipes(
      recipe.name,
      recipe.img,
      recipe.scope,
      recipe.facility,
      recipe.ingredients,
      recipe.preparation,
      recipe.time
      )
    );

    const containerSecondi = document.querySelector("#container-secondi");
    const secondi = document.createElement("div");
    const titoloSecondi = document.createElement("h1");
    titoloSecondi.classList.add("scope__title");
    titoloSecondi.textContent = "Secondi";
    secondi.appendChild(titoloSecondi);
    containerSecondi.appendChild(secondi);
    body.appendChild(containerSecondi);

    //  RECIPES with filter Contorni 
    recipes
    .filter((recipe) => recipe.scope === "Contorni")
    .map((recipe) =>
      displayRecipes(
      recipe.name,
      recipe.img,
      recipe.scope,
      recipe.facility,
      recipe.ingredients,
      recipe.preparation,
      recipe.time
      )
    );

    const containerContorni = document.querySelector("#container-contorni");
    const contorni = document.createElement("div");
    const titoloContorni = document.createElement("h1");
    titoloContorni.classList.add("scope__title");
    titoloContorni.textContent = "Contorni";
    contorni.appendChild(titoloContorni);
    containerContorni.appendChild(contorni);
    body.appendChild(containerContorni);

    //  RECIPES with filter Dolci 
    recipes
    .filter((recipe) => recipe.scope === "Dolci")
    .map((recipe) =>
      displayRecipes(
      recipe.name,
      recipe.img,
      recipe.scope,
      recipe.facility,
      recipe.ingredients,
      recipe.preparation,
      recipe.time
      )
    );

    const containerDolci = document.querySelector("#container-dolci");
    const dolci = document.createElement("div");
    const titoloDolci = document.createElement("h1");
    titoloDolci.classList.add("scope__title");
    titoloDolci.textContent = "Dolci";
    dolci.appendChild(titoloDolci);
    containerDolci.appendChild(dolci);
    body.appendChild(containerDolci);

    //  RECIPES with filter Creme e Salse 
    recipes
    .filter((recipe) => recipe.scope === "Creme e Salse")
    .map((recipe) =>
      displayRecipes(
      recipe.name,
      recipe.img,
      recipe.scope,
      recipe.facility,
      recipe.ingredients,
      recipe.preparation,
      recipe.time
      )
    );

    const containerSalse = document.querySelector("#container-salse");
    const salse = document.createElement("div");
    const titoloSalse = document.createElement("h1");
    titoloSalse.classList.add("scope__title");
    titoloSalse.textContent = "Creme";
    salse.appendChild(titoloSalse);
    containerSalse.appendChild(salse);
    body.appendChild(containerSalse);

    const footer = document.getElementById("footer");
    const contatti = document.createElement("div");
    contatti.classList.add("contatti");
    const mail = document.createElement("a");
    const img1 = document.createElement("img");
    img1.src = "./assets/mail_FILL0_wght400_GRAD0_opsz48.svg";
    mail.appendChild(img1);
    const person = document.createElement("a");
    const img2 = document.createElement("img");
    img2.src = "./assets/person_FILL0_wght400_GRAD0_opsz48.svg";
    person.appendChild(img2);
    const phone = document.createElement("a");
    const img3 = document.createElement("img");
    img3.src = "./assets/phone_iphone_FILL0_wght400_GRAD0_opsz48.svg";
    phone.appendChild(img3);
    contatti.append(mail, person, phone);
    footer.appendChild(contatti);
    body.appendChild(footer);



    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
     }

     const button = document.getElementById("myBtn");
    // button.onclick = topFunction;
    button.addEventListener("click", topFunction);