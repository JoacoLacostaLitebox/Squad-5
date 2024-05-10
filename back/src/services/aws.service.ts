import AWS, { AWSError } from "aws-sdk";
import { MATERIALS } from "../utils/constants";
import { Request } from "express";
import { DetectLabelsResponse } from "aws-sdk/clients/rekognition";


const bucket = 'litehack-bucket' // the bucketname without s3://
const photo  = 'prueba.jpeg' // the name of file

// const credentials = new AWS.SharedIniFileCredentials({profile: 'mainUser'});

// AWS.config.credentials = credentials;
// AWS.config.update({region: process.env.AWS_REGION});

const client = new AWS.Rekognition({
  accessKeyId: process.env.LITEHACK_AWS_ACCESS_KEY,
  secretAccessKey: process.env.LITEHACK_AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
  apiVersion: '2016-06-27'
});

export const getImageMaterials = async (
): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const detectedMaterials: any[] = [];

    const params = {
      Image: {
        S3Object: {
          Bucket: bucket,
          Name: photo
        },
      },
      MaxLabels: 10
    }
  
    client.detectLabels(params, function(err, response) {
      if (err) {
        console.log(err, err.stack); // if an error occurred
        reject(err)
      } else {
        console.log(`Detected labels for: ${photo}`)
        response.Labels?.forEach(label => {
          if(MATERIALS.includes(label.Name ?? '')) {
            console.log(`Label:      ${label.Name}`)
            console.log(`Confidence: ${label.Confidence}`)
            console.log("Instances:")
            label.Instances?.forEach(instance => {
              let box = instance.BoundingBox
              console.log("  Bounding box:")
              console.log(`    Top:        ${box?.Top}`)
              console.log(`    Left:       ${box?.Left}`)
              console.log(`    Width:      ${box?.Width}`)
              console.log(`    Height:     ${box?.Height}`)
              console.log(`  Confidence: ${instance.Confidence}`)
            })
            console.log("Parents:")
            label.Parents?.forEach(parent => {
              console.log(`  ${parent.Name}`)
            })
            console.log("------------")
            detectedMaterials.push(label.Name)
          }
        })
        resolve(detectedMaterials)
      }
    });
  })
};
