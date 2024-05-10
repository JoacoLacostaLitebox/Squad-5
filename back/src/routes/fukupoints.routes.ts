import express, { Router } from "express";
import fukuPointsController from "../controllers/fukupoints.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { AddFukuPoints } from "../validations/fukupoints/fukupoints.validations";

const fukuPointsRouter: Router = express.Router();


fukuPointsRouter.post(
    "/",
    validateRequest(AddFukuPoints),
    fukuPointsController.addFukuPoints,
);

fukuPointsRouter.get(
    "/:userId",
    fukuPointsController.getUserFukuPoints,
);

export default fukuPointsRouter;
