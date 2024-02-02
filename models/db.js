const { Sequelize } = require('sequelize');

// Conexão com banco
const sequelize = new Sequelize('postapp', 'root', '123456', {
    dialect: 'mysql',
    host: 'localhost'
})
sequelize.authenticate().then(function () {
    console.log('Conectado ao servidor!!!')
}).catch(function (erro) {
    console.log('Falha ao se conectar: ' + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}