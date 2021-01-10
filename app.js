const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
//require('./helpers/init_redis')
const routes = require('./api/routes');

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app);

app.use(async (req, res, next) => {
  return res.status(404).send({message: "Page not found"});
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
