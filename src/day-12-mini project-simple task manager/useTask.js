import {useState, useMemo, useEffect} from "react";
import useStorage from "./useLocalStorage";

function useTask() {
    const [tasks, setTasks] = useStorage("Tasks", []);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState('all');

    function addTask(task, isDone) {
        if(!task) return;

        setTasks(prev => [...prev, {id: Date.now(), task, isDone}])
    } 

    function deleteTask(id) {
        localStorage.removeItem(setTasks(prev => prev.filter(t => t.id !== id)))
    }

    function isDoneTask(id) {
        localStorage.setItem(setTasks(prev => prev.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t)))
    }

    const searchTask = useMemo(() => {
        return tasks.filter(t => (
            t.task.toLowerCase().includes(search.toLowerCase())
        ))
    },[tasks, search]);

    const filteredTasks = tasks.filter(t => {
        if (filter === "active") return !t.isDone;
        if (filter === "completed") return t.isDone;
        return true;
    });


    return {
        tasks: searchTask,
        addTask,
        deleteTask,
        search,
        setSearch,
        isDoneTask,
        filteredTasks,
        setFilter
    }
}

export default useTask;