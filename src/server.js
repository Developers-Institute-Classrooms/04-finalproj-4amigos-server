const server = require("./app");
const PORT = 5500;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = server;
