// api com utilização da OpenWeather
const express = require('express'); // Importa a biblioteca cors para permitir o acesso externo
const cors = require('cors'); // importa a biblioteca cors para permitir acesso externo
const axios = require('axios'); // importa a biblioteca axios
//require('dotenv').config(); // pega variáveis de ambiente
const app = express(); // instancia o servidor
const PORT = 3000; // porta que irá rodar a aplicação
const apiKey = '46feaf2d6f46008600418771836b4450';
//process.env.OPENWEATHER_API_KEY; // pega a variável da chave api no .env

app.use(cors()); // permite acesso externo a api

app.get('/weather', async(req,res)=>{
    const{city, country} = req.query; // armazena a cidade e o país quando faz a requisição

    // faz validação
    if(!city || !country){
        return res.status(400).json({error:'informe a cidade e o país'});
    }
    try {
        // requisição para pegar as condições climáticas de uma cidade
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=metric&lang=pr_br`);
        // Variável para armazenar a resposta da api
        const data = response.data;
        const temperature = data.main?.temp ??0;
        const humidity = data.main?.humidity ??0;
        const windSpeed = data.wind?speed? data.wind.speed *3.6 :0;
        const rainChance = data.rain?.['1h'] ?? 0;
        const weatherCondition = data.weather?.[0]?.descripition ?? 'Desconhecido';

        res.json({temperature,humidity,windSpeed,rainChance,weatherCondition});
    }catch(err){
        if(err.response?.status==404){
            return res.status(404).json({error:'Cidade não encontrada'});
        }
        res.status(500).json({error: 'Erro ao obter dados do clima'});
    }
});

app.listen(PORT,()=>console.log(`Servidor rodando em http://localhost:${PORT}/`));