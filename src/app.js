import express from "express";

const app = express();

app.listen(8080, () => console.log("App listening on 8080"));

app.get("/", (req, res) => {
  res.send({ status: "sucess", message: "listo" });
});
