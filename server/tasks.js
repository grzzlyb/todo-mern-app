const sqlite3 = require('sqlite3').verbose();
const express = require("express");
const router = express.Router();

const db = require("./db");

db.connectToDatabase().then(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      task TEXT NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT 0
    )
  `);
}).catch((err) => {
  console.error('Error connecting to the SQLite database:', err);
});

router.post("/", async (req, res) => {
  try {
    const { task, completed } = req.body;
    await db.run('INSERT INTO tasks (task, completed) VALUES (?, ?)', [task, completed]);
    res.send({ task, completed });
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await db.all('SELECT * FROM tasks');
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { task, completed } = req.body;
    await db.run('UPDATE tasks SET task = ?, completed = ? WHERE id = ?', [task, completed, req.params.id]);
    res.send({ id: req.params.id, task, completed });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await db.run('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    res.send({ message: 'Task deleted successfully' });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
