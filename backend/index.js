const express = require("express");
const dotenv = require("dotenv");
const ConnectDB = require("./config/db");
const router = require("./routes/AllRoutes");

dotenv.config();

ConnectDB();
const app = express();
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
