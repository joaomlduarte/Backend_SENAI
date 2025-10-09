import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import booksRouter from "../routes/books";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Healthcheck
app.get("/", (_req, res) => {
  res.json({ ok: true, api: "Library API v1" });
});

// Rotas
app.use("/books", booksRouter);

// Conexão Mongo e start do servidor
const { MONGODB_URI, PORT = 3000 } = process.env;

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: undefined // opcional quando já vem no URI
    });
    console.log("MongoDB conectado");
    app.listen(PORT, () => {
      console.log(`API rodando em http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" Erro ao conectar no MongoDB:", err.message);
    process.exit(1);
  }
}

start();
