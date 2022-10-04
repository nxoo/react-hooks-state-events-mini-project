import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {CATEGORIES, TASKS} from "../data";

function App() {
    const [filterList, setFilterList] = useState(TASKS)
    const [selectedCategory, setSelectedCategory] = useState("All");

    function handleRemove(event) {
        const newList = filterList.filter((task) => task.text !== event.target.dataset.task);
        setFilterList(newList)
    }

    function handleFilterChange(event) {
        setSelectedCategory(event.target.textContent);
    }

    const tasksDisplay = filterList.filter(
        (task) => selectedCategory === "All" || task.category === selectedCategory
    )

    function handleSubmit(newTask) {
        setFilterList((filterList) => [...filterList, newTask])
    }

    return (
        <div className="App">
            <h2>My tasks</h2>
            <CategoryFilter categories={CATEGORIES} filter={handleFilterChange} selected={selectedCategory}/>
            <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
            <TaskList tasks={tasksDisplay} remove={handleRemove}/>
        </div>
    );
}

export default App;