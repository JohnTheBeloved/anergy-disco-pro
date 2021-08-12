import Joi, { number, string } from '@hapi/joi';
import { Request, RequestHandler } from 'express';
import requestMiddleware from '../middleware/request';
import Broadcast from '../models/Broadcast';

// Schema
export const createBroadcastSchema = Joi.object().keys({
  client: Joi.string().required(),
  message: Joi.string().required()
});

interface BroadcastBody {
 client: string;
 message: string;
 sendDate: string;
}

// CRUD
const broadcastMessage: RequestHandler = async (req: Request<{}, {}, BroadcastBody>, res) => {
  const { client, message, sendDate = new Date() } = req.body;
  const broadcast = new Broadcast({ client, message, sendDate });
  try {
    await broadcast.save();
    res.send({
      successful: true,
      message: 'Saved',
      response: broadcast.toJSON()
    });
  } catch (ex) {
    res.status(500).send({ successful: false, error: ex });
  }
};

class BroadcastController {
 broadcast = broadcastMessage;
};

export default BroadcastController;
