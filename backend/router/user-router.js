const express = require("express");
const bcrypt = require("bcrypt")
const route = express.Router();
const { sequelize, DataTypes } = require('../models'); 
const md = require ("../models"); 
// const user = require("../models/user");
const jwt = require('jsonwebtoken');


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
    
    

    const newUser = await User.create({
      firstName: req.body.firstName,
      lasstName: req.body.lasstName,
      email: req.body.email,
      password: hashPassword,
    });
    console.log(newUser);
   

    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
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
      console.log(exist.password,"password in db");
      console.log(req.body.password,"password from request");
console.log(comparing,"comparing");
      if (comparing) {
        const token = jwt.sign({ id: exist.id, firstName: exist.firstName, lasstName: exist.lasstName }, privateKey);

        return res.status(200).json({id: exist.id, firstName: exist.firstName, token}); 
      } else {
    
        return res.status(401).json({ error: "Authentication failed" });
      }
    }
  } 
  catch (err) {
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





route.put("/updateUser/:id", async (req, res) => {
  try {
    const { address, firstName, lasstName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.update(
      {
        address,
        firstName,
        lasstName,
        email,
        password: hashedPassword, 
      },
      { where: { id: req.params.id } }
    );

    if (result[0] === 1) {
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
});



// router.put('/updatePassword/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     res.status(200).json({ message: 'Password updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

route.delete("/deleteUser/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
