import { Request, Response } from "express";
import * as awsService from "../services/aws.service";

const getImageMaterials = async function (req: Request, res: Response) {
  if(!req.file) return "File missing"
  const detectedMaterials = await awsService.getImageMaterials(req.file);

  res.send(detectedMaterials);
};

export default {
  getImageMaterials,
};
