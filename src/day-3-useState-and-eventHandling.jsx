import { useState } from "react";


/*
TUGAS 1 — LIKE BUTTON
Buat component:
Awal likes = 0
Tombol Like
Klik → likes bertambah
*/
function LikeToggle() {
    const [liked, setliked] = useState(0);

    function handleLike() {
        setliked(liked + 1);
    }

    return (
        <>
        <h2>
            Likes: {liked}
        </h2>
        <button onClick={handleLike}>
            Like
        </button>
        </>
    )
}

/*
TUGAS 2 — SHOW / HIDE USER LIST
Tombol: Show Users
Klik → tampilkan list user
Klik lagi → sembunyikan
*/
const users = [
  { name: "Budi", age: 21 },
  { name: "Citra", age: 25 },
  { name: "Andi", age: 17 }
];

function ListUser({name, age}) {
    return (
        <li>
            {name} ({age})
        </li>
    )
}

function User() {
    return (
        <ul>
            {users.map((item) => (
                <ListUser 
                name={item.name}
                age={item.age}
                />
            ))}
        </ul>
    )
}
function UserListToggle() {
    const [show, setshow] = useState(false);

    function handleShow() {
        setshow(!show);
    }

    return(
        <>
        <div>
            <LikeToggle/>
        </div>
        <button onClick={handleShow}>
            Toggle
        </button>

        {show && <User/> }

        <div>
            <Add />
        </div>
        </>
    )
}

/*
TUGAS 3 — DISABLE BUTTON
Tombol Tambah
Jika count ≥ 10 → tombol disabled
*/
function Add() {
    const [add, setAdd] = useState(0);

    function handleLike() {
        setAdd(add + 1);
    }

    const isDisabled = add >= 10;

    return (
        <>     
        <button onClick={handleLike} disabled={isDisabled}>
            Add: {add}
        </button>
        </>
    )
}


export default UserListToggle;;