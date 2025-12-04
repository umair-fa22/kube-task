const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Kubernetes! v2\n');
});
server.listen(8080, () => {
  console.log('Server running on port 8080');
});