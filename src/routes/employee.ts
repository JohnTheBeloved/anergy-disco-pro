import { Router } from 'express';
import { Role } from '../models/Auth';
import authorize from '../utils/authorize';
import EmployeeController from '../controllers/employee';

const handler: Router = Router();
const controller = new EmployeeController();

handler.post('/',authorize(Role.SUPERVISOR), controller.create)
handler.get('/', controller.read)
handler.get('/:id', controller.read)
handler.put('/:id',authorize(Role.SUPERVISOR), controller.update)
handler.delete('/:id', authorize(Role.SUPERVISOR), controller.delete)


export default handler;
