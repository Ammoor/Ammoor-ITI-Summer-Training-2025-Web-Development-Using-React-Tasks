import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("Are you winning, son?!");

  const updateMessage = () => {
    setMessage("Alhamdulillah, dad!");
  };

  return (
    <div
      style={{ border: "2px solid blue", padding: "1rem", marginTop: "1rem" }}
    >
      <h2>Parent Component</h2>
      <p>{message}</p>
      <Child message={message} updateMessage={updateMessage} />
    </div>
  );
}

export default Parent;
