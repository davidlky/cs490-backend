const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const DataJson = require('./data.json');
const middlewares = jsonServer.defaults({
  static: 'public/',
});

var request = require("request");

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

server.get('/get_sales', (req, res) => {
  var options = { method: 'GET',
    url: 'http://ec2-18-219-250-95.us-east-2.compute.amazonaws.com/data',
    headers:
     { 'postman-token': '12ac57fb-9584-ef40-e38d-d179fe1f096a',
       'cache-control': 'no-cache' },
    body: '{"type":"SalesOrders", "constraints":[]}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(JSON.parse(body));
  });
});

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});
