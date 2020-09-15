const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

const authConfig = require("../config/auth");

module.exports = {
  // Criar um novo usuário
  async create(request, response) {
    // Recebe um email
    const { email } = request.body;

    // Testa se o usuário já existe, se sim, retorna um erro
    try {
      if (await Usuario.findOne({ email }))
        return response.status(400).send({ error: "Usuário já existe." });

      // Cria um usuário
      const user = await Usuario.create(request.body);
      user.password = undefined;

      return response.send({ user });
    } catch (err) {
      console.log(err);
      // Caso ocorra algum erro, retorna um erro
      return response.status(400).send({ error: "Erro no cadastro. " });
    }
  },

  // Fazer login
  async login(request, response) {
    // Recebe o usuário e a senha
    const { email, senha } = request.body;
    // Procura o usuário no banco
    const user = await Usuario.findOne({ email }).select("+senha");

    // Se o usuário não existe, retorna um erro
    if (!user)
      return response.status(400).send({ error: "Usuário não encontrado." });

    if (!(await bcrypt.compare(senha, user.senha)))
      return response.status(400).send({ error: "Senha incorreta. " });

    user.senha = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret);

    return response.send({ user, token });
  },
};
