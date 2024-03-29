const express = require('express');

const app = express();

let rodando = false;
let minutos = 0;
let segundos = 0;

let setIntervalDisparado = false;

function inicarCronometro() {
    rodando = true;

    if(!setIntervalDisparado){
        setInterval(() => {
            if(rodando){
                if(segundos === 59){
                    segundos = 0;
                    minutos++;
                }else{
                    segundos++;
                }
            };
        }, 1000);
    
        setIntervalDisparado = true;
    };
};


app.get('/', (req, res) => {
    return res.send(` Tempo atual do cronometro: ${minutos} minutos e ${segundos} segundos.`);
});

app.get('/iniciar', (req, res) => {
    inicarCronometro();
    return res.send(`Cronometro iniciado!`);
});

app.get('/pausar', (req, res) => {
    rodando = false;
    return res.send(`Cronometro iniciado!`);
});

app.get('/continuar', (req, res) => {
    rodando = true;
    return res.send(`Cronometro continuado!`);
});

app.get('/zerar', (req, res) => {});


