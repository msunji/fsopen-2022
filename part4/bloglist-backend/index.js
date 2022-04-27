const config = require('./utils/config');
const http = require('http');
const app = require('./app');
const { info, error } = require('./utils/logger');

const server = http.createServer(app);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
