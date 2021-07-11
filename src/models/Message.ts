import {
  Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import TimeStampPlugin, {
  ITimeStampedDocument
} from './common/timestamp';

// eslint-disable-next-line no-shadow
enum MessageMedium {
 SMS = 'SMS',
 EMAIL = 'EMAIL'
};
export interface IMessage extends ITimeStampedDocument {
 content: string;
 medium: string;
}

interface IMessageModel extends Model<IMessage> { }

const schema = new Schema<IMessage>({
  content: { type: String, index: true, required: true },
  medium: { type: String, enum: Object.values(MessageMedium), required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const Message: IMessageModel = model<IMessage, IMessageModel>(ModelNames.MESSAGE, schema);

export default Message;
