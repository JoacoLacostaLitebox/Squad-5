import { FukuPointDoc, FukuPointModel } from "../interfaces/fukupoints.interface";
import mongoose from "mongoose";

const fukuPoint = new mongoose.Schema<FukuPointDoc>(
  {
    amount: Number,
    userId: String,
  },
  { timestamps: true },
);

const FukuPointModel: FukuPointModel = mongoose.model<FukuPointDoc>("fukuPoints", fukuPoint);

export default FukuPointModel;
