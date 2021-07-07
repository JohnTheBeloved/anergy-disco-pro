import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';
import { IUser } from './User';

export enum Role {
 SUPERVISOR = 'SUPERVISOR',
 EMPLOYEE = 'EMPLOYEE',
 CLIENT = 'CLIENT'
}

export interface IEmployee extends IUser, ITimeStampedDocument {
 uuid: string
 firstname: string;
 lastname: string;
 username: string;
 password: string;
 role: string;
}

interface IEmployeeModel extends Model<IEmployee> { }

const schema = new Schema<IEmployee>({
 uuid: { type: String, index: true, required: true },
 firstname: { type: String, index: true, required: true },
 lastname: { type: String, index: true, required: true },
 username: { type: String, index: true, required: true },
 password: { type: String, index: true, required: true },
 role: { type: String, enum: Object.values(Role), index: true, required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const Employee: IEmployeeModel = model<IEmployee, IEmployeeModel>(ModelNames.EMPLOYEE, schema);

export default Employee;
