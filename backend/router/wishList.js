const express = require("express");
const route = express.Router();
// const { db, bussiness } = require('../models/index.js');
const db = require("../models/index");

route.post("/createWishList", (req, res) => {
  db.WishList.create({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    images: req.body.images,
    colours: req.body.colours,
    size: req.body.size,
    price: req.body.price,
    userid: req.body.userid,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getOneWishList/:id", (req, res) => {
  db.WishList.findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getAllWishList/:userid", (req, res) => {
  db.WishList.findAll({ where: { userid: req.params.userid } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.delete("/deleteOneWishList/:id", (req, res) => {
  db.WishList.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
route.delete("/deleteAllWishList", (req, res) => {
  db.WishList.destroy({
    truncate: true,
    cascade: false,
  })
    .then((result) => {
      res
        .status(200)
        .json({ message: "All wishlist items deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.put("/updateOneWishList/:id", (req, res) => {
  db.WishList.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = route;
