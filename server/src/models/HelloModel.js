// @flow
function HelloService(dependencies: { db: { query: (string) => Promise<any>, escape: (string) => string } }):
    { getHello: () => { message: string } } {

  const { query, escape } = dependencies.db;

  return {
    getHello(): { message: string } {
      return { message: 'Hello world' };
    }
  };
}

export default HelloService;
