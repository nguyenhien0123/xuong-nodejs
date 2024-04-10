import express from "express";
import cors from "cors";
import connect from "./api/database/connect.js";

import dotenv from "dotenv";
import router from "./api/routers/index.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
app.use("/api", router);

app.listen(PORT, async () => {
  await connect();
  console.log(`http://localhost:${PORT}/api`);
});
