const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = (request, response, next) => {
  // Pega o header "authorization" da requisição
  const authCabecalho = request.headers.authorization;

  // Se o cabeçalho não existe, retorna um erro
  if (!authCabecalho)
    return response.status(401).send({ error: "Não foi passado um token. " });

  // Checa se o cabeçalho tem duas partes "Bearer + $token"
  // Senão, retorna um erro
  const partes = authCabecalho.split(" ");

  if (!partes.length === 2)
    return response.status(401).send({ error: "Erro de token" });

  // Divide as duas partes do cabeçalho em "scheme" e "token"
  const [scheme, token] = partes;

  // Testa se o scheme se chama "Bearer"
  if (!/^Bearer$/i.test(scheme))
    return response.status(401).send({ error: "Token malformatted." });

  // Testa se o token é válido por meio da função verify do "jwt"
  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return response.status(401).send({ error: "Token inválido." });

    request.userId = decoded.id;
    return next();
  });

  return 0;
};
