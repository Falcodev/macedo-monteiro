const routes = require("express").Router();
const multer = require("multer");

const multerConfig = require("./config/multer");
const uploadFile = require("./services/uploadFile");

const UsuarioController = require("./controllers/UsuarioController");
const AtivosController = require("./controllers/AtivosController");
const PendenciasController = require("./controllers/PendenciasController");
const ChatController = require("./controllers/ChatController");
const VoteController = require("./controllers/VoteController");
const ContasReceberController = require("./controllers/ContasReceberController");
const ContasPagarController = require("./controllers/ContasPagarController");
const ClienteController = require("./controllers/ClienteController");
const GrupoController = require("./controllers/GrupoController");
const ResultadosController = require("./controllers/ResultadosController");

const CadastroUsuarioValidation = require("./validations/Usuario/CadastroUsuarioValidation");
const LoginValidation = require("./validations/Usuario/LoginValidation");
const MudarSenhaValidation = require("./validations/Usuario/MudarSenhaValidation");
const CadastroAtivoValidation = require("./validations/Ativos/CadastroAtivoValidation");
const UpdateAtivoValidation = require("./validations/Ativos/UpdateAtivoValidation");
const PendenciasValidation = require("./validations/Pendencias/PendenciasValidation");
const CadastroContasReceberValidation = require("./validations/Contas/CadastroContasReceberValidation");
const ConfirmarContasReceberValidation = require("./validations/Contas/ConfirmarContasReceberValidation");
const CadastroContasPagarValidation = require("./validations/Contas/CadastroContasPagarValidation");

const authMiddleware = require("./middlewares/auth");

// Usuario
routes.post("/register", CadastroUsuarioValidation, UsuarioController.create);
routes.post("/login", LoginValidation, UsuarioController.login);
routes.get("/user", UsuarioController.get);
routes.get("/todos/user", UsuarioController.index);
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

// Grupo de Ativos
routes.post("/grupo", authMiddleware, GrupoController.create);
routes.get("/grupo", authMiddleware, GrupoController.get);
routes.get("/todos/grupo", authMiddleware, GrupoController.index);

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

// Contas a receber
routes.post(
  "/contas/receber",
  CadastroContasReceberValidation,
  authMiddleware,
  ContasReceberController.create
);
routes.get("/contas/receber", authMiddleware, ContasReceberController.get);
routes.get(
  "/todos/contas/receber",
  authMiddleware,
  ContasReceberController.index
);
routes.put(
  "/contas/receber",
  ConfirmarContasReceberValidation,
  authMiddleware,
  ContasReceberController.complete
);

// Contas a pagar
routes.post(
  "/contas/pagar",
  CadastroContasPagarValidation,
  authMiddleware,
  ContasPagarController.create
);
routes.get("/contas/pagar", authMiddleware, ContasPagarController.get);
routes.get("/todos/contas/pagar", authMiddleware, ContasPagarController.index);
routes.put("/contas/pagar", authMiddleware, ContasPagarController.complete);

// Clientes
routes.post("/clientes", authMiddleware, ClienteController.create);
routes.put("/clientes", authMiddleware, ClienteController.update);
routes.get("/clientes", authMiddleware, ClienteController.get);
routes.get("/todos/clientes", authMiddleware, ClienteController.index);

// Resultados
routes.post(
  "/resultados",
  multer(multerConfig).single("file"),
  ResultadosController.create
);
routes.get("/resultados", authMiddleware, ResultadosController.get);
routes.get("/todos/resultados", authMiddleware, ResultadosController.index);

module.exports = routes;
