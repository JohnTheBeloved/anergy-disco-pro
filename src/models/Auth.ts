
import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';

export enum Role {
 ADMIN = 'ADMIN',
 SUPERVISOR = 'SUPERVISOR',
 EMPLOYEE = 'EMPLOYEE',
 CLIENT = 'CLIENT'
}
export interface IAuth extends ITimeStampedDocument {
 username: string;
 password: string;
 role: string;
}

interface IAuthModel extends Model<IAuth> { }

const schema = new Schema<IAuth>({
 username: { type: String, index: true, required: true },
 password: { type: String, index: true, required: true },
 role: { type: String, enum: Object.values(Role), index: true, required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const Auth: IAuthModel = model<IAuth, IAuthModel>(ModelNames.AUTH, schema);

export default Auth;
