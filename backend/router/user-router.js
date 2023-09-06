const express = require("express");
const bcrypt = require("bcrypt")
const route = express.Router();
const { sequelize, DataTypes } = require('../models'); 
const md = require ("../models"); 
const user = require("../models/user");
const jwt = require("jsonwebtoken")


const User = md.User; 
// console.log(Admin,"admin");


const privateKey = '44999d06057a26ead3e8d889f16c2b6eb5e852f9bf074a365361e8eaa50833828e4ca7698141cda4d3b932c5d47ae27adbe0d95e320c8773ff78fd3ba9c7acca';

verifyToken=(req,res,next)=>{
  const token = req.headers.authorization
  if(!token){
    res.status(400).json({message:"access rejected !"})
  }

try {
  jwt.verify(token,privateKey)
  next()
}catch(err){
  res.status(400).json({message:err})
}
  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

route.post("/register" , async (req, res) => {
  try {
    const { User } = md; 

    const emaill = await User.findOne({ where: { email: req.body.email } });
    if (emaill) {
      return res.status(400).json({ message: "This email is already in use." });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    
    // let roleData = {}; 

    const newUser = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
    });
    
    // roleData[newUser.role] = newUser; 

    res.status(201).json(roleData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create User" });
  }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

route.post("/login" ,  async (req, res) => {
  try {
    const exist = await User.findOne({ where: { email: req.body.email } });

    if (!exist) {
      return res.status(400).json({ error: "email don't found " });
    } else {
      const comparing = await bcrypt.compare(req.body.password, exist.password);

      if (comparing) {
        const token = jwt.sign({ id: exist.id, userName: exist.userName }, privateKey);

        return res.status(200).json({token}); 
      } else {
        return res.status(401).json({ error: "Authentication failed" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



route.get("/getUser/:id",  (req, res) => {
  User.findOne({ where: { id: req.params.id }},{includes : [User.id]})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
});



route.put("/updateUser/:id", verifyToken ,  (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.delete("/deleteUser/:id", verifyToken , (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
