import express, { Router } from "express";
import awsController from "../controllers/aws.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { GenerateSignedURLBody } from "../validations/aws/aws.validations";

const awsRouter: Router = express.Router();

awsRouter.post(
  "/getSignedUrl",
  // validateRequest(GenerateSignedURLBody),
  awsController.getSignedUrl,
);

export default awsRouter;
