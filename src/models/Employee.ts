import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';
import { IAuth } from './Auth';

export enum Role {
  SUPERVISOR = 'SUPERVISOR',
  EMPLOYEE = 'EMPLOYEE',
  CLIENT = 'CLIENT'
}

export interface IEmployee extends ITimeStampedDocument {
  firstname: string;
  lastname: string;
  auth: IAuth;
}

interface IEmployeeModel extends Model<IEmployee> { }

const schema = new Schema<IEmployee>({
 firstname: { type: String, index: true, required: true },
 lastname: { type: String, index: true, required: true },
 auth: { type: Schema.Types.ObjectId, ref: ModelNames.AUTH, required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const Employee: IEmployeeModel = model<IEmployee, IEmployeeModel>(ModelNames.EMPLOYEE, schema);

export default Employee;
