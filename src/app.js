import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

app.get("/", (req, res) => {
  res.send("Probando Depoly de Railway");
});

app.get("/principal", (req, res) => {
  res.send("<h1>Probando deploy de Railway</h1>");
});

app.get("/variable", (req, res) => {
  res.send({ status: "success", variable: process.env.JOAQUIN });
});
