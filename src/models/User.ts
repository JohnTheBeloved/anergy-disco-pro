
import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';

export enum Role {
 SUPERVISOR = 'SUPERVISOR',
 EMPLOYEE = 'EMPLOYEE',
 CLIENT = 'CLIENT'
}
export interface IUser extends ITimeStampedDocument {
 username: string;
 password: string;
 role: string;
}

interface IUserModel extends Model<IUser> { }

const schema = new Schema<IUser>({
 username: { type: String, index: true, required: true },
 password: { type: String, index: true, required: true },
 role: { type: String, enum: Object.values(Role), index: true, required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const User: IUserModel = model<IUser, IUserModel>(ModelNames.EMPLOYEE, schema);

export default User;
