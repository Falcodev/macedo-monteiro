const routes = require("express").Router();

const UsuarioController = require("./controllers/UsuarioController");

const CadastroUsuarioValidation = require("./validations/CadastroUsuarioValidation");
const LoginValidation = require("./validations/LoginValidation");

const authMiddleware = require("./middlewares/auth");

routes.post("/register", CadastroUsuarioValidation, UsuarioController.create);
routes.post("/login", LoginValidation, UsuarioController.login);

module.exports = routes;
