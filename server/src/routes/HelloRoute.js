import { Router } from 'express';

function HelloRoute({ model }) {
  const router = Router({ mergeParams: true });

  router.get('/', (request, response) => {
    response.status(200).json(model.getHello());
  });

  return router;
}

export default HelloRoute;
