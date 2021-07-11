import { Router } from 'express';
import { Role } from '../models/Auth';
import authorize from '../utils/authorize';
import ClientController from '../controllers/client';

const handler: Router = Router();
const controller = new ClientController();

handler.post('/', controller.create)
handler.get('/', controller.read)
handler.get('/:id', controller.read)
handler.put('/:id', controller.update)
handler.delete('/:id', authorize(Role.ADMIN), controller.delete)


export default handler;
