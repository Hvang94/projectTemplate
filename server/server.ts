import express from "express";
import ViteExpress from "vite-express";

const app = express();
const PORT = process.env.PORT || 5001

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, +PORT, () =>
  console.log(`Listening on port: ${PORT}`)
);
