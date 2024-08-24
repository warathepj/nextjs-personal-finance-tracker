// lib/database.ts/
//how to excute code in lib/database.ts/ and create a table in mydb.sqlite
import Database from 'better-sqlite3';

const db = new Database('mydb.sqlite'); // Creates or opens the database file

// Example: Create a table if it doesn't exist
const createTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT
  )
`);
createTable.run();

export default db;
