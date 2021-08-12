import { Router } from 'express';
import { Role } from '../models/Auth';
import MessageController from '../controllers/message';
import authorize from '../utils/authorize';
import BroadcastController from '../controllers/broadcast';

const handler: Router = Router();
const controller = new MessageController();
const broadcastController = new BroadcastController();

handler.post('/broadcast', authorize(Role.SUPERVISOR), broadcastController.broadcast);
handler.post('/', authorize([Role.SUPERVISOR, Role.EMPLOYEE]), controller.create);
handler.get('/', authorize([Role.SUPERVISOR, Role.EMPLOYEE]), controller.read);
handler.get('/:id', authorize([Role.SUPERVISOR, Role.EMPLOYEE]), controller.read);
handler.put('/:id', authorize(Role.SUPERVISOR), controller.update);
handler.delete('/:id', authorize(Role.SUPERVISOR), controller.delete);

export default handler;
