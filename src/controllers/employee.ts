import Joi, { number, string } from '@hapi/joi';
import { Request, RequestHandler } from 'express';
import { Auth, Employee } from '../models';
import requestMiddleware from '../middleware/request';

// Schema
export const createEmployeeSchema = Joi.object().keys({
  name: Joi.string().required(),
  categoryId: Joi.number().required()
});

interface EmployeeBody {
 firstname: string;
 lastname: string;
 username: string;
 password: string;
 role: string;
}

// CRUD
const create: RequestHandler = async (req: Request<{}, {}, EmployeeBody>, res) => {
  const {
    firstname, lastname, username, password, role
  } = req.body;
  const auth = new Auth({ username, password, role });
  await auth.save();
  const employee = new Employee({ firstname, lastname, auth });
  try {
    await employee.save();
    res.send({
      message: 'Saved',
      response: employee.toJSON()
    });
  } catch (ex) {
    res.status(500).send({ successful: false, error: ex });
  }
};

const read: RequestHandler = async (req, res) => {
  const { id } = req.query;
  const employees = id ? await Employee.findById(id) : await Employee.find();
  res.send({ successful: true, employees });
};

// TODO: Other roles can only update self
const update: RequestHandler = async (req: Request<{}, {}, EmployeeBody>, res) => {
  const employeeId = '';
  const existingEmployee = Employee.findById(employeeId);
  if (existingEmployee) {
    const { firstname, lastname } = req.body;

    const employee = new Employee({ ...existingEmployee, firstname, lastname });
    try {
      await employee.save();

      res.send({
        successful: true,
        message: 'Saved',
        response: employee.toJSON()
      });
    } catch (ex) {
      res.status(500).send({ successful: false, error: ex });
    }
  } else {
    res.status(500).send({ successful: false, error: `Employee with id : ${employeeId} does not exist` });
  }
};

// TODO: Implement Employee cannot delete self
const deleteOne: RequestHandler = async (req, res) => {
  const _id = req.query.id;
  const { n, ok } = await Employee.deleteOne({ _id });
  res.send({ successful: !!ok, message: ok ? `${n} matched employees deleted Successfully` : 'No employees deleted' });
};

class EmployeeController {
 create = create;

 read = requestMiddleware(read);

 update = update;

 delete = deleteOne;
};

export default EmployeeController;
