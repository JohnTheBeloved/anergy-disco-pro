import { Router } from 'express';
import { Role } from '../models/Auth';
import authorize from '../utils/authorize';
import ClientController from '../controllers/client';

const handler: Router = Router();
const controller = new ClientController();

handler.post('/',authorize(Role.SUPERVISOR), controller.create)
handler.get('/',authorize(Role.SUPERVISOR), controller.read)
handler.get('/:id',authorize(Role.SUPERVISOR), controller.read)
handler.put('/:id',authorize(Role.SUPERVISOR), controller.update)
handler.delete('/:id',authorize(Role.SUPERVISOR), authorize(Role.ADMIN), controller.delete)


export default handler;
