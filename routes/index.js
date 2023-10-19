import { Router, request, response } from 'express'

const router = Router();

router.get('/', (request, response) => response.render('index'));
router.get('/blog', (request, response) => response.render('blog'));
router.get('/producto', (request, response) => response.render('product'));
router.get('/categoria', (request, response) => response.render('category'));

export default router