const express = require('express')
const products = express.Router()
const Product = require('../models/Product')

products.get('/', (req, res)=>{
    Product.findAll()
    .then(product => {
        if (product) {
          res.send(product);
        } else {
          res.send('product does not exist');
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })



module.exports = products;