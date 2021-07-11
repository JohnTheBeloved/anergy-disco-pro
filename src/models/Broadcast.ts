import {
  Model, Schema, model
} from 'mongoose';
import { IClient } from './Client';
import ModelNames from './common/constants';
import TimeStampPlugin, {
  ITimeStampedDocument
} from './common/timestamp';
import { IMessage } from './Message';

// eslint-disable-next-line no-shadow
enum BroadcastMedium {
 SMS = 'SMS',
 EMAIL = 'EMAIL'
};
export interface IBroadcast extends ITimeStampedDocument {
 client: IClient;
 message: IMessage;
 sendDate: string;
}

interface IBroadcastModel extends Model<IBroadcast> { }

const schema = new Schema<IBroadcast>({
  client: { type: Schema.Types.ObjectId, ref: ModelNames.CLIENT, required: true },
  message: { type: Schema.Types.ObjectId, ref: ModelNames.MESSAGE, required: true },
  sendDate: { type: Date, required: true },
  sent: { type: String }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const Broadcast: IBroadcastModel = model<IBroadcast, IBroadcastModel>(ModelNames.BROADCAST, schema);

export default Broadcast;
