import { somma, sottrazione, divisione, moltiplicazione } from "./calcolatrice.js";
import { GET, ce, qs } from "./utils.js";
import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) =>{

const my_url = url.parse(req.url, true).pathname;
const params = url.parse(req.url, true).query;
const {param1, param2} = params;
// console.log(param1, param2);

switch(my_url) {
  case "/home":
    res.write("Benvenuto nella Home!");
    break;
  case "/calcolatrice":
    const calcolatrice = fs.readFileSync('./html/calcolatrice.html');
    res.write(calcolatrice.toString());
    break;
  case "/somma":
    const dataSomma = fs.readFileSync('./html/somma.html');
    res.write(dataSomma.toString());
    res.write(`${somma(param1, param2)}`);
    break;
  case "/sottrazione":
    const dataSottr = fs.readFileSync('./html/sottrazione.html');
    res.write(dataSottr.toString());
      res.write(`${sottrazione(param1, param2)}`);
    break;
  case "/moltiplicazione":
    const dataMolt = fs.readFileSync('./html/moltiplicazione.html');
    res.write(dataMolt.toString());
      res.write(`${moltiplicazione(param1, param2)}`);
    break;
  case "/divisione":
    const dataDiv = fs.readFileSync('./html/divisione.html');
    res.write(dataDiv.toString());
      res.write(`${divisione(param1, param2)}`);
      break;
  case "/style.css":
     const style = fs.readFileSync('./style.css');
      res.write(style.toString());
    break;
  default: res.write("<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>HOME</a></p>");
}

res.end();

});


server.listen(3000);

console.log("server in ascolto");