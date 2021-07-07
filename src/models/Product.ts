import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';

export interface IProduct extends ITimeStampedDocument {
 name: string;
 category: IProduct;
}

interface IProductModel extends Model<IProduct> { }

const schema = new Schema<IProduct>({
 name: { type: String, index: true, required: true },
 category: { type: Schema.Types.ObjectId, ref: ModelNames.PRODUCT_CATEGORY, required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const Product: IProductModel = model<IProduct, IProductModel>(ModelNames.PRODUCT, schema);

export default Product;
