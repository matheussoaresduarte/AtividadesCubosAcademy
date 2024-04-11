const express = require('express');
const {Pool } = require('pg');

const app = express();

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '06041954',
    database: 'aula_conexao_node_pg'
});

app.use(express.json());

app.get ('/', async (req, res) => {
    
    try {
        
        const resultado = await pool.query('SELECT * FROM empresas');

        return res.json(resultado);
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3000);
