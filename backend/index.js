// packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//utiles
import router from "./routes/userRoute.js";
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
