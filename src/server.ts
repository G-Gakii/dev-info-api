import express, { Request, response } from "express";

import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello from typescript");
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
