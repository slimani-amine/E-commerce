const express = require("express");
const route = express.Router();
// const { db, bussiness } = require('../models/index.js'); 
const db =require ("../models/index")


route.post("/createContact", (req, res) => {
 db.Contact.create({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    message:req.body.message,

 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getOneContact/:id", (req, res) => {
  db.Contact.findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getAllContact", (req, res) => {
  db.Contact.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// route.put("/updateOneContact/:id", (req, res) => {
//   db.Contact.update(req.body, { where: { id: req.params.id } })
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// route.delete("/deleteOneContact/:id", (req, res) => {
//   db.Contact.destroy({ where: { id: req.params.id } })
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

module.exports = route;