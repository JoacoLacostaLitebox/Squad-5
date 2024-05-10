import { Request, Response } from "express";
import * as awsService from "../services/aws.service";

const getImageMaterials = async function (req: Request, res: Response) {
  const detectedMaterials = await awsService.getImageMaterials();

  res.send(detectedMaterials);
};

export default {
  getImageMaterials,
};
