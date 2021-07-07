import {
 Model, Schema, model
} from 'mongoose';
import ModelNames from './common/constants';
import TimeStampPlugin, {
 ITimeStampedDocument
} from './common/timestamp';

export interface IProductCategory extends ITimeStampedDocument {
 name: string;
}

interface IProductCategoryModel extends Model<IProductCategory> { }

const schema = new Schema<IProductCategory>({
 name: { type: String, index: true, required: true }
});

// Add timestamp plugin for createdAt and updatedAt in miliseconds from epoch
schema.plugin(TimeStampPlugin);

const ProductCategory: IProductCategoryModel = model<IProductCategory, IProductCategoryModel>(ModelNames.PRODUCT_CATEGORY, schema);

export default ProductCategory;
