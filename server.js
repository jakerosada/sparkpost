const express = require("express");
const app = express();

//Init Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running"));

//Define routes
app.use("/sparkpost", require("./routes/sparkpost"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

module.exports = { app, server };
