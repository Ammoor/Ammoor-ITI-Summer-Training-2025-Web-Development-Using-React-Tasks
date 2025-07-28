function Child({ message, updateMessage }) {
  return (
    <div
      style={{ border: "2px dashed green", padding: "1rem", marginTop: "1rem" }}
    >
      <h3>Child Component</h3>
      <p>{message}</p>
      <button onClick={updateMessage}>Update message</button>
    </div>
  );
}

export default Child;
