import Router from 'koa-router';
import auoutController from '../../api/auoutController';

const router = new Router();

router.get('/about', auoutController.demo);

export default router;
