import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';
import { Role } from './Employee';

export interface IMessageCategory extends ITimeStampedDocument {
 uuid: string;
 content: string;
 medium: string;
 lastname: string;
}

interface IMessageCategoryModel extends Model<IMessageCategory> { }

const schema = new Schema<IMessageCategory>({
 uuid: { type: String, index: true, required: true },
 firstname: { type: String, index: true, required: true },
 lastname: { type: String, enum: Object.values(Role), index: true, required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const MessageCategory: IMessageCategoryModel = model<IMessageCategory, IMessageCategoryModel>(ModelNames.CLIENT, schema);

export default MessageCategory;
