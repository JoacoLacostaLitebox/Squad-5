import { Request, Response } from "express";
import * as fukuPointsService from "../services/fukupoints.service";

const addFukuPoints = async function (req: Request, res: Response) {
    const response = await fukuPointsService.addFukuPoints(req.body)
    res.json(response)
};

const getUserFukuPoints = async function (req: Request, res: Response) {
    const { userId } = req.params
    const response = await fukuPointsService.getUserFukuPoints(userId)
    res.json(response)
};

export default {
    addFukuPoints,
    getUserFukuPoints,
};
