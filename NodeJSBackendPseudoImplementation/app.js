const express = require("express");
const dataRouters = require("./route");
const cors = require('cors');


const db = require("./db");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3010;

const app = express();
db.connectDB("Backend");

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use("/customers", dataRouters);

app.get("/", (req, res) => {
  res.json({ message: "App is running on docker" });
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});