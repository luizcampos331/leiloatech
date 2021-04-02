import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersBidsController from '../controllers/UsersBidsController';

const routes = Router();
const usersBidsController = new UsersBidsController();

routes.post(
  '/bid',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      bid: Joi.number().required(),
    },
  }),
  usersBidsController.create,
);

routes.get('/winner', usersBidsController.show);

export default routes;
