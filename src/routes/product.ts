import { Router } from 'express';
import ProductController from '../controllers/product';

const handler: Router = Router();
const controller = new ProductController();

handler.post('/', controller.create)
handler.get('/', controller.read)
handler.get('/:id', controller.read)
handler.put('/:id', controller.update)
handler.delete('/:id', controller.delete)


export default handler;
