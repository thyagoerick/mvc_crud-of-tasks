const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

// Apenas checka a conexão, como um "ping", mas não mantém/persiste nada no banco
// Checando a conexão com o método authenticate;
try{
    sequelize.authenticate();
    console.log('Conectamos ao MySQL com Sequelize!')
} catch(error){
    console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize