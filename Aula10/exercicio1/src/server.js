import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


// "Banco" em memória
let livros = []; //{id, titulo, autor, ano}
let nextId = 1;

// HEALTHCHECK
app.get("/", (req, res) => {
    res.json({ok: true, api:"Livros v1"});
});


// CREATE - POST /livros
app.post("/livros", (req, res) => {
    const {titulo, autor, ano} = req.body;

    if(!titulo || !autor || !ano){
        return res.status(400).json({ erro: "titulo, autor e ano são obrigatórios"})
    }
    const novo
})