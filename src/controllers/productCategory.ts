import Joi, { number, string } from '@hapi/joi';
import { Request, RequestHandler } from 'express';
import requestMiddleware from '../middleware/request';
import ProductCategory from '../models/ProductCategory';

// Schema
export const createProductCategorySchema = Joi.object().keys({
  name: Joi.string().required(),
  categoryId: Joi.number().required()
});

export interface ProductCategoryBody {
 name: string;
}

// CRUD
const create: RequestHandler = async (req: Request<{}, {}, ProductCategoryBody>, res) => {
  const { name } = req.body;

  const product = new ProductCategory({ name });
  try {
    await product.save();
    res.send({
      successful: false,
      message: 'Saved',
      book: product.toJSON()
    });
  } catch (ex) {
    res.status(500).send({ successful: false, error: ex });
  }
};

const read: RequestHandler = async (req, res) => {
  const { id } = req.query;
  const products = id ? await ProductCategory.findById(id) : await ProductCategory.find();
  res.send({ successful: true, products });
};

const update: RequestHandler = async (req: Request<{}, {}, ProductCategoryBody>, res) => {
  const productId = '';
  const existingProductCategory = ProductCategory.findById(productId);
  if (existingProductCategory) {
    const { name } = req.body;

    const product = new ProductCategory({ name });
    try {
      await product.save();

      res.send({
        successful: true,
        message: 'Saved',
        book: product.toJSON()
      });
    } catch (ex) {
      res.status(500).send({ successful: false, error: ex });
    }
  } else {
    res.status(500).send({ successful: false, error: `ProductCategory with id : ${productId} does not exist` });
  }
};

const deleteOne: RequestHandler = async (req, res) => {
  const _id = req.query.id;
  const { n, ok } = await ProductCategory.deleteOne({ _id });
  res.send({ successful: !!ok, message: ok ? `${n} matched products deleted Successfully` : 'No products deleted' });
};

class ProductCategoryController {
 create = create;

 read = requestMiddleware(read);

 update = update;

 delete = deleteOne;
};

export default ProductCategoryController;
