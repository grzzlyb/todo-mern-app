# Todo MERN App

This Todo application is built using the MERN stack, consisting of MongoDB, Express.js, React.js, and Node.js. It allows users to create, read, update, and delete tasks.

## Features

- **Create Task:** Add new tasks to the list.
- **Mark as Completed:** Toggle tasks as completed or pending.
- **Delete Task:** Remove tasks from the list.
- **View All Tasks:** See all tasks in the list.

## Installation

1. **Clone Repository:**
    ```bash
    git clone https://github.com/grzzlyb/todo-mern-app.git
    cd mern-todo-app
    ```

2. **Install Dependencies:**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. **Start Application:**
    ```bash
    # Start the server and client concurrently
    cd ../
    npm start
    ```

The application will be running at http://localhost:8080.

## Folder Structure

- **`server/`:** Backend Node.js and Express server.
- **`client/`:** Frontend React.js application.
- **`server/routes/`:** Backend API routes for handling tasks.
- **`client/src/`:** React components, services, and views.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - SQLite

- **Frontend:**
  - React.js
  - Material-UI (for UI components)

- **API Communication:**
  - Axios (for making HTTP requests)

## Configuration

1. **Database Setup:**
   - For SQLite: Setup the SQLite database as required. (here, look for testdb.db file)

2. **Environment Variables:**
   - Configure any necessary environment variables in a `.env` file.

## Contribution

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make modifications and commit changes (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature/improvement`).
5. Create a pull request.

## License

This project is licensed under the MIT License.
