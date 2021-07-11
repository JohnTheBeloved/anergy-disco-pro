import { Router } from 'express';
import { Role } from '../models/Auth';
import ProductCategoryController from '../controllers/productCategory';
import authorize from '../utils/authorize';

const handler: Router = Router();

const controller = new ProductCategoryController();

handler.post('/', authorize(Role.SUPERVISOR), controller.create)
handler.get('/', controller.read)
handler.get('/:id', controller.read)
handler.put('/', authorize(Role.SUPERVISOR), controller.update)
handler.delete('/:id', authorize(Role.SUPERVISOR), controller.delete)


export default handler;
