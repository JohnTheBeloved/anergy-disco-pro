import Joi, { number, string } from '@hapi/joi';
import { Request, RequestHandler } from 'express';
import requestMiddleware from '../middleware/request';
import Client from '../models/Client';

// Schema
export const createClientSchema = Joi.object().keys({
  name: Joi.string().required(),
  categoryId: Joi.number().required()
});

interface ClientBody {
 name: string;
 category: ClientBody;
}

// CRUD
const create: RequestHandler = async (req: Request<{}, {}, ClientBody>, res) => {
 const { name, category } = req.body;

 const client = new Client({ name, category });
 try{
  await client.save();
  res.send({
    message: 'Saved',
    response: client.toJSON()
  });
} catch (ex) {
 res.status(500).send({successful: false,error: ex});
}
};

const read: RequestHandler = async (req, res) => {
 const id = req.query.id;
 const clients = id ? await Client.findById(id) : await Client.find();
 res.send({successful: true, clients });
};

const update: RequestHandler = async (req: Request<{}, {}, ClientBody>, res) => {

 const clientId = '';
 const existingClient = Client.findById(clientId);
 if (existingClient) {
   const { name, category } = req.body;

   const client = new Client({ name, category });
   try {
     await client.save();
     res.send({
       successful: true,
       message: 'Saved',
       response: client.toJSON()
     });
  } catch (ex) {
    res.status(500).send({successful: false,error: ex});
  }
 } else {
    res.status(500).send({successful: false,error: `Client with id : ${clientId} does not exist`});
 }

};

const deleteOne: RequestHandler = async (req, res) => {
 const _id = req.query.id;
 const { n, ok } = await Client.deleteOne({ _id });
 res.send({ successful: !!ok,  message:  ok ? `${n} matched clients deleted Successfully` : 'No clients deleted' });
};


class ClientController {
 create = create;
 read = requestMiddleware(read);
 update = update;
 delete = deleteOne;
};

export default ClientController;
