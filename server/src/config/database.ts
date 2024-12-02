import { Pool, PoolConfig } from 'pg';
import { config } from './environment';

const poolConfig: PoolConfig = {
  connectionString: config.database.url,
  ssl: config.nodeEnv === 'production' ? { rejectUnauthorized: false } : false
};

const pool = new Pool(poolConfig);

// Test the connection
pool.query('SELECT NOW()', (err: Error | null) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connected successfully');
  }
});

export default pool; 