import {useState} from "react";
/*
TUGAS 1 — FORM ADD USER
Input: name
Input: age
Tombol Add
Data masuk ke list

TUGAS 2 — VALIDASI
Jika name kosong → jangan tambah
Jika age kosong → jangan tambah

TUGAS 3 — RESET FORM
Setelah submit → input kosong lagi
*/

function UserForm() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleForm(e) {
       e.preventDefault();

       setUsers([...users, {id: Date.now(), name, age}]);
       setName('');
       setAge('');
    
    }

    const isdisabled = name === '' || age === '';

    return (
        <>
        <form onSubmit={handleForm}>
            <input 
            value={name}
            onChange={(e) => setName (e.target.value)} />

            <input
            value={age}
            onChange={(e) => setAge (e.target.value)} />

            <button disabled={isdisabled}>Add</button>
        </form>

        <ul>
            {users.map((user) => (
                <li>{user.name} ({user.age})</li>
            ))}
        </ul>
        </>
    )
}

export default UserForm;