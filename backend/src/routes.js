const routes = require("express").Router();

const UsuarioController = require("./controllers/UsuarioController");
const AtivosController = require("./controllers/AtivosController");

const CadastroUsuarioValidation = require("./validations/CadastroUsuarioValidation");
const LoginValidation = require("./validations/LoginValidation");
const MudarSenhaValidation = require("./validations/MudarSenhaValidation");
const CadastroAtivoValidation = require("./validations/CadastroAtivoValidation");

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
routes.put("/ativos", authMiddleware, AtivosController.update);

module.exports = routes;
