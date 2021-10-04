import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, userController.store);
router.get('/', loginRequired, userController.index); //  Não devria existir
router.get('/:id', loginRequired, userController.show); // Nem esse
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
