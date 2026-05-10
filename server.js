const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/ussd", (req, res) => {
  console.log(req.body);

  res.send("CON Welcome to my USSD App");
});

app.get("/", (req, res) => {
  res.send("USSD App Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
