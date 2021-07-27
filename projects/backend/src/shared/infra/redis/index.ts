
import { config } from '../../config/index'
import { FlowUtils } from '../../utils/flowUtils';
import redis from 'redis';

const port = config.redis.redisServerPort as string;
const host = config.redis.redisServerURL as string;

const connection = redis.createClient(Number(port), host);

class Redis {
  private client: redis.RedisClient;

  constructor (client: redis.RedisClient) {
    this.client = client;
  }

  public async connect (): Promise<void> {
    let retries = 0;
    let maxRetries = 6;

    while (retries < maxRetries) {
      if (this.client.connected) {
        console.log(`[Redis]: Connected to redis server at ${host}:${port}`)
        break;
      } 

      await FlowUtils.sleep(1000);
      retries++;
    }

    if (retries === maxRetries) {
      throw new Error('Could not connect to redis')
    }
  }

  public async close (): Promise<void> {
    this.client.quit((err) => {
      if (err) throw err;
    });
  }
}


const redisConnection = new Redis(connection);

redisConnection.connect();

export { redisConnection }
