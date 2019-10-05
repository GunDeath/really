const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/porduct');
const Cart = require('../models/cart');
const groupCart = require('../models/groupcart');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//adding arrays
const group = []
const carts = []

//adding function unique array
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

//home page of site
router.get('/', forwardAuthenticated, (req, res) =>{ 
    res.render('welcome');
});

//home page users
router.get('/homepage', ensureAuthenticated,function (req, res){
    let unique = group.filter( onlyUnique );
    const usr = req.user;
    const id = usr.id;
    
    User.findOne({_id: id}, function(err, foundObject){
      if(foundObject){
        if(unique.length == 0){
          foundObject.groupName = 'You have not group';
        }
        foundObject.save(function(err, updatedObject){ 
          res.render('homepage', {
            user: updatedObject, 
            groups : unique
            });  
        })
      }
    })
});


//create group
router.post('/grouplist',function (req, res){
  const usr = req.user;
  const id = usr.id;

  group.push(req.body.groupName);

  User.findOne({_id: id}, function(err, foundObject){
    if(foundObject){
      if(req.body.groupName)
        foundObject.groupName = req.body.groupName

      foundObject.save() 
      }
  })
  User.find({groupName: req.body.groupName}, function(err, users) {
    if(err){
      res.send('something went really wrong!!');
      next();
    }
    Product.find({}, function(err, products)
    {
      res.render('grouplist', { 
        user: usr, 
        groups : req.body.groupName, 
        users:users,
        products: products
      });
    })
  });
})

// list of products ad users group
router.get('/grouplist', (req, res) => {
  const usr = req.user;

  User.find({groupName: req.body.groupName}, (err, users) => {
    if(err){
      res.send('Somethinf is WRONG!!!');
      next();
    }
    Product.find({}, function (err, products){
      res.render('grouplist', {
        user: usr,
        groups: req.body.groupName,
        users: users,
        products: products
      })
    })
  })
})

//add products to group cart
router.get('/add_group_cart/:id', (req, res) => {
  let productID = req.params.id;
  const usr = req.user;

  Product.findById(productID, (err, product) => {
    if(err){
      return res.redirect('/homepage');
    }
    carts.push(new groupCart(product.titleProduct, product.price, usr.groupName));
    console.log(carts)
    res.redirect('/grouplist');
  })
})

//show group cart
router.get('/group_cart', (req, res) => {
  const usr = req.user;
  res.render('groupcart', {cart: carts, groups: usr.groupName});
})

//add products ro user cart
router.get('/add_to_cart/:id', (req, res) => {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart.items : {});

  Product.findById(productId, (err, product) => {
    if(err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/grouplist');
  })
})

//show user cart
router.get('/cart', (req, res) => {
  if(!req.session.cart){
    return res.render('cart', {products: null});
  }
  let cart = new Cart(req.session.cart.items);
  res.render('cart', {products: cart.generateArray(), totalPrice: cart.totalPrice})
})


module.exports = router;
