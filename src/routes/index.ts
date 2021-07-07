import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../../openapi.json';

import productRouter from './product'
import productCategoryRouter from './productCategory'

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

router.use('/products', productRouter)
router.use('/product-categories', productCategoryRouter)

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
