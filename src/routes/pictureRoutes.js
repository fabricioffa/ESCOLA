import { Router } from 'express';
import multer from 'multer';
import pictureController from '../controllers/PictureController';
import multerConfig from '../config/multerConfig';

const router = new Router();
const upload = multer(multerConfig);

router.post('/', upload.single('picture'), pictureController.store);

export default router;
