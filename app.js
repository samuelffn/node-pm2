const express = require("express");

// Iniciando o App
const app = express();
app.use(express.json());

// Rotas
app.use("/api", (req, res) => {
    res.send('Samuel França');
}); 

// Setando a porta da aplicação
const port = 3001;
app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${3001}!`);
});