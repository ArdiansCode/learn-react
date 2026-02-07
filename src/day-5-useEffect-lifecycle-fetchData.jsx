import { useState, useEffect } from "react";
/*
TUGAS 1 — FETCH USERS
Fetch dari:
https://jsonplaceholder.typicode.com/users
Tampilkan:
-name
-email

TUGAS 2 — LOADING STATE
-Saat fetch → tampilkan Loading...
-Setelah data muncul → list tampil

TUGAS 3 — CONDITIONAL STYLE
-Email .biz → warna merah
-Selain itu → hitam
*/

function FetchUserData() {
    const [users, setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <ul>
            {users.map(user => (
                <li style={{ color: user.email.slice(-4) == ".biz" ? "red": "black" }} key={user.id}>{user.name} ({user.email})</li>
            ))}
        </ul>
    )
}

export default FetchUserData;