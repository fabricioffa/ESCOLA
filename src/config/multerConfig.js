import multer from 'multer';
import { extname, resolve } from 'path';

const randon = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('File must be PBG or JPG.'));
    }

    return cb(null, true);
  },
  store: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randon()}${extname(file.originalname)}}`);
    },
  }),
};
