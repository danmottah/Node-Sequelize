const Express = require('express')
const app = Express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config
//Template Engine
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Rotas
app.get('/cad', function (req, res) {
    res.render('formulario')
})

app.get('/', function(req, res){
    Post.findAll({order: [['id', 'ASC']]}).then(function(posts){
        // console.log(posts)
        res.render('home', {posts: posts})
    })
})

app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send('Houve um erro: ' + erro)
    })
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Post excluido!!!')
    }).catch(function(req, res){
        res.send('Post não excluido')
    })
})

//Servidor rodando
app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
})