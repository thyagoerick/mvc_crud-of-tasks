// Import express
const express = require('express')
const app = express()
// Import express-handlebars
const exphbs = require('express-handlebars')
// Import do conn para conexão do MySQL com Sequelize
const conn = require('./db/conn')

/*****************IMPORT MODELS****************/
const Task = require('./models/Task')
/**********************************************/

/*****************IMPORT ROUTES****************/
const tasksRoutes = require('./routes/tasksRoutes')
/**********************************************/

/**************CONFIGURAÇÕES APP****************/
// Configurar Express para poder pegar o body dos forms (middleware)
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())//Obter o dado do body em json()
// Config partials
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})
// Config handlebars (com partials)
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
// Config styles
app.use(express.static('public'))

app.use('/tasks', tasksRoutes)//significa que o middleware tasksRoutes será acionado para qualquer requisição cujo caminho comece com '/tasks'.
/***********************************************/



/********************SERVER*********************/
conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch(err => console.log(err))


/***********************************************/