"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var config = {
    env: process.env.STUDYSPOTS_ENV,
    redis: {
        redisServerPort: process.env.REDIS_SERVER_PORT,
        redisServerURL: process.env.REDIS_SERVER_URL,
    },
};
exports.config = config;
