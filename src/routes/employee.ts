import { Router } from 'express';
import { Role } from '../models/Auth';
import authorize from '../utils/authorize';
import EmployeeController from '../controllers/employee';

const handler: Router = Router();
const controller = new EmployeeController();

handler.post('/', controller.create)
handler.get('/', controller.read)
handler.get('/:id', controller.read)
handler.put('/:id', controller.update)
handler.delete('/:id', authorize(Role.ADMIN), controller.delete)


export default handler;
