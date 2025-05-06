import React, { useState } from "react";

function Greeting({ name }) {
  return <h2>Hello, {name ? name : "Guest"}! How's your day?</h2>;
}

function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Enter your name:</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name"
      />
      <Greeting name={name} />
    </div>
  );
}

export default App;
