module.exports = {
  SERVER_PORT: process.env.SERVER_PORT || 9090, // When starting server using node not docker-compose
  REDIS_URL: process.env.REDIS_URL,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_USER: process.env.REDIS_USER,
  REDIS_PASS: process.env.REDIS_PASS,
};
