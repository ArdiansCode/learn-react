import { useReducer, useMemo } from "react";
import useStorage from "./localstorage";

const initialState = {
  tasks: [],
  search: "",
  filter: "all"
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      if (!action.payload.task) return state;

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            task: action.payload.task,
            isDone: action.payload.isDone
          }
        ]
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload)
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload
            ? { ...t, isDone: !t.isDone }
            : t
        )
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}

function useTask() {
  const [storedTasks, dispatchStorage] = useStorage("Tasks", []);

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    tasks: storedTasks
  });

  // sync reducer tasks ke localStorage reducer
  useMemo(() => {
    dispatchStorage({ type: "SET", payload: state.tasks });
  }, [state.tasks]);

  const filteredTasks = state.tasks
    .filter(t =>
      t.task.toLowerCase().includes(state.search.toLowerCase())
    )
    .filter(t => {
      if (state.filter === "active") return !t.isDone;
      if (state.filter === "completed") return t.isDone;
      return true;
    });

  return {
    addTask: (task, isDone) =>
      dispatch({ type: "ADD_TASK", payload: { task, isDone } }),

    deleteTask: id =>
      dispatch({ type: "DELETE_TASK", payload: id }),

    isDoneTask: id =>
      dispatch({ type: "TOGGLE_TASK", payload: id }),

    search: state.search,
    setSearch: value =>
      dispatch({ type: "SET_SEARCH", payload: value }),

    setFilter: value =>
      dispatch({ type: "SET_FILTER", payload: value }),

    filteredTasks
  };
}

export default useTask;
