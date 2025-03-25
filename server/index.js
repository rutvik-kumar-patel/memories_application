import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true })); // Parse JSON request body
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

// ---- Serve React frontend ----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
// --------------------------------

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNCTION_URL, { useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
