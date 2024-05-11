import { Request, Response } from "express";
import * as awsService from "../services/aws.service";

const getImageMaterials = async function (req: Request, res: Response) {
  if(!req.file) return "File missing"
  const detectedMaterials = await awsService.getImageMaterials(req.file);

  res.send(detectedMaterials);
};

const getImageMaterialsv2 = async function (req: Request, res: Response) {
  if(!req.body.image) return "Image missing";
  const materials = await awsService.getImageMaterialsv2(req.body.image);
  res.send(materials);
};

export default {
  getImageMaterials,
  getImageMaterialsv2
};
