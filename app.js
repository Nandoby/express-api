require('dotenv').config();
const {PORT} = process.env;
const router = require('./routes');

const express = require('express');
const pagination = require('./middlewares/pagination.middleware')
require('express-async-errors');

const app= express();

app.use(express.json())

const db = require('./models')

db.sequelize.authenticate()
    .then(() => console.log('ça a marché copaing !'))
    .catch((err) => console.log('CPT !!!' + err))

// db.sequelize.sync({force : true})
// db.sequelize.sync({alter : {drop : false}})

app.use('/api', router);

app.use((err, req, res, next) => {
    res.status(422).send({error: err})
})

app.listen(PORT, () => {
    console.log( `Server listen on localhost:${ PORT }` );
});