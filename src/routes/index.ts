import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../../openapi.json';

import auth from './auth'
import employee from './employee'
import product from './product'
import productCategory from './productCategory'

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

router.use('/auth', auth)
router.use('/employees', employee)
router.use('/products', product)
router.use('/product-categories', productCategory)

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
