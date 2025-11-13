const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const gamesRoutes = require('./routes/games');
const path = require('path');

const app = express();

// Conectar ao MongoDB
mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas
app.use('/api/games', gamesRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
