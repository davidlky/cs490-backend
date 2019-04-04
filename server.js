const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const DataJson = require('./data.json');
const middlewares = jsonServer.defaults({
  static: 'public/',
});

const port = process.env.PORT || 3000;
server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get('/get_data', (req, res) => {
  if (req.body.type) {
    res.jsonp(DataJson[req.body.type.substr(3).toLowerCase()]);
  } else {
    req.jsonp(DataJson);
  }
});
server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});
