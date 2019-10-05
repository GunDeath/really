var Product = require('../models/porduct');
var mongoose = require('mongoose');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("finish_db");
  var products = [
    new Product({
        imagePath: "http://u-f.ru/sites/default/files/styles/main_700/public/uploads/375477427.jpg?itok=JxWSurg0",
        titleProduct: 'Banana',
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis egestas metus, non posuere metus. Etiam non odio purus. Vivamus aliquam elit cursus lacus viverra eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et massa at leo congue ultricies sed id ex. Nulla facilisi. Maecenas iaculis quam tortor, vel molestie metus accumsan eu. Maecenas cursus ex justo, quis sodales nibh accumsan vel. Aenean auctor porta purus, ut faucibus odio dapibus vitae. Sed eu aliquam lacus, finibus cursus diam. Suspendisse potenti.",
        price: 25
    }),
    new Product({
        imagePath: "https://agro24.ru/img/2018/04/Apelsin-1.jpg",
        titleProduct: 'Orange',
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis egestas metus, non posuere metus. Etiam non odio purus. Vivamus aliquam elit cursus lacus viverra eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et massa at leo congue ultricies sed id ex. Nulla facilisi. Maecenas iaculis quam tortor, vel molestie metus accumsan eu. Maecenas cursus ex justo, quis sodales nibh accumsan vel. Aenean auctor porta purus, ut faucibus odio dapibus vitae. Sed eu aliquam lacus, finibus cursus diam. Suspendisse potenti.",
        price: 15
    }),
    new Product({
        imagePath: "https://s.gorodche.ru/localStorage/news/90/80/97/5a/9080975a_resizedScaled_1020to680.jpg",
        titleProduct: 'Apple',
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis egestas metus, non posuere metus. Etiam non odio purus. Vivamus aliquam elit cursus lacus viverra eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et massa at leo congue ultricies sed id ex. Nulla facilisi. Maecenas iaculis quam tortor, vel molestie metus accumsan eu. Maecenas cursus ex justo, quis sodales nibh accumsan vel. Aenean auctor porta purus, ut faucibus odio dapibus vitae. Sed eu aliquam lacus, finibus cursus diam. Suspendisse potenti.",
        price: 30
    }),
    new Product({
        imagePath: "http://sovetland.ru/sites/default/files/grusha_1.jpg",
        titleProduct: 'Pear',
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis egestas metus, non posuere metus. Etiam non odio purus. Vivamus aliquam elit cursus lacus viverra eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et massa at leo congue ultricies sed id ex. Nulla facilisi. Maecenas iaculis quam tortor, vel molestie metus accumsan eu. Maecenas cursus ex justo, quis sodales nibh accumsan vel. Aenean auctor porta purus, ut faucibus odio dapibus vitae. Sed eu aliquam lacus, finibus cursus diam. Suspendisse potenti.",
        price: 35
    }),
    new Product({
        imagePath: "https://www.auchan.ru/pokupki/media/catalog/product/cache/1/image/774x585/040ec09b1e35df139433887a97daa66f/3/2/32571.jpg",
        titleProduct: 'Raspberry',
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis egestas metus, non posuere metus. Etiam non odio purus. Vivamus aliquam elit cursus lacus viverra eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et massa at leo congue ultricies sed id ex. Nulla facilisi. Maecenas iaculis quam tortor, vel molestie metus accumsan eu. Maecenas cursus ex justo, quis sodales nibh accumsan vel. Aenean auctor porta purus, ut faucibus odio dapibus vitae. Sed eu aliquam lacus, finibus cursus diam. Suspendisse potenti.",
        price: 15
    }),
    new Product({
        imagePath: "https://attuale.ru/wp-content/uploads/2018/03/3-2-3-800x526.jpg",
        titleProduct: 'Pineapple',
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis egestas metus, non posuere metus. Etiam non odio purus. Vivamus aliquam elit cursus lacus viverra eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et massa at leo congue ultricies sed id ex. Nulla facilisi. Maecenas iaculis quam tortor, vel molestie metus accumsan eu. Maecenas cursus ex justo, quis sodales nibh accumsan vel. Aenean auctor porta purus, ut faucibus odio dapibus vitae. Sed eu aliquam lacus, finibus cursus diam. Suspendisse potenti.",
        price: 10
    })
];
  dbo.collection("products").insertMany(products, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});