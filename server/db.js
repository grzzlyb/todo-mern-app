const sqlite3 = require('sqlite3').verbose();

let db;

const connectToSQLite = () => {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database('./todo.db', (err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      console.log('Connected to the SQLite database.');
      resolve();
    });
  });
};

const closeSQLiteConnection = () => {
  if (db) {
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Closed the SQLite database connection.');
    });
  }
};

module.exports = {
  connectToDatabase: connectToSQLite,
  closeDatabaseConnection: closeSQLiteConnection,
};
