const container = document.getElementById("container");
const card = document.getElementById("card");
const id = document.querySelector("h5");
const title = document.querySelector("h1");
const text = document.querySelector("p");

// const loading = document.querySelector(".loading");
// loading.classList.add("active");
// loading.classList.remove("active"); 


let i = 1;

let result = `https://jsonplaceholder.typicode.com/posts/${i}`;

fetch(result)
.then((res) => res.json())
.then((res) => displayPost(res))
.catch((err) => console.log(err))

const displayPost = (post) => {  
    title.textContent = post.title;
    id.textContent = "# " + post.id
    text.textContent = post.body
    card.append(id, title, text);
    container.append(card);
}

const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const divBtns = document.getElementById("btns");
container.appendChild(divBtns);


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
