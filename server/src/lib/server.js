import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import config from 'config';

import routes from '../routes/index.js';

function server({ Database }) {
  const app = express();
  const server = createServer(app);
  const db = Database();

  if (config.get('cors.enabled')) {
    app.use(cors());
  }

  app.use(bodyParser.json());
  app.use('/api/v1', routes({ db }));

  let port = config.get('port');

  if (typeof port !== 'number') {
    port = 9090;
  }

  return server.listen(port, () => {
    console.log(`Listening on *:${port}`);
  });
}

export default server;
