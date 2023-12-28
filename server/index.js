import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { apiHealth } from "./controllers/health.js";
import { postApiv1Signup, postApiv1Login } from "./controllers/user.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// Authentication middleware
function authenticateToken(req, res, next) {
  const accessToken = req.cookies.token;

  if (!accessToken) {
    return res.status(401).json({ message: "Access token not provided" });
  }

  jwt.verify(accessToken, process.env.JWT_SECRETE_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid access token" });
    }

    req.user = user;

    next();
  });
}

const connDB = () => {
  const conn = mongoose.connect(process.env.MONGO_DB_URI);
  if (conn) {
    console.log("mongoDb Connected Successfully");
  }
};

// Users Endpoints
app.post("/api/v1/signups", postApiv1Signup);
app.post("/api/v1/logins", postApiv1Login);

app.get("/api/health", apiHealth);

// Protected route
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: `Hello, user! This is a protected resource.` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
  connDB();
});
