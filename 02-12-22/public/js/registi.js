const containerdirector = document.querySelector(".registi");

const GET_Director = async (url) => {
	const res = await fetch(url);
	return await res.json();
}

const url_director = `http://localhost:3000/registi`;


// PORTO A DISPLAY I DATI
const createCardDirector = (director) => {

        const cardEl = document.createElement("div");
        const imgEl = document.createElement("div");
        const nameEl = document.createElement("h3");
        const cognomeEl = document.createElement("h3");
        const dataEl = document.createElement("h4");
        const deleteEl = document.createElement("button");
        const editEl = document.createElement("button");
        const idEl = document.createElement("p");
        

        cardEl.className = "card"
        imgEl.className = "card-img";
        nameEl.className = "name";
        cognomeEl.className = "surname";
        dataEl.className = "data-nascita";
        deleteEl.className = "delete-btn";
        editEl.className = "edit-btn";
        idEl.className = "id";
    
        nameEl.textContent = director.nome;
        cognomeEl.textContent = director.cognome;
        dataEl.textContent = director.data_nascita;
        deleteEl.textContent = "delete";
        editEl.textContent = "edit";
        idEl.textContent = "ID: " + director.id;
    
        cardEl.append(imgEl, idEl, nameEl, cognomeEl, dataEl, deleteEl, editEl);
        containerdirector.appendChild(cardEl);


        const DELETE_Director = async (url,id) => {
            const res = await fetch(url,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({'id':id})
            });
            return await res.json();
        };
                  
          deleteEl.addEventListener("click", (e) => {
            const url = `http://localhost:3000/regista`;
            const id = director.id;
            DELETE_Director(url, id)
			.then(() => location.reload())
          });

}


const POST_Director = async (url, body_message) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
};

function createdirector(body_message) {
  const url = `http://localhost:3000/regista`;

  return POST_Director(url, body_message);
}

const directorName = document.querySelector(".directorName");
const directorSurname = document.querySelector(".directorSurname");
const directorYob = document.querySelector(".directorYob");
const addDirector = document.querySelector(".add-btn");

addDirector.addEventListener("click", (e) => {
  const director = {
    nome: directorName.value,
    cognome: directorSurname.value,
    data_nascita: directorYob.value
  };

  createdirector(director).then((message)=>{
    console.log("Post andata a buon fine!"); 
  });
});

window.onload = GET_Director(url_director).then(res => res.map(director => createCardDirector(director)));
