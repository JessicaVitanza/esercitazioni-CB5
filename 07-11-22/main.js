fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((users) => users.map((data) => console.log( `Name: ${data.name} \n Address: ${Object.values(data.address)} \n City: ${data.address.city}`)))
.catch((err) => console.log(`Error: ${err}`))


fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((todos) => todos.map((data) => console.log(`ID: ${data.id} \n Titolo: ${data.title}`)))
.catch((err) => console.log(`Error: ${err}`));
