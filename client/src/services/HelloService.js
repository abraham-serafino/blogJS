// @flow
const HelloService = {
  getHello(): Promise<*> {
    return fetch('http://localhost:9090/api/v1/hello')
        .then((response: Response) => response.json());
  }
};

export default HelloService;
