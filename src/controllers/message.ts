import Joi, { number, string } from '@hapi/joi';
import { Request, RequestHandler } from 'express';
import requestMiddleware from '../middleware/request';
import Message from '../models/Message';

// Schema
export const createMessageSchema = Joi.object().keys({
  name: Joi.string().required(),
  clientId: Joi.number().required()
});

interface MessageBody {
 content: string;
 medium: string
}

// CRUD
const create: RequestHandler = async (req: Request<{}, {}, MessageBody>, res) => {
  const { content, medium } = req.body;

  const message = new Message({ content, medium });
  try {
    await message.save();
    res.send({
      successful: true,
      message: 'Saved',
      response: message.toJSON()
    });
  } catch (ex) {
    res.status(500).send({ successful: false, error: ex });
  }
};

const read: RequestHandler = async (req, res) => {
  const { id } = req.query;
  const messages = id ? await Message.findById(id) : await Message.find();
  res.send({ successful: true, messages });
};

const update: RequestHandler = async (req: Request<{}, {}, MessageBody>, res) => {
  const messageId = '';
  const existingMessage = Message.findById(messageId);
  if (existingMessage) {
    const { content, medium } = req.body;

    const message = new Message({ content, medium });
    try {
      await message.save();
      res.send({
        successful: true,
        message: 'Saved',
        response: message.toJSON()
      });
    } catch (ex) {
      res.status(500).send({ successful: false, error: ex });
    }
  } else {
    res.status(500).send({ successful: false, error: `Message with id : ${messageId} does not exist` });
  }
};

const deleteOne: RequestHandler = async (req, res) => {
  const _id = req.query.id;
  const { n, ok } = await Message.deleteOne({ _id });
  res.send({ successful: !!ok, message: ok ? `${n} matched messages deleted Successfully` : 'No messages deleted' });
};

class MessageController {
 create = create;

 read = requestMiddleware(read);

 update = update;

 delete = deleteOne;
};

export default MessageController;
