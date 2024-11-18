const express = require("express");
const { login, protectedContent, conteudoProtegido, conteudoProtegido2 } = require("./controllers/authController");

const router = express.Router();

// Rota pública
router.get("/", (request, response) => {
  response.json({ message: "Endpoint que não exige autenticação!" });
});

// Rota de login
router.post("/login", login);

// Rota protegida
router.get("/protected", protectedContent);

//ROTA NOVA PROTEGIDA
router.get("/protegido1", conteudoProtegido);

router.get("/protegido2", conteudoProtegido2);

module.exports = router;
