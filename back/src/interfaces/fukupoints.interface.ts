import { Document, Model } from "mongoose";

export interface FukuPoint {
  amount: number;
  userId: string;
  createdAt?: Date;
}

export interface FukuPointDoc extends FukuPoint, Document {}
export interface FukuPointModel extends Model<FukuPointDoc> {}
