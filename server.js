const express = require("express");
const mongoose = require("mongoose")
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());

//Iniciando o Banco de dados
mongoose.connect(
    'mongodb://localhost:27017/noticeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true}
);

requireDir('./src/models');

//Primeira Rota
app.use('/api', require("./src/routes"));

app.listen(3001, function(){
    console.log("Server: online");
});
