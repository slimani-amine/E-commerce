const expresss = require("express");
const app = expresss();
const jwt = require("jsonwebtoken");
const db = require("./models");
const userRoutes = require("./router/user-router");
const productsRoutes = require("./router/products");
const wishListRoutes = require("./router/wishList");
const reviewRoutes = require("./router/review-router");
const contactRoutes = require("./router/contact");
const cartRoutes = require("./router/cart");

const cors = require("cors");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
app.use(cors());
app.use(expresss.json());
app.use(expresss.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/contact", contactRoutes);
app.use("/cart", cartRoutes);
app.use("/products", productsRoutes);
app.use("/wishList", wishListRoutes);
app.use("/review", reviewRoutes);






// forget password 
// Function to generate a unique token
function generateUniqueToken() {
  const tokenLength = 32;
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let token = "";
  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
}

async function saveTokenToUser(email, token) {

  console.log(`Token saved for user with email: ${email}`);
}

async function getUserByToken(token) {
  if (token === "validToken") {
    return { id: "userId" };
  }
  return null;
}

async function updateUserPassword(userId, newpassword) {
  route.put("/updateUser/:id", async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      let updatedFields = {
        address:user.address,
        firstName:user.firstName,
        lasstName:user.lasstName,
        email:user.email,
        password:newpassword,
      };
  
      const result = await User.update(updatedFields, {
        where: { id: userId },
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

}

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const token = generateUniqueToken();
  await saveTokenToUser(email, token);
  const resetLink = `http://localhost:3000/resetpassword/${token}`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "slimanimedamine24@gmail.com",
      pass: "A.m.i.n.e1",
    },
  });
  const mailOptions = {
    from: "slimanimedamine24@gmail.com",
    to: email,
    subject: "Password Reset",
    text: `Click the following link to reset your password: ${resetLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send reset email" });
    } else {
      console.log("Password reset email sent: " + info.response);
      res.status(200).json({ message: "Password reset email sent" });
    }
  });
});



app.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  // Verify the token
  const user = await getUserByToken(token);
  if (!user || tokenIsExpired(token)) {
    return res.status(400).json({ error: "Invalid or expired token" });
  }
  await updateUserPassword(user.id, newPassword);

  res.status(200).json({ message: "Password reset successful" });
});




// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
