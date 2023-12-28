import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { apiHealth } from "./controllers/health.js";
import {postApiv1Signup,postApiv1Login} from "./controllers/user.js"
dotenv.config();

const app = express();
app.use(express.json());

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
  connDB()
});