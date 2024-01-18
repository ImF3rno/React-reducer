import { useState } from "react";
import { useGlobalContex } from "../../context/TasksContext";
import {useId} from 'react';

const AddTask = () => {
    const messageid=useId()
    const { addTask, handleForm } = useGlobalContex();
    const [newTask, setNewTask] = useState({
        id: {messageid},
        title: "",
        description: ""
    });

    const handleInput = (e) => {
        setNewTask({
        ...newTask,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask({
            id:"",
            title: "",
            description: "",
        });
        handleForm(false);
        console.log("Informacija:",newTask)
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                type="text"
                placeholder="Title"
                className="form-control"
                name="title"
                value={newTask.title}
                onChange={handleInput}
                />
            </div>
            <div className="form-group">
                <textarea
                placeholder="Description"
                className="form-control"
                name="description"
                value={newTask.description}
                onChange={handleInput}
                ></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    );
};

export default AddTask;
