import { useState, useMemo } from "react";

function useUsers(initialUsers = []) {
    const [users, setUsers] = useState(initialUsers);
    const [search, setSearch] = useState("");

    function addUser(name, age) {
        if (!name || !age) return;

        setUsers(prev => [
        ...prev,
        { id: Date.now(), name, age }
        ]);
    }

    function deleteUser(id) {
        setUsers(prev => prev.filter(user => user.id !== id));
    }

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    return {
        users: filteredUsers,
        addUser,
        deleteUser,
        search,
        setSearch
    };
}

export default useUsers;