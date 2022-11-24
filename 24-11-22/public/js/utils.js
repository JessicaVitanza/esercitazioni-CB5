const formElement = document.forms.formEl.elements;
console.log(formElement);

const resEl = document.querySelector("h2");

const GET = async (url) => { 
    await fetch(url)
        .then((res) => res.json())
        .then((data) => resEl.textContent = `Risultato: ${data}`);
    }

const btn = formElement.btnCalc;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
});