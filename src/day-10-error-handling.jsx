import {useState, useEffect} from "react";

function FetchUsersSafe() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        async function fetchUsers() {
            try{
                setLoading(true)
                setError(null)

                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!res.ok) {
                    throw new error("Failed to fetch users")
                }

                const data = await res.json();
                setUsers(data);   
            } catch (err){
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if(loading) {
        return <p>loading...</p>;
    }
    if (error) {
        return <p style={{ color: "red" }}>{error}</p>;
    }
    if (users.length === 0) {
        return <p>No users found</p>;
    }

    return  (
        <>
        <h1>List Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} ({user.email})</li>
            ))}
        </ul>
        </>
    )
}

export default FetchUsersSafe;