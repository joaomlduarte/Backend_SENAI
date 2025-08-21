// Código api simples aula 20/08/2025

// 1 Importar o Epress

const express = require('express')

// 2 Cria uma instância do Express

const app = express()

// 3 Define a porta onde a API irá rodar
const port = 3000;

// 4 Middleware para permitir que o servidor lde com requisições no formato JSON
app.use(express.json());

// 5 Criação da rota get na raiz (/) que responde com uma mensagem simples
// req - requisição
// res de resposta
app.get('/', (req, res) =>{
    res.send('Api funcionando');
    
});

// Cria uma segunda rota
app.get('/disciplina', (req, res) =>{
    
    res.send('Desenvolvimento Backend 2025 - Aula 03');
    
});

// 6 Inicia o sercidor e define que ele deve rodar na porta especificada 3000
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
})