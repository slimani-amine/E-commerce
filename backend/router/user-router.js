const express = require("express");
const bcrypt = require("bcrypt");
const route = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const privateKey =
  process.env.JWT_PRIVATE_KEY || "YOUR_DEFAULT_PRIVATE_KEY_HERE";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: "Access rejected!" });
  }

  try {
    const decoded = jwt.verify(token, privateKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
  }
};

route.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ message: "This email is already in use." });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      firstName: req.body.firstName,
      lasstName: req.body.lasstName,
      email: req.body.email,
      password: hashPassword,
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create User" });
  }
});

route.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(400).json({ message: "Email not found." });
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(isPasswordValid);
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          id: user.id,
          firstName: user.firstName,
          lasstName: user.lasstName,
        },
        privateKey
      );

      return res
        .status(200)
        .json({ id: user.id, firstName: user.firstName, token });
    } else {
      return res.status(401).json({ message: "Authentication failed." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login error." });
  }
});

route.get("/getUser/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching user." });
  }
});

route.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users." });
  }
});

route.put("/updateUser/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const { address, firstName, lasstName, email, password } = req.body;
    let updatedFields = {
      address,
      firstName,
      lasstName,
      email,
      password,
    };

    if (password) {
      // If a new password is provided
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
      } else {
        updatedFields.password = await bcrypt.hash(password, 10);
      }
    }

    const result = await User.update(updatedFields, {
      where: { id: req.params.id },
    });

    if (result[0] === 1) {
      res.status(200).json({ message: "User updated successfully." });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.error("Error detail:", error.message);
    res.status(500).json({ message: "Error updating user." });
  }
});

route.delete("/deleteUser/:id", async (req, res) => {
  try {
    const result = await User.destroy({ where: { id: req.params.id } });
    if (result) {
      res.status(200).json({ message: "User deleted successfully." });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting user." });
  }
});

module.exports = route;
