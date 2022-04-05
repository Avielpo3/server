import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

const db = [];

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };

  db.push(newTodo);

  res.json(newTodo);
});

app.get("/todos", (req, res) => {
  res.json(db);
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
