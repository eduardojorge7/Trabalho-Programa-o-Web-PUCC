const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());
server.use(express.static('C:/Users/User/Desktop/Trab Alisson'));


server.post('/main', function(req, res){   /*redireciona para a pagina main */
    console.log(req.body.usuario);
    console.log(req.body.senha);
    res.redirect('/main.html');
})

server.listen(3000, ()=>{
    console.log('servidor rodando...');
})

