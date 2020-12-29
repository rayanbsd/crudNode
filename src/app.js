const express = require("express");
const postsRoute = require("./routers/posts");
require("./db/db");
var cors = require("cors");
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE,PATCH,OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
app.use("/posts",postsRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
