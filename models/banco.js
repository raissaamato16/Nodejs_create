const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql",
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

sequelize.authenticate().then(function() {
    console.log("Conexão com o banco realizada.")
}).catch(function(erro) {
    console.log("Ocorreu um erro: "+erro)
})