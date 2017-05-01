function HelloModel({ db }) {
  return {
    getHello() {
      return { message: 'Hello world' };
    }
  };
}

export default HelloModel;
