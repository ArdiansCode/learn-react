const users = [
  { name: "Budi", age: 21 },
  { name: "Citra", age: 25 },
  { name: "Andi", age: 17 }
];

/*
TUGAS 1 — CONDITIONAL RENDER
Buat component UserCard yang:
-Menampilkan label "Adult" hanya jika umur ≥ 20
-Jika di bawah 20, label tidak ditampilkan sama sekali

TUGAS 2 — STYLING DINAMIS
-Jika Adult → teks hijau
-Jika Underage → teks abu-abu

TUGAS 3 — CLEAN COMPONENT
-UserCard tidak boleh punya logic umur
-Semua logic ditentukan di parent (App)
*/
function UserCard({title, name, age, isAdult, style}) {
    return (
        <li style={style}>
            {name} ({age}) {isAdult} 
        </li>
    )
}

function AppDay2() {
    return (
        <ul>
            {users.map((item) => (
                <UserCard
                name={item.name}
                age={item.age}
                isAdult={item.age >= 20 ? "- Adult" : " "}
                style={{ 
                    color: item.age >= 20 ? "green" : "gray"
                 }}
                />
            ))}
        </ul>
    )
}

export default AppDay2