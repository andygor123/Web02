const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const Users = require('./routes/Users');
const Products = require('./routes/Products')
const port = process.env.PORT || 4001

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use('/users', Users);
app.use('/products', Products);

app.listen(port, function() {
  console.log('Server is running on port: ' + port);
})