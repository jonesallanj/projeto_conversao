import { open } from 'sqlite';
import { Database } from 'sqlite3';

async function openDB() {
  return open({
    filename: './src/database/database.db',
    driver: Database,
  });
}

export default openDB;
