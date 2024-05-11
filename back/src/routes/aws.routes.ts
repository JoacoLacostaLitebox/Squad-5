import express, { Router } from "express";
import awsController from "../controllers/aws.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { GenerateSignedURLBody } from "../validations/aws/aws.validations";
import { upload } from "../utils/multer";

const awsRouter: Router = express.Router();

awsRouter.post(
  "/getImageMaterials",
  upload.single('file'),
  awsController.getImageMaterials,
);

awsRouter.post(
  "/getImageMaterialsv2",
  awsController.getImageMaterialsv2
)

export default awsRouter;
