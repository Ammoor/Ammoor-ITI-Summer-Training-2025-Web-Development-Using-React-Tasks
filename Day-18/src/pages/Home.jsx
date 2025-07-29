import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Ready");

  // Runs every time count changes
  useEffect(() => {
    setStatus("Updated!");
  }, [count]);

  // Runs only once on mount
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  // Runs every render
  useEffect(() => {
    console.log("Component re-rendered");
  });

  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <p>Status: {status}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
