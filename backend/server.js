const expresss = require("express")
const app= expresss()
const db=require("./models")
const userRoutes = require("./router/user-router")
const productsRoutes = require("./router/products")
const wishListRoutes = require("./router/wishList")
const reviewRoutes = require("./router/review-router")
const contactRoutes = require("./router/contact")
const cartRoutes = require("./router/cart")


const cors = require("cors")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const { google } = require('googleapis');
app.use(cors())
app.use(expresss.json())
app.use(expresss.urlencoded({extended:true}))


app.use("/user",userRoutes)
app.use("/contact",contactRoutes)
app.use("/cart",cartRoutes)
app.use("/products",productsRoutes)
app.use("/wishList",wishListRoutes)
app.use("/review",reviewRoutes)

// const OAuth2 = google.auth.OAuth2;
// const CLIENT_ID = "958591364059-alfknordls9km64k7d3c1qtqrt7g97si.apps.googleusercontent.com"
// const CLIENT_SECRET = "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";
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";
// const REFRESH_TOKEN = "1//04J2LRK0ybW_nCgYIARAAGAQSNwF-L9IreVxyuyfjX1hG8Or7lQXnBP7-3kf5Wh1xCqQcSFtVCysHAMDi0vdyqWnjLyVi1GgI3wI";

// const oAuth2Client = new OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: "haydercharfeddin51@gmail.com",
//     clientId: CLIENT_ID,
//     clientSecret: CLIENT_SECRET,
//     refreshToken: REFRESH_TOKEN,
//     accessToken: oAuth2Client.getAccessToken(),
//   },
// });
// const verificationCodeMap = new Map();

// app.post("/forget-password-email", async (req, res) => {
//   const { email } = req.body;


//   getAll((err, users) => {
//     if (err) {
//       res.status(500).json(err);
//     } else {

//       const user = users.find((user) => user.user_email === email);
//       if (!user) {
//         res.status(400).send("Email not found");
//         return;
//       }

      
//       const verificationCode = Math.floor(100000 + Math.random() * 900000);
//       const mailOptions = {
//         from: "haydercharfeddin51@gmail.com",
//         to: email,
//         subject: "Reset Password Code",
//         text: `Your reset password code is ${verificationCode}`,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log(error);
//           res.status(500).send("Could not send email");
//         } else {
//           console.log("Email sent: " + info.response);
//           res.status(200).send("Email sent successfully");
//           verificationCodeMap.set(email, verificationCode);
//           console.log("Verification code for", email, "is", verificationCode);
//         }
//       });
//     }
//   });
// });
// app.post("/verify-code", (req, res) => {
//     const { email, code } = req.body;
//     console.log("email:", email);
//     console.log("code:", code);
//     const verificationCode = verificationCodeMap.get(email);
//     console.log("verificationCode:", verificationCode);
//     if (verificationCode == code) {
//       res.status(200).send("Code verified successfully");
//     } else {
//       res.status(400).send("Invalid code");
//     }
//   });

//   app.put('/change-password', (req, res) => {
//     const { email, password } = req.body
//     const salt = bcrypt.genSaltSync(10)
//     const hash = bcrypt.hashSync(password, salt)
  
//     const sql = 'UPDATE Users SET user_password = ? WHERE user_email = ?'
  
//     connection.query(sql, [hash, email], (err, result) => {
//       if (err) {
//         console.error(err)
//         res.status(500).send('Could not update password');
//       } else if (result.affectedRows === 0) {
//         res.status(404).send('User not found')
//       } else {
//         res.send('Password updated successfully')
//       }
//     });
//   });


 app.listen(5000,()=>console.log("server  listend"))
