import { Router } from 'express';
import tokenController from '../controllers/TokenController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, tokenController.store);

export default router;
