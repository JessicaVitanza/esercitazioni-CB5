const calcolatrice = require('./src/controller/calcolatrice');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("server in esecuzione sulla porta 3000");
});


// SOMMA
app.get('/pagina_somma', function (req, res) {
    res.sendFile('somma.html', {root: __dirname + "/src/html"});
});

app.get('/somma', function (req, res) {
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    risultato = calcolatrice.somma(param1, param2);
    console.log("il risultato di somma è : " + risultato);
    res.status(200).send('' + risultato);
})

//SOTTRAZIONE
app.get('/pagina_sottrazione', function (req, res) {
    res.sendFile('sottrazione.html', {root: __dirname + "/src/html"});
});

app.get('/sottrazione', function (req, res) {
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    risultato = calcolatrice.sottrazione(param1, param2);
    console.log("il risultato di sottrazione è : " + risultato);
    res.status(200).send('' + risultato);
})

//MOLTIPLICAZIONE
app.get('/pagina_moltiplicazione', function (req, res) {
    res.sendFile('moltiplicazione.html', {root: __dirname + "/src/html"});
});

app.get('/moltiplicazione', function (req, res) {
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    risultato = calcolatrice.moltiplicazione(param1, param2);
    console.log("il risultato di moltiplicazione è : " + risultato);
    res.status(200).send('' + risultato);
})

//DIVISIONE
app.get('/pagina_divisione', function (req, res) {
    res.sendFile('divisione.html', {root: __dirname + "/src/html"});
});

app.get('/divisione', function (req, res) {
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    risultato = calcolatrice.divisione(param1, param2);
    console.log("il risultato di divisione è : " + risultato);
    res.status(200).send('' + risultato);
})