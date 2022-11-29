const containerActor = document.querySelector(".attori");

const url_actor = `http://localhost:3000/attori`;

// PORTO A DISPLAY I DATI
const createCard = (actors) => {

    for ( let actor of actors) {
       
        const cardEl = document.createElement("div");
        const imgEl = document.createElement("div");
        const nameEl = document.createElement("h3");
        const cognomeEl = document.createElement("h3");
        const dataEl = document.createElement("h4");
        const deleteEl = document.createElement("button");
        const editEl = document.createElement("button");
        

        cardEl.className ="card"
        imgEl.className = "card-img";
        nameEl.className = "name";
        cognomeEl.className = "surname";
        dataEl.className = "data-nascita";
        deleteEl.className = "delete-btn";
        editEl.className = "edit-btn";
    
        nameEl.textContent = actor.nome;
        cognomeEl.textContent = actor.cognome;
        dataEl.textContent = actor.data_nascita;
        deleteEl.textContent = "delete";
        editEl.textContent = "edit";
    
        cardEl.append(imgEl, nameEl, cognomeEl, dataEl, deleteEl, editEl);
        containerActor.appendChild(cardEl);
    }

}

fetch(url_actor)
.then(resp => resp.json())
.then(res => createCard(res));
