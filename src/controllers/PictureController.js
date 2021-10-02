import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('picture');

class PictureController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        return res.json(req.file);
      } catch (e) {
        return console.error(e);
      }
    });
  }
}

export default new PictureController();
