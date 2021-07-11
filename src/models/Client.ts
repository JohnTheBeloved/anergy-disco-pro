import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import { Role } from './Employee';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';
import { IUser } from './User';

export interface IClient extends IUser, ITimeStampedDocument {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  role: string;
}

interface IClientModel extends Model<IClient> { }

const schema = new Schema<IClient>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, index: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const Client: IClientModel = model<IClient, IClientModel>(ModelNames.CLIENT, schema);

export default Client;
