const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Simulação de armazenamento de usuários
let users = [];

// Rota para registrar um usuário
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    users.push({ username, email, password });
    res.status(201).send('Usuário registrado com sucesso!');
});

// Rota para login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('Login realizado com sucesso!');
    } else {
        res.status(401).send('Usuário ou senha incorretos.');
    }
});

// Rota para fazer uma aposta
app.post('/bet', (req, res) => {
    const { amount } = req.body;
    // Simulação de lógica de aposta
    res.send(`Aposta de R$${amount} realizada com sucesso!`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
