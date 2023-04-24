/* eslint-disable @typescript-eslint/no-var-requires */
const jsonServer = require('json-server');
const { API_SERVER_PORT } = require('../src/constants/serverConstants');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const routeMiddleware = (req, res, next) => {
  const json = require('../resources/example.json');
  const path = req.originalUrl;

  if (path === '/definition') {
    res.json(json);
  } else {
    const error = new Error('Pathname request error');
    error.status = 500;
    next(error);
  }
};

server.use(middlewares);
server.use(routeMiddleware);

server.listen(API_SERVER_PORT, () => {
  console.log(`JSON Server with middleware is running on http://localhost:${API_SERVER_PORT}`);
});
