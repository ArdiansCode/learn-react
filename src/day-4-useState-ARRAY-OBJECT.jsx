import { useState } from "react";

/*TUGAS 1 — ADD USER
-State array users
-Tombol Add User
-Tambah user baru ke list

TUGAS 2 — DELETE USER
-Tiap user punya tombol ❌
-Klik → user hilang

TUGAS 3 — CONDITIONAL STYLE
-Umur ≥ 20 → hijau
-Umur < 20 → abu-abu
*/

function UserManager() {
    const [users, setUsers] = useState([
        {id: 1, name: "Budi", age: 21 },
        {id: 2, name: "Citra", age: 25 },
        {id: 3, name: "Andi", age: 17 }
    ]);

    function AddUser() {
        setUsers([...users, {id: Date.now(), name: "Fitri", age: 18}]);
    }

    function DeleteUser(id) {
        setUsers(users.filter(user => user.id !== id))
    }

    function UserCard({id, name, age, style}) {
        return (
            <li style={style}>
                {name} ({age}) <button onClick={() => DeleteUser(id)}>❌</button>
            </li>
        )
    }

    return (
        <>
        <button onClick={AddUser}>
            Add User
        </button>
        <ul>
            {users.map((user) => (
                <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                age ={user.age}
                style={{ 
                    color: user.age >= 20 ? "green" : "gray"
                 }}
                />
            ))}

        </ul>
        </>
    )
}

export default UserManager;