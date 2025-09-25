/**
 * ex07_api_games.js
 * API REST simples de clientes e jogos usando Express.
 * Rotas:
 *   GET    /                     -> "Bem vindo a API games"
 *   POST   /cadastrar_clientes   -> cria cliente { nome, email }
 *   POST   /cadastrar_jogos      -> cria jogo { titulo, plataforma: 'PS5' | 'Nintendo Switch' }
 *   GET    /exibe_clientes       -> lista clientes
 *   GET    /exibe_jogos          -> lista jogos
 *   DELETE /deletar_clientes/:id -> remove cliente por id
 *   DELETE /deletar_jogos/:id    -> remove jogo por id
 *
 * Como rodar:
 *   1) npm i express
 *   2) node ex07_api_games.js
 *   3) Teste com curl/Insomnia/Postman (exemplos no final).
 */

const express = require("express");
const app = express();
app.use(express.json()); // habilita JSON no corpo das requisições

const PORT = process.env.PORT || 3001;

/**
 * "Modelos" em memória.
 * Clientes e Jogos mantêm arrays internos e um contador incremental de IDs.
 * Em produção, isso seria um banco de dados.
 */
class Clientes {
  constructor() {
    this._dados = []; // cada item: { id, nome, email }
    this._seq = 1;
  }

  /**
   * Valida entradas mínimas e cria um novo cliente.
   */
  add({ nome, email }) {
    if (!nome || !email) throw new Error("Informe nome e email.");
    const novo = { id: this._seq++, nome: String(nome).trim(), email: String(email).trim() };
    this._dados.push(novo);
    return novo;
  }

  /**
   * Retorna uma cópia da lista para evitar mutações externas.
   */
  list() {
    return [...this._dados];
  }

  /**
   * Remove cliente por id, retornando o registro removido.
   */
  del(id) {
    const i = this._dados.findIndex((c) => c.id === id);
    if (i === -1) throw new Error("Cliente não encontrado.");
    return this._dados.splice(i, 1)[0];
  }
}

class Jogos {
  constructor() {
    this._dados = []; // cada item: { id, titulo, plataforma }
    this._seq = 1;
  }

  /**
   * Valida título e plataforma e cria jogo.
   * Aceita apenas "PS5" e "Nintendo Switch" (normalizado).
   */
  add({ titulo, plataforma }) {
    const pf = String(plataforma || "").toUpperCase();
    if (!titulo || !pf) throw new Error("Informe título e plataforma.");
    if (!["PS5", "NINTENDO SWITCH"].includes(pf)) {
      throw new Error("Plataforma inválida. Use 'PS5' ou 'Nintendo Switch'.");
    }
    const novo = { id: this._seq++, titulo: String(titulo).trim(), plataforma: pf };
    this._dados.push(novo);
    return novo;
  }

  list() {
    return [...this._dados];
  }

  del(id) {
    const i = this._dados.findIndex((j) => j.id === id);
    if (i === -1) throw new Error("Jogo não encontrado.");
    return this._dados.splice(i, 1)[0];
  }
}

/* ===== Instâncias ===== */
const clientes = new Clientes();
const jogos = new Jogos();

/* ===== Rotas ===== */

/**
 * Rota raiz: serve como "ping" da API.
 */
app.get("/", (req, res) => res.send("Bem vindo a API games"));

/**
 * Cadastra um cliente.
 * Exemplo de body:
 * { "nome": "João", "email": "joao@example.com" }
 */
app.post("/cadastrar_clientes", (req, res) => {
  try {
    const novo = clientes.add(req.body);
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * Cadastra um jogo.
 * Exemplo de body:
 * { "titulo": "Spider-Man 2", "plataforma": "PS5" }
 * { "titulo": "Zelda TOTK",   "plataforma": "Nintendo Switch" }
 */
app.post("/cadastrar_jogos", (req, res) => {
  try {
    const novo = jogos.add(req.body);
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * Lista todos os clientes cadastrados.
 */
app.get("/exibe_clientes", (req, res) => res.json(clientes.list()));

/**
 * Lista todos os jogos cadastrados.
 */
app.get("/exibe_jogos", (req, res) => res.json(jogos.list()));

/**
 * Deleta cliente pelo id (param de rota).
 */
app.delete("/deletar_clientes/:id", (req, res) => {
  try {
    const removido = clientes.del(Number(req.params.id));
    res.json(removido);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

/**
 * Deleta jogo pelo id (param de rota).
 */
app.delete("/deletar_jogos/:id", (req, res) => {
  try {
    const removido = jogos.del(Number(req.params.id));
    res.json(removido);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

/* ===== Inicialização do servidor ===== */
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));

/* ===== Exemplos de teste (PowerShell/CMD) =====
curl http://localhost:3001/

curl -X POST http://localhost:3001/cadastrar_clientes ^
 -H "Content-Type: application/json" ^
 -d "{\"nome\":\"João\",\"email\":\"joao@example.com\"}"

curl -X POST http://localhost:3001/cadastrar_jogos ^
 -H "Content-Type: application/json" ^
 -d "{\"titulo\":\"Spider-Man 2\",\"plataforma\":\"PS5\"}"

curl -X POST http://localhost:3001/cadastrar_jogos ^
 -H "Content-Type: application/json" ^
 -d "{\"titulo\":\"Zelda: TOTK\",\"plataforma\":\"Nintendo Switch\"}"

curl http://localhost:3001/exibe_clientes
curl http://localhost:3001/exibe_jogos

curl -X DELETE http://localhost:3001/deletar_clientes/1
curl -X DELETE http://localhost:3001/deletar_jogos/1
*/
