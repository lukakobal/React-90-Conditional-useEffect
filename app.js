import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const [user, setUser] = useState("Luka");

  useEffect(() => {
    if (count === 0) return;
    console.log("Effect se je zagnal! Count:", count, "User:", user);

    localStorage.setItem("count", count);
  }, [count, user]);

  return (
    <div className="app">
      <h1>React 90: Conditional useEffect</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Povečaj count</button>
      <button onClick={() => setCount(0)}>Reset count</button>

      <p>User: {user}</p>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Vpiši uporabnika"
      />
    </div>
  );
}
