import path from 'path'
import multer from "multer"

export const storage = multer.diskStorage({
    destination: 'storage/',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  });
 
export const upload = multer({ storage });