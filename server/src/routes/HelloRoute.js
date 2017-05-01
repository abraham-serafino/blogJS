// @flow
import { Router } from 'express';

function HelloRoute(dependencies: { service: { getHello: Function } }) {
  const { service } = dependencies;
  const router: { get: Function } = Router({ mergeParams: true });

  router.get('/', (request: {}, response: { status: Function }) => {
    response.status(200).json(service.getHello());
  });

  return router;
}

export default HelloRoute;
