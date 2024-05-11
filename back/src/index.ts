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

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send("Health ok");
});

app.use("/aws", awsRouter);
app.use('/fukupoints', fukuPointsRouter)

console.log('a ver si llega aca')
console.log(process.env.DB_CONNECTION_URI)
console.log(process.env.PORT)

mongoose
  .connect(process.env.DB_CONNECTION_URI!)
  .then(() => {
    app.listen(process.env.PORT || 3000, function () {
      console.log(`Liteflix backend listening on port ${process.env.PORT || 3000}!`);
    });
  })
  .catch((error) => {
    throw new Error(error);
  });

export default app;
