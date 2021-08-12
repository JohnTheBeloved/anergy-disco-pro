import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../../openapi.json';

import auth from './auth';
import clients from './client';
import employees from './employee';
import messages from './message';
import products from './product';
import productCategories from './productCategory';

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

router.use('/auth', auth);
router.use('/clients', clients);
router.use('/employees', employees);
router.use('/messages', messages);
router.use('/products', products);
router.use('/product-categories', productCategories);

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
