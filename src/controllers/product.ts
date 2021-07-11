import Joi, { number, string } from '@hapi/joi';
import { Request, RequestHandler } from 'express';
import requestMiddleware from '../middleware/request';
import Product from '../models/Product';
import { ProductCategoryBody } from './productCategory';

// Schema
export const createProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  categoryId: Joi.number().required()
});

interface ProductBody {
 name: string;
 category: ProductCategoryBody;
}

// CRUD
const create: RequestHandler = async (req: Request<{}, {}, ProductBody>, res) => {
  const { name, category } = req.body;

  const product = new Product({ name, category });
  try {
    await product.save();
    res.send({
      message: 'Saved',
      response: product.toJSON()
    });
  } catch (ex) {
    res.status(500).send({ successful: false, error: ex });
  }
};

const read: RequestHandler = async (req, res) => {
  const { id } = req.query;
  const products = id ? await Product.findById(id) : await Product.find();
  res.send({ successful: true, products });
};

const update: RequestHandler = async (req: Request<{}, {}, ProductBody>, res) => {
  const productId = '';
  const existingProduct = Product.findById(productId);
  if (existingProduct) {
    const { name, category } = req.body;

    const product = new Product({ name, category });
    try {
      await product.save();

      res.send({
        successful: true,
        message: 'Saved',
        response: product.toJSON()
      });
    } catch (ex) {
      res.status(500).send({ successful: false, error: ex });
    }
  } else {
    res.status(500).send({ successful: false, error: `Product with id : ${productId} does not exist` });
  }
};

const deleteOne: RequestHandler = async (req, res) => {
  const _id = req.query.id;
  const { n, ok } = await Product.deleteOne({ _id });
  res.send({ successful: !!ok, message: ok ? `${n} matched products deleted Successfully` : 'No products deleted' });
};

class ProductController {
 create = create;

 read = requestMiddleware(read);

 update = update;

 delete = deleteOne;
};

export default ProductController;
