const server = require("./index");
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = server;
