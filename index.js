const express = require("express");
const app = express();


app.get("/",(res,send) => {
    res.send("Servidor iniciado com sucesso!");
});

app.listen(8080, () => {
    console.log("App iniciado!");
});

