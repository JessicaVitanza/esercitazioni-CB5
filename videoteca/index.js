// ---- SERVER ----
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.listen(3000, ()=>{
    console.log("Server avviato sulla porta 3000");
});

// ---- IMPORT FILE ----
const { readFileSync, writeFileSync } = require("fs");

// ---- LISTA ATTORI ----
app.get("/attori", function(req, res){
    const attori = JSON.parse(readFileSync('./src/attori.json', 'utf8'));

    const array_attori = attori.map((att) => {
        // const id = att.id;
        // const nome = att.nome;
        // const cognome = att.cognome;
        const {id, nome, cognome} = att;
        return {id, nome, cognome};
    })
        res.json(array_attori)
});

// ---- FUNZIONALITA' ATTORI ----
// ---- LEGGO ----
app.get("/attore", function(req, res) {
    const id_attore = parseInt(req.query.id);
    const attori = JSON.parse(readFileSync('./src/attori.json', 'utf8'));
    const attore = attori.find((attore) => {
    return attore.id == id_attore
})
    res.json(attore);
});

// ---- CREO ----
app.post("/attore", function(req, res) {
    const nuovo_attore = {
        "id": parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita,
        "in_attivita": req.body.in_attivita
    }
    
    const attori = JSON.parse(readFileSync('./src/attori.json', 'utf8'));
    const index = Number(nuovo_attore.id)-1;
    console.log("Nuovo indice: " + index);
    attori[index] = nuovo_attore;
    console.log(attori);
    res.status(200).send("Attore creato")
});

// ---- MODIFICO ----
app.put("/attore", function(req, res) {
    res.status(200).send("Attore aggiornato")
});

// ---- ELIMINO ----
app.delete("/attore", function(req, res) {
    res.status(200).send("Attore eliminato")
});

