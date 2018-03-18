const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let cartItems = []

app.use(bodyParser());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE, OPTIONS")
    next();
});
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});
app.get(('/cart'), (req, res) => {
    res.send(cartItems)
})
app.post(('/cart'), (req, res) => {
    let newCart = cartItems
    newCart.push(req.body)
    cartItems = newCart
    console.log(cartItems)
    res.send(cartItems)
})
app.delete(('/cart'), (req, res) => {    
    let newCart = cartItems    
    let index = newCart.findIndex((e) => { return e.id === req.body.id });   
    oldCart = newCart.splice(index, 1)    
    res.send(cartItems)
})
