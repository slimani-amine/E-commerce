const express = require("express");
const route = express.Router();
// const { db, bussiness } = require('../models/index.js');
const db = require("../models/index");

route.post("/createCart", (req, res) => {
  console.log(req.body, "body");
  db.Cart.create({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    images: req.body.images,
    colours: req.body.colours,
    size: req.body.size,
    price: req.body.price,
    quantity: req.body.quantity,
    userid: req.body.userid
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getOneCart/:id", (req, res) => {
  db.Cart.findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

('{"id":19,"name":"Micro Casque Gaming G-Lab Korp","description":"Casque Gamer Xbox One avec Micro Anti Bruit LED Lampe Audio Stéréo Basse avec Micro 3.5mm Jack pour PS4/ Xbox One/PC/Mac/Nintendo ","category":"HeadPhones","images":"[\\"https://m.media-amazon.com/images/I/6149X4D5OdL._AC_UF1000,1000_QL80_.jpg\\",\\"https://m.media-amazon.com/images/I/6149X4D5OdL._AC_UF1000,1000_QL80_.jpg\\"]","colours":"[\\"red\\",\\"blue\\"]","size":"[\\"s\\",\\"m\\",\\"l\\"]","price":"110dt","discount":"99dt","userid":4,"createdAt":"2023-09-16T14:53:26.000Z","updatedAt":"2023-09-16T14:53:26.000Z","quantity":2}');

route.get("/getAllCart/:userid", (req, res) => {
  db.Cart.findAll({ where: { userid: req.params.userid } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.put("/updateOneCart/:id", (req, res) => {
  db.Cart.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.delete("/deleteOneCart/:id", (req, res) => {
  db.Cart.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
