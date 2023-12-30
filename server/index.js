const tasks = require("./tasks");
const { connectToDatabase, closeDatabaseConnection } = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connectToDatabase()

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

process.on('SIGINT', () => {
  closeDatabaseConnection();
  server.close();
  process.exit(0);
});
