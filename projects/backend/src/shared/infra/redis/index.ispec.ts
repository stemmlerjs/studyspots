import { redisConnection } from './index';

describe('redis', () => {
  it('can connect', async () => {
    try {
      await redisConnection.connect();
      await redisConnection.close();
    } catch (error) {
      console.error('Unable to connect to the redis:', error);
      throw error;
    }
  });
});
