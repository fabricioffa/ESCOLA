import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.post('/', userController.store); //  Não devria existir
// router.get('/', loginRequired, userController.index); // Nem esse
router.get('/:id', loginRequired, userController.show);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
