import { connection } from './config';

describe('db', () => {
  it('can connect', async () => {
    try {
      await connection.authenticate();
      await connection.close();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error;
    }
  });
});
