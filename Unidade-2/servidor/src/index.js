const express = require('express');

const app = express();

app.get('/', (req, res) => {
    app.send("olá, seja bem vindo ao meu primeiro servidor.");
});

app.listen(3000);