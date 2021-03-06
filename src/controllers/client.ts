import Joi, { number, string } from '@hapi/joi';
import { Request, RequestHandler } from 'express';
import { Auth } from '../models';
import requestMiddleware from '../middleware/request';
import Client from '../models/Client';

// Schema
export const createClientSchema = Joi.object().keys({
  name: Joi.string().required(),
  categoryId: Joi.number().required()
});

interface ClientBody {
 firstname: string;
 lastname: string;
 username: string;
 password: string;
 role: string;
}

// CRUD
const create: RequestHandler = async (req: Request<{}, {}, ClientBody>, res) => {
  const {
    firstname, lastname, username, password, role
  } = req.body;
  const auth = new Auth({ username, password, role });
  await auth.save();
  const client = new Client({ firstname, lastname, auth });
  try {
    await client.save();
    res.send({
      successful: true,
      message: 'Saved',
      response: client.toJSON()
    });
  } catch (ex) {
    res.status(500).send({ successful: false, error: ex });
  }
};

const read: RequestHandler = async (req, res) => {
  const { id } = req.query;
  const clients = id ? await Client.findById(id) : await Client.find();
  res.send({ successful: true, clients });
};

const update: RequestHandler = async (req: Request<{}, {}, ClientBody>, res) => {
  const clientId = '';
  const existingClient = Client.findById(clientId);
  if (existingClient) {
    const { firstname, lastname } = req.body;

    const client = new Client({ ...existingClient, firstname, lastname });
    try {
      await client.save();
      res.send({
        successful: true,
        message: 'Saved',
        response: client.toJSON()
      });
    } catch (ex) {
      res.status(500).send({ successful: false, error: ex });
    }
  } else {
    res.status(500).send({ successful: false, error: `Client with id : ${clientId} does not exist` });
  }
};

const deleteOne: RequestHandler = async (req, res) => {
  const _id = req.query.id;
  const { n, ok } = await Client.deleteOne({ _id });
  res.send({ successful: !!ok, message: ok ? `${n} matched clients deleted Successfully` : 'No clients deleted' });
};

class ClientController {
 create = create;

 read = requestMiddleware(read);

 update = update;

 delete = deleteOne;
};

export default ClientController;
