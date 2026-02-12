import { useState } from "react";
import useLocalStorage from "./day-11-localstorage/day-11-Custom-hook-useLocalStorage";

function AppDay11() {
    const [users, setUsers] = useLocalStorage("users", []);
    const [name, setName] = useState("");

    const addUser = () => {
        if (!name.trim()) return;

        const newUser = {
            id: Date.now(),
            name,
        };

        setUsers((prev) => [...prev, newUser]);
        setName("");
    };

    const clearAll = () => {
        const confirmClear = window.confirm(
           "Apakah kamu yakin ingin menghapus semua user?"
        );

        if (confirmClear) {
           setUsers([]);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>User List</h2>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama"
            />

            <button onClick={addUser}>Tambah</button>
            <button onClick={clearAll} style={{ marginLeft: "10px" }}>
              Clear All
            </button>

            <h3>Total User: {users.length}</h3>

            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
        </div>
    );
}

export default AppDay11;
