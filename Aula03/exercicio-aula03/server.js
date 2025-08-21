 // Codigo api simples aula 20/08/2025

 // 1 importa o Express

 const express = require('express');

 // 2 Cria uma instancia do Express

 const app = express();

 // 3 Define a porta onde a API ira rodar
 const port = 3002;
 // Adiciona uma lista para armazenar  os dados de forma temporaria
 let dados =[];
 // 4 Middleware para permitir que o servidor lide com requisições no formato JSON
 app.use(express.json());
 // 5 Criação da rota get na raiz(/) que responde com uma mensagem simples
 // req - requisição
 // res de resposta 
 app.get('/',(req,res)=>{
    res.send('Sistema planta 4.0');
    
 });

 app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});

// Rota para cadastro do produto
 app.post('/exibeprodutos',(req,res)=>{
    const {nome_produto,quantidade} = req.body;
    res.send(`nome produto: ${nome_produto},quantidade ${quantidade}`);
    if(!nome_produto || !quantidade){
        return res.status(400).json({error:'Informe o nome do produto e a quantidade'})
    }
    const novo = {nome_produto,quantidade};
    dados.push(novo);
    res.status(201).json({message:'Dados salvos com sucesso !',data:novo})
 });

  // Rota get para exibir os dados

 app.get('/exibeprodutos',(req,res)=>{
    res.json(dados);
 })
