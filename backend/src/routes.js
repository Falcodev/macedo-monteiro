const routes = require("express").Router();

const UsuarioController = require("./controllers/UsuarioController");
const AtivosController = require("./controllers/AtivosController");
const PendenciasController = require("./controllers/PendenciasController");
const ChatController = require("./controllers/ChatController");
const VoteController = require("./controllers/VoteController");
const ContasReceberController = require("./controllers/ContasReceberController");

const CadastroUsuarioValidation = require("./validations/Usuario/CadastroUsuarioValidation");
const LoginValidation = require("./validations/Usuario/LoginValidation");
const MudarSenhaValidation = require("./validations/Usuario/MudarSenhaValidation");
const CadastroAtivoValidation = require("./validations/Ativos/CadastroAtivoValidation");
const UpdateAtivoValidation = require("./validations/Ativos/UpdateAtivoValidation");
const PendenciasValidation = require("./validations/Pendencias/PendenciasValidation");
const CadastroContasReceberValidation = require("./validations/Contas/CadastroContasReceberValidation");
const ConfirmarContasReceberValidation = require("./validations/Contas/ConfirmarContasReceberValidation");

const authMiddleware = require("./middlewares/auth");

// Usuario
routes.post("/register", CadastroUsuarioValidation, UsuarioController.create);
routes.post("/login", LoginValidation, UsuarioController.login);
routes.get("/user", UsuarioController.get);
routes.put(
  "/user",
  MudarSenhaValidation,
  authMiddleware,
  UsuarioController.redefinirSenha
);

// Ativos
routes.post(
  "/ativos",
  CadastroAtivoValidation,
  authMiddleware,
  AtivosController.create
);
routes.put(
  "/ativos",
  UpdateAtivoValidation,
  authMiddleware,
  AtivosController.update
);
routes.get("/ativos", authMiddleware, AtivosController.get);
routes.delete("/ativos", authMiddleware, AtivosController.delete);
routes.get("/todos/ativos", authMiddleware, AtivosController.index);

// Pendências
routes.post(
  "/pendencias",
  PendenciasValidation,
  authMiddleware,
  PendenciasController.create
);
routes.get("/todos/pendencias", authMiddleware, PendenciasController.index);
routes.get("/pendencias", authMiddleware, PendenciasController.get);
routes.put("/pendencias", authMiddleware, VoteController.vote);

// Chat
routes.put("/chat", authMiddleware, ChatController.send);
routes.get("/chat", authMiddleware, PendenciasController.get);

// Contas a receber
routes.post(
  "/contas/receber",
  CadastroContasReceberValidation,
  authMiddleware,
  ContasReceberController.create
);
routes.get("/contas/receber", authMiddleware, ContasReceberController.index);
routes.put(
  "/contas/receber",
  ConfirmarContasReceberValidation,
  authMiddleware,
  ContasReceberController.complete
);

module.exports = routes;
