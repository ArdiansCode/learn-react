import { useState } from "react";

function AppUserManager() {
    const initialUsers = [
        { id: 1, name: "Budi", age: 21 },
        { id: 2, name: "Citra", age: 25 },
        { id: 3, name: "Andi", age: 17 },
        { id: 4, name: "Dewi", age: 19 }
    ];

    const [users, setUsers] = useState(initialUsers);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [search, setSearch] = useState('');

    function userForm(e) {
        e.preventDefault();

        if(name === '' || age === '') return;

        setUsers(prev => [...prev, {id: Date.now(), name, age}]);
        setName('');
        setAge('');
    }

    function deleteUser(id) {
        setUsers(prev => prev.filter(user => user.id !== id));
    }
    

    const filteredUsers = users.filter(user =>user.name.toLowerCase().includes(search.toLowerCase()));


    return (
        <>
        <h2>Input User:</h2>
        <form onSubmit={userForm}>
            <input
            value={name}
            onChange={(e) => setName (e.target.value)} />

            <input
            value={age}
            onChange={(e) => setAge (Number(e.target.value))} />

            <button disabled={!name || !age}>Add</button>
        </form>

        <h2>Input Search</h2>
        <form>
            <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>

        <ul>
            <p>{filteredUsers.length == 0 && "User not found"}</p>
            {filteredUsers.map((user) => (
                <UserList
                key={user.id}
                name={user.name}
                age={user.age}
                isAdult={user.age >= 20}
                buttonDelete ={() => deleteUser(user.id)}
                />
            ))}
        </ul>
        </>
    )
}

function UserList ({name, age, isAdult, buttonDelete}) {
    return (
        <>
        <li style={{ color: isAdult ? "green": "gray"}}>
            {name} ({age}) {isAdult ? "- Adult": " "}
            <button onClick={buttonDelete}>❌</button>
        </li>
        
        </>
    )
}

export default AppUserManager;