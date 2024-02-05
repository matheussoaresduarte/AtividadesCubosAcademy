const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = 0;
app.get('/', (req,res) => {
     const nomeDoJogador = jogadores[contador];

     contador++;

     if(contador >= jogadores.length){
        contador = 0;
     };

     return res.send(`É a vez de ${nomeDoJogador} jogar.`);
     
});

app.listen(3000);