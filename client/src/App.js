import React from "react";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";
import axios from "axios";

class App extends React.Component {
    state = { tasks: [], currentTask: "" };

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks = async () => {
        try {
            const response = await axios.get("/api/tasks"); 
            this.setState({ tasks: response.data });
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { currentTask } = this.state;
        try {
            await axios.post("/api/tasks", { task: currentTask, completed: false });
            this.setState({ currentTask: "" });
            this.fetchTasks();
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    handleUpdate = async (taskId) => {
        try {
            const updatedTasks = this.state.tasks.map((task) =>
                task._id === taskId ? { ...task, completed: !task.completed } : task
            );
            this.setState({ tasks: updatedTasks });
            await axios.put(`/api/tasks/${taskId}`, { completed: updatedTasks.find(task => task._id === taskId)?.completed }); 
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    handleDelete = async (taskId) => {
        try {
            await axios.delete(`/api/tasks/${taskId}`);
            this.fetchTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    handleChange = (e) => {
        this.setState({ currentTask: e.target.value });
    };

    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
            <Paper elevation={3} className="container">
                <div className="heading">TO-DO</div>
                <form
                    onSubmit={this.handleSubmit}
                    className="flex"
                    style={{ margin: "15px 0" }}
                >
                    <TextField
                        variant="outlined"
                        size="small"
                        style={{ width: "80%" }}
                        value={this.state.currentTask}
                        required={true}
                        onChange={this.handleChange}
                        placeholder="Add New TO-DO"
                    />
                    <Button
                        style={{ height: "40px" }}
                        color="primary"
                        variant="outlined"
                        type="submit"
                    >
                        Add task
                    </Button>
                </form>
                <div>
                    {tasks.map((task) => (
                        <Paper
                            key={task._id}
                            className="flex task_container"
                        >
                            <Checkbox
                                checked={task.completed}
                                onClick={() => this.handleUpdate(task._id)}
                                color="primary"
                            />
                            <div
                                className={
                                    task.completed
                                        ? "task line_through"
                                        : "task"
                                }
                            >
                                {task.task}
                            </div>
                            <Button
                                onClick={() => this.handleDelete(task._id)}
                                color="secondary"
                            >
                                delete
                            </Button>
                        </Paper>
                    ))}
                </div>
            </Paper>
        </div>
        );
    }
}

export default App;
