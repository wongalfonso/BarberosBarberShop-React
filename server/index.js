const server = require('./server');

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`)
});
