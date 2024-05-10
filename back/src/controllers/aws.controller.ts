import { Request, Response } from "express";
import * as awsService from "../services/aws.service";
import { randomUUID } from "crypto";

const getSignedUrl = async function (req: Request, res: Response) {
  const { extension } = req.body;
  const fileName = `${randomUUID()}.${extension}`;
  const signedUrl = awsService.generateSignedURL();

  res.send(signedUrl);
};

export default {
  getSignedUrl,
};
