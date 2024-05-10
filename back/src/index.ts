import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import moviesRouter from "./routes/movies.routes";
import awsRouter from "./routes/aws.routes";

const app = express();

app.use(cors());
app.use("*", cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send("Health ok");
});

app.use("/movies", moviesRouter);
app.use("/aws", awsRouter);

mongoose
  .connect(process.env.DB_CONNECTION_URI!)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(`Liteflix backend listening on port ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    throw new Error(error);
  });

export default app;
