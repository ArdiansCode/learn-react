import { useState, useCallback } from "react";

const Button = React.memo(function Button({ onClick }) {
  console.log("Button render");
  return <button onClick={onClick}>Click me</button>;
});

function AppDay20Task() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Re-render ({count})
      </button>

      <Button onClick={handleClick} />
    </>
  );
}

export default AppDay20Task;
