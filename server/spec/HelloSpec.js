import request from 'supertest';
import server from '../src/lib/server.js';
import Database from '../src/lib/db.js';

describe('Hello World', () => {
  let app;

  beforeAll(() => {
    app = server({ Database });
  });

  it('should return Hello World', done => {
    request(app)
        .get('/api/v1/hello')
        .expect(200)

        .end((error, response) => {
          if (error) {
            done(error);
          }

          expect(response.body.message).toEqual('Hello world');
          done();
        });
  });
});
