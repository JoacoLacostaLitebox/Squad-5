import S3 from "aws-sdk/clients/s3";

const S3Client = new S3({
  apiVersion: "2006-03-01",
  accessKeyId: process.env.LITEFLIX_AWS_ACCESS_KEY,
  secretAccessKey: process.env.LITEFLIX_AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: "v4",
});

export const generateSignedURL = (
  filename: string,
  extension: string,
): string | void => {
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: filename,
    Expires: 60,
    ContentType: `image/${extension}`,
    ACL: "public-read",
  };

  const signedUrl = S3Client.getSignedUrl("putObject", s3Params);

  if (!signedUrl)
    throw new Error("There was a problem obtaining the signedUrl");

  return signedUrl;
};
