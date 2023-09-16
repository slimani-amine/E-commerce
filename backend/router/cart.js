const express = require("express");
const route = express.Router();
// const { db, bussiness } = require('../models/index.js'); 
const db =require ("../models/index")


route.post("/createCart/:userid", (req, res) => {
 db.Cart.create({
    name:req.body.name,
    description:req.body.description,
    category:req.body.category,
    images:req.body.images,
    colours:req.body.colours,
    size:req.body.size,
    price:req.body.price,
    discount:req.body.discount,
    userid: req.params.userid,
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