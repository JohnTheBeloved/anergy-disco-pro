import { Router } from 'express';
import { Role } from '../models/Auth';
import MessageController from '../controllers/message';
import authorize from '../utils/authorize';

const handler: Router = Router();
const controller = new MessageController();

handler.post('/broadcast', authorize(Role.SUPERVISOR), controller.broadcast);
handler.post('/', controller.create);
handler.get('/', controller.read);
handler.get('/:id', controller.read);
handler.put('/:id', controller.update);
handler.delete('/:id', controller.delete);

export default handler;
