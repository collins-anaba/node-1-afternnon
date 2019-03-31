const express = require('express')
const app = express()
const products = require('./products')
const getProducts = require('./getProducts')


app.get('/api/products/:id', (req, res) =>{
   if(req.params.id){
       const byid = products.filter(item => item.id === +req.params.id)
        if(byid.length === 0) {
            res.json({error:'item not in list'})
        } else {
            res.json(byid)
        }
    }
})

app.get('/api/products', (req,res) => {
    console.log(req.query)
    if(req.query.price){
        const theprice = products.filter(item => item.price >= +req.query.price)
        res.json(theprice)
    }
    res.json(products)
})

app.listen(5050, ()=> console.log('hit'))

