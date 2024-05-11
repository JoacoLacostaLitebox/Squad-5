import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import awsRouter from "./routes/aws.routes";
import fukuPointsRouter from "./routes/fukupoints.routes";

const app = express();

app.use(cors());
app.use("*", cors());

app.use(express.json({limit: "50mb"}));

app.get("/", (req: Request, res: Response) => {
  return res.send("Health ok");
});

app.use("/aws", awsRouter);
app.use('/fukupoints', fukuPointsRouter)

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
