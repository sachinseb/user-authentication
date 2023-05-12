const express = require("express");
const app = express();

PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Running Successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
