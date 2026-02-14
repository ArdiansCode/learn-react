import { useState } from "react";
import useTask from "./day-12-mini project-simple task manager/useTask";

function AppTaskManager() {
    const {
        addTask,
        deleteTask,
        search,
        setSearch,
        isDoneTask,
        filteredTasks,
        setFilter
    } = useTask();

    const [task, setTask] = useState("");
    const [isDone, setIsDone] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        addTask(task, isDone);
        setTask("");
        setIsDone(false)
    }

    return (
        <>
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="add task"
            value={task}
            onChange={e => setTask(e.target.value)}
            />
            <input
            className="checkbox"
            type="checkbox"
            value={isDone}
            onChange={e => setIsDone(e.target.checked)}
            />
            <button>Add Task</button>
        </form>


        <h2>Task List</h2>
        <input
            placeholder="Search Task"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />

        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>

        <ul>
            {filteredTasks.map(t => (
            <li
                key={t.id}
                style={{ color: t.isDone == true ? "green" : "gray" }}
            >
                {t.task} ({t.isDone})
                <button onClick={() => deleteTask(t.id)}>❌</button>
                <button onClick={() => isDoneTask(t.id)}>✅</button>
            </li>
            ))}
        </ul>
        </>
    )
}

export default AppTaskManager;