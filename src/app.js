import express from "express";

const app = express();

app.listen(8080, () => console.log("App listening on 8080"));

app.get("/", (req, res) => {
  res.send("Probando Depoly de Railway");
});

app.get("/principal", (req, res) => {
  res.send("<h1>Probando deploy de Railway</h1>");
});
