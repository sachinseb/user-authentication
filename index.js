const express = require("express");
const app = express();

PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Running Successfully",
  });
});

app.post("/about", (req, res) => {
  let { name, email } = req.body;
  res.json({
    message: "data",
    name,
    email,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
