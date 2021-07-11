import { Router } from 'express';
import AuthController from '../controllers/auth';

const handler: Router = Router();
const controller = new AuthController();

handler.post('/authenticate', controller.authenticate);

export default handler;
