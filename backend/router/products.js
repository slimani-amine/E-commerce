const express = require("express");
const route = express.Router();
const db =require ("../models/index")


route.post("/createProducts", (req, res) => {
 db.Products.create({
    name:req.body.name,
    description:req.body.description,
    category:req.body.category,
    images:req.body.images,
    colours:req.body.colours,
    size:req.body.size,
    price:req.body.price,
    discount:req.body.discount
 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getOneProducts/:id", (req, res) => {
  db.Products.findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getAllProducts", (req, res) => {
  db.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.put("/updateOneProducts/:id", (req, res) => {
  db.Products.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.delete("/deleteOneProducts/:id", (req, res) => {
  db.Products.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
