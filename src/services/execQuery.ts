import openDB from '../database/sqlite';

async function execQuery(query: string) {
  try {
    const db = await openDB();
    const result = await db.exec(query);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getAll(query: string) {
  try {
    const db = await openDB();
    const result = await db.all(query);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default { execQuery, getAll };
