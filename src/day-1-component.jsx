const users = [
  { name: "Budi", age: 21 },
  { name: "Citra", age: 25 },
  { name: "Andi", age: 17 }
];

function UserCard({ mame, age, isAdult }) {
  return (
    <li>
      {mame} ({age}) - {isAdult}
    </li>
  );
}

function AppDay1() {
    return (
        <ul>
        {users.map((item, index) => (
            <UserCard
            key={index}
            mame={item.name}
            age={item.age}
            isAdult={item.age >= 20 ? "Adult" : "Underage"}
            />
        ))}
        </ul>
    );
}

export default AppDay1