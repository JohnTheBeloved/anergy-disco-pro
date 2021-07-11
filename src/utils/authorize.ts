
import expressJwt from 'express-jwt';
import { StatusCodes } from 'http-status-codes';

const authorize = (roles: string = 'UNKNOWN') => {

 return [
     // authenticate JWT token and attach user to request object (req.user)
     //FIXME: UPDATE SECRET VAR
     expressJwt({ secret: process.env.secret, algorithms: ['HS256'] }),

     // authorize based on user role
     (req: any, res: any, next: any) => {
         if (roles.length && !roles.includes(req.user.role)) {
             // user's role is not authorized
             return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
         }

         // authentication and authorization successful
         next();
     }
 ];
};

export default authorize;
