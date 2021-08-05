const config = {
  env: process.env.STUDYSPOTS_ENV,
  redis: {
    redisServerPort: process.env.REDIS_SERVER_PORT,
    redisServerURL: process.env.REDIS_SERVER_URL,
  },
};

export { config };
