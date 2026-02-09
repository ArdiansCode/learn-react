import { useState } from "react";
import useUsers from "./day-9-hooks/useUsers";

function AppDay9() {
    const {
        users,
        addUser,
        deleteUser,
        search,
        setSearch
    } = useUsers([
        { id: 1, name: "Budi", age: 21 },
        { id: 2, name: "Citra", age: 25 },
        { id: 3, name: "Andi", age: 17 }
    ]);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addUser(name, age);
        setName("");
        setAge("");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <input
            value={age}
            onChange={e => setAge(Number(e.target.value))}
            />
            <button>Add</button>
        </form>

        <input
            placeholder="Search user"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />

        <ul>
            {users.map(user => (
            <li
                key={user.id}
                style={{ color: user.age >= 20 ? "green" : "gray" }}
            >
                {user.name} ({user.age})
                <button onClick={() => deleteUser(user.id)}>❌</button>
            </li>
            ))}
        </ul>
        </>
    );
}

export default AppDay9;
