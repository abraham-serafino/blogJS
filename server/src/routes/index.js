import { Router } from 'express';
import HelloModel from '../models/HelloModel.js';
import HelloRoute from './HelloRoute.js';

function routes({ db }) {
  const router = Router({ mergeParams: true });
  const model = HelloModel({ db });

  router.use('/hello', HelloRoute({ model }));

  return router;
}

export default routes;
