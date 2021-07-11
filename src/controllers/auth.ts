import { Request, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import { StatusCodes } from 'http-status-codes'
import Auth, { IAuth } from '../models/Auth';

type AuthBody = {
  username: string;
  password: string;
}

const authenticate: RequestHandler = async (req: Request<{}, {}, AuthBody>, res) => {

 const auth = { username: req.body.username, password: req.body.password };
 try {
 const user = await Auth.findOne(auth);
 if (user) {
  const token = jwt.sign({ sub: user._id, role: user.role }, process.env.secret);
  const { password, ...userWithoutPassword } = user;
  res.send({
      ...userWithoutPassword,
      token
  })
}
res.status(StatusCodes.BAD_REQUEST).json({ message: 'Username or password is incorrect' })

 }catch {
  res.status(StatusCodes.BAD_REQUEST).json({ message: 'Username or password is incorrect' })
 }
};

class AuthController {
 authenticate = authenticate;
};

export default AuthController;
