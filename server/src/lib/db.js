import pg from 'pg';
import config from 'config';

function Database() {
  const pool = new pg.Pool(config.get('database'));

  pool.on('error', (message, stack) => {
    console.error(`Pool error: ${message}\n${stack}`);
  });

  return {
    query(text) {
      return new Promise((resolve, reject) => {
        pool.connect((error, client, release) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            client.query(text, [], (error, result) => {
              if (error) {
                console.error(error);
                reject(error);
              } else {
                release();
                resolve(result);
              }
            });
          }
        });
      });
    },

    escape(src) {
      return src.replace('\'', '\'\'');
    }
  };
}

export default Database;
