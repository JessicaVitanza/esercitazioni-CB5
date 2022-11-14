  // /**********************  loader ***********************/
  // const loader = document.querySelector('.preload');
  // const emoji = loader.querySelector('.emoji');
  
  // const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];
  
  // const interval = 125;
  
  // const loadEmojis = (arr) => {
  //     setInterval(() => {
  //       emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
  //       //console.log(Math.floor(Math.random() * arr.length))
  //     }, interval);
  // }
  
  // const init = () => {
  //   loadEmojis(emojis);
  // }
  // init();


// elementri presenti in HTML
const container = document.getElementById("container");
const card = document.getElementById("card");
const id = document.querySelector("h5");
const title = document.querySelector("h1");
const text = document.querySelector("p");

// prendo i dati dall'API 
let i = 1;

let result = `https://jsonplaceholder.typicode.com/posts/${i}`;

fetch(result)
.then((res) => res.json())
.then((res) => {
  displayPost(res);
  document.getElementById("loading").style.display = "none"
});



// creo la card dinamica
const displayPost = (post) => {  
    title.textContent = post.title;
    id.textContent = "# " + post.id
    text.textContent = post.body
    card.append(id, title, text);
    container.append(card);
}

// bottoni in HTML
const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const divBtns = document.getElementById("btns");
container.appendChild(divBtns);

// addEventListener al variare di i
next.addEventListener("click", () => {
    i++;
      
    result = `https://jsonplaceholder.typicode.com/posts/${i}`;
    
    fetch(result)
      .then((res) => res.json())
      .then((res) => displayPost(res));
      
      
if (i >= 10) next.disabled = true; 
if (i === 1) prev.disabled = true; 
else prev.disabled = false; 
});

prev.addEventListener("click", () => {
  if (i <= 2)  
  prev.disabled = true; 
  next.disabled = false; 
  i-- 
  result = `https://jsonplaceholder.typicode.com/posts/${i}`; 
  fetch(result) 
  .then((res) => res.json()) 
  .then((res) => displayPost(res)); 
      
});

  window.onload = prev.disabled = true;
