
const loading = document.querySelector(".loading");
const btn = document.getElementById("btn-generator");
const advice = document.getElementById("advice");
const urlAdvice = "https://api.adviceslip.com/advice";
loading.classList.add("active"); 

/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getAdvice = (URL) => {
  loading.classList.remove("active"); 
  fetch(URL, { cache: "no-cache" })
  .then((res) => res.json())
  .then((res) => displayCard(res))
  .catch((err) => console.log("Error:" + err));
};

// al click e refresh di pagina richiamo il nuovo advice
const onFirstLoad = () => {
  btn.addEventListener("click", () => {
    getAdvice(urlAdvice);
  });

  getAdvice(urlAdvice);
};

window.onload = onFirstLoad;

// creo la card con id, l'advice, il divider e il bottone
function displayCard (advice) {
  
        const card = document.getElementById("card");
        const id = document.getElementById("id");
        const h2 = document.getElementById("advice");
        const divider = document.getElementById("divider");
        const button = document.getElementById("btn-generator");

        id.textContent = "advice # " + advice.slip.id;
        h2.textContent = `“` + advice.slip.advice + `”`;

        id.classList.add("id");

        card.append(id, h2, divider, button);
    }
    

