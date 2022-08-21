const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const axios = require('axios');
const { cp } = require('fs');

//View Engine
app.set("view engine", "ejs");

//Arquivos Estáticos
app.use(express.static(path.join(__dirname, '/public')));

// Rotas
app.get("/", (req, res) => {
  res.render("Login");
});

app.get("/Inicio", (req, res) => {
  res.render("Inicio");
});

app.get("/Perfil", (req, res) => {
  res.render("Perfil");
});

app.get("/Configuracoes", (req, res) => {
  res.render("Configurações");
});

app.get("/Produtos", async (req, res) => {
  
  const produtos = await axios.get('http://fixsystem.ddns.net:8096/rest/produtos');

  // console.log(produtos);

  res.render("Produtos",{
    produtos: produtos
  });

});

app.get("/Carrinho", (req, res) => {
  const produtos = await axios.get('http://fixsystem.ddns.net:8096/rest/produtos');
  res.render("Carrinho");
});

app.get("/Registro", (req, res) => {
  res.render("Registro");
});

app.get("/esqueci-minha-senha", (req, res) => {
  res.render("Esqueci-minha-Senha");
});

app.listen(PORT, () => {
  console.log("Servidor iniciado em http://localhost:" + PORT);
});

//Data Base
(async () => {
  const database = require("./database/database");

  try {
    const resultado = await database.sync();
    console.log('SQLite iniciado com sucesso!');
  } catch (error) {
    console.log(error);
  }
})();

