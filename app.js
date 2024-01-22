const express = require('express');
const app = express();
const handlebars = require('express-handlebars')

//config
    //template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Conexão com o banco de dados
        const Sequelize = require('sequelize');
        const sequelize = new Sequelize('test', 'root', 'Kaiky&17', {
            host: 'localhost',
            dialect: 'mysql'
        });

//rotas
    app.get('/cad', function(req, res){
        res.render('form')
    })

    app.post('/add', function(req, res){
        res.send("Formulário recebido")
    })

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})