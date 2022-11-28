// ---- SERVER ----
// importo modulo express e assegno la costante app
const { json } = require("body-parser");
const express = require("express");
const app = express();

// importo modulo calcolatrice
const calcolatrice = require("./src/modulo_calcolatrice"); 

// rendo disponibile al lato client la cartella public
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));


// avvio server su porta 3000 su terminale (npm start)
app.listen(3000, ()=>{
    console.log("Server avviato sulla porta 3000");
});

// richiamo l'html dove è presente il form per la calcolatrice
app.get("/home", function (req, res) {
    res.sendFile("index.html", {root: __dirname + "/src"})
});

// calcolatrice con le operazioni
app.get("/calcolatrice" , function(req, res) {
    console.log(req.query);
    let par1 =  req.query.param1;
    let par2 = req.query.param2;
    let par3 = req.query.param3;
    let result;

    switch (par3) {
        case "somma": result = calcolatrice.somma(par1, par2);
                      res.status(200).json({risultato: result});
            break;
        case "sottrazione": result = calcolatrice.sottrazione(par1, par2);
                            res.status(200).json({risultato: result});
            break;
        case "moltiplicazione": result = calcolatrice.moltiplicazione(par1, par2);
                                res.status(200).json({risultato: result});
            break;
        case "divisione": result = calcolatrice.divisione(par1, par2);
                          res.status(200).json({risultato: result});
            break;
        case "modulo": result = calcolatrice.modulo(par1, par2);
                       res.status(200).json({risultato: result});
            break;
        default: console.log("Orrore! ops.. Errore!");
    }
});