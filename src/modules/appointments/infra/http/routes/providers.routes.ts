import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailiabilityController from '../controllers/ProviderMonthAvailiabilityController';
import ProviderDayAvailiabilityController from '../controllers/ProviderDayAvailiabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providersMonthController = new ProviderMonthAvailiabilityController();
const providersDayController = new ProviderDayAvailiabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providersMonthController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providersDayController.index,
);

export default providersRouter;
