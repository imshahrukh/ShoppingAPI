const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const morgan = require("morgan");

// Middlwares
const app = express();
app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));

// .env
const port = process.env.PORT || 8000;

// connection
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected..."))
  .catch((er) => console.log(er));

// localhost:3000/v1/login
app.use("/v1", require("./router/r_Carts"));
app.use("/v1", require("./router/r_Comments"));
app.use("/v1", require("./router/r_Orders"));
app.use("/v1", require("./router/r_Products"));
app.use("/v1", require("./router/r_User"));
// information
app.get("/", (req, res) => {
  console.log("data");
  res.status(200).json({
    message: "Api Working",
  });
});
app.listen(port, () => {
  console.log("server Activited");
});

// git remote add origin https://github.com/ShahRukh170C/ShoppingAPI.git
// git push -u origin master
