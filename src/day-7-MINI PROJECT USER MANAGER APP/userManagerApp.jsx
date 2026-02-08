import { useState } from "react";

function AppUserManager() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

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


    return (
        <>
        <form onSubmit={userForm}>
            <input 
            value={name}
            onChange={(e) => setName (e.target.value)} />

            <input
            value={age}
            onChange={(e) => setAge (Number(e.target.value))} />

            <button disabled={!name || !age}>Add</button>
        </form>

        <ul>
            {users.map((user) => (
                <UserList
                key={user.id}
                name={user.name}
                age ={user.age}
                isAdult ={user.age >= 20}
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