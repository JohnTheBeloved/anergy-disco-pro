import { IAuth } from './models/Auth';

declare namespace Express {
 export interface Request {
     user: IAuth
 }
}
