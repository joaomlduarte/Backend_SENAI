import { Router } from "express";
import Book from "../models/Book.js";

const router = Router();

// CREATE - POST /books
router.post("/", async (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title || !author || typeof year === "undefined") {
      return res.status(400).json({ error: "title, author e year são obrigatórios" });
    }
    const book = await Book.create({ title, author, year: Number(year) });
    return res.status(201).json(book);
  } catch (err) {
    return res.status(500).json({ error: "Erro ao criar book", detail: err.message });
  }
});

// READ ALL - GET /books
router.get("/", async (_req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.json(books);
  } catch (err) {
    return res.status(500).json({ error: "Erro ao listar books", detail: err.message });
  }
});

// READ ONE - GET /books/:id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book não encontrado" });
    return res.json(book);
  } catch (err) {
    return res.status(400).json({ error: "ID inválido" });
  }
});

// UPDATE - PUT /books/:id (substitui todos os campos)
router.put("/:id", async (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title || !author || typeof year === "undefined") {
      return res.status(400).json({ error: "title, author e year são obrigatórios" });
    }
    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year: Number(year) },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Book não encontrado" });
    return res.json(updated);
  } catch (err) {
    // se o ID for malformado, cai aqui
    return res.status(400).json({ error: "Falha ao atualizar", detail: err.message });
  }
});

// DELETE - DELETE /books/:id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Book não encontrado" });
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: "ID inválido" });
  }
});

export default router;
