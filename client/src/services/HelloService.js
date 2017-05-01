const HelloService = {
  getHello() {
    return fetch('http://localhost:9090/api/v1/hello')
        .then(response => response.json());
  }
};

export default HelloService;
