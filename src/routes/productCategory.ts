import { Router } from 'express';
import ProductCategoryController from '../controllers/productCategory';

const handler: Router = Router();

const controller = new ProductCategoryController();

handler.post('/', controller.create)
handler.get('/', controller.read)
handler.get('/:id', controller.read)
handler.put('/', controller.update)
handler.delete('/:id', controller.delete)


export default handler;
