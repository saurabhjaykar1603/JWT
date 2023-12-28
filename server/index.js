import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { apiHealth } from "./controllers/health.js";
dotenv.config();

const app = express();
app.use(express.json());

const connDB = () => {
  const conn = mongoose.connect(process.env.MONGO_DB_URI);
  if (conn) {
    console.log("mongoDb Connected Successfully");
  }
};

app.get("/api/health", apiHealth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
  connDB()
});