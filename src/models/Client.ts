import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import { Role } from './Employee';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';
import { IAuth } from './Auth';

export interface IClient extends ITimeStampedDocument {
  firstname: string;
  lastname: string;
  auth: IAuth;
}

interface IClientModel extends Model<IClient> { }

const schema = new Schema<IClient>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  auth: { type: Schema.Types.ObjectId, ref: ModelNames.AUTH, required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const Client: IClientModel = model<IClient, IClientModel>(ModelNames.CLIENT, schema);

export default Client;
