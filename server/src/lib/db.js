// @flow
import pg from 'pg';
import config from 'config';

function Database(): { query: (text: string) => Promise<any>, escape: (src: string) => string } {
  const pool = new pg.Pool(config.get('database'));

  pool.on('error', (error: { stack: string, message: string }) => {
    console.error(`Pool error: ${error.message}\n${error.stack}`);
  });

  return {
    query(text: string) {
      return new Promise((resolve: Function, reject: Function) => {
        pool.connect((error: any, client: any, release: Function) => {
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

    escape(src: string) {
      return src.replace('\'', '\'\'');
    }
  };
}

export default Database;
