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

// Mock functions for database operations
async function saveTokenToUser(email, token) {
  // Implement the logic to save the token to the user's record in the database
  // This is a mock implementation for demonstration purposes
  console.log(`Token saved for user with email: ${email}`);
}

async function getUserByToken(token) {
  // Implement the logic to retrieve a user by the token from the database
  // This is a mock implementation for demonstration purposes
  if (token === "validToken") {
    return { id: "userId" };
  }
  return null;
}

async function updateUserPassword(userId, hashedPassword) {
  // Implement the logic to update the user's password in the database
  // This is a mock implementation for demonstration purposes
  console.log(`Password updated for user with ID: ${userId}`);
}

async function invalidateToken(token) {
  // Implement the logic to invalidate the token (e.g., remove it from the database)
  // This is a mock implementation for demonstration purposes
  console.log(`Token invalidated: ${token}`);
}

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  // Generate a unique token and save it to the user's record in the database
  const token = generateUniqueToken();
  await saveTokenToUser(email, token);

  // Create a URL with the token and send it in an email
  const resetLink = `http://localhost:3000/resetpassword/${token}`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "slimaniamin76@gmail.com",
      pass: "a.m.i.n.e",
    },
  });
  const mailOptions = {
    from: "slimaniamin76@gmail.com",
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

  // Hash the new password and update the user's password in the database
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await updateUserPassword(user.id, hashedPassword);

  // Invalidate the token
  await invalidateToken(token);

  res.status(200).json({ message: "Password reset successful" });
});

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
