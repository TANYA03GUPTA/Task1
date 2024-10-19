const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Rule_Engine", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.on("open", () => console.log(" Database Connected... "));

const Rule = require("../backend/api/ruleapi");
app.use("/rules", Rule);

app.listen(5556, () => console.log("The server is live now...."));
