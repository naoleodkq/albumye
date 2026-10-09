const express = require('express');
const path = require('path');
const app = express();

// serve a pasta public
app.use(express.static(path.join(__dirname, 'public')));

// lê o corpo json das requisições post
app.use(express.json());

// lista guardada na memória do servidor
let lista = ['Item 1', 'Item 2', 'Item 3'];

// get: devolve a lista
app.get('/api/lista', (req, res) => res.json({ lista }));

// post: adiciona um item na lista
app.post('/api/lista', (req, res) => {
    if (req.body.item) lista.push(req.body.item);
    res.json({ status: 'sucesso', lista });
});

app.listen(3000, () => console.log('Olá!!!'));
