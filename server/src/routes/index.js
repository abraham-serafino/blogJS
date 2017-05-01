// @flow
import { Router } from 'express';
import HelloService from '../models/HelloModel.js';
import HelloRoute from './HelloRoute.js';

function routes(dependencies: { db: any }) {
  const router: any = Router({ mergeParams: true });
  const { db } = dependencies;
  const service = HelloService({ db });

  router.use('/hello', HelloRoute({ service }));

  return router;
}

export default routes;
