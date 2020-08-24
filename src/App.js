import React, { useState } from "react";
import UserSection from "./UserSection";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  function handleChange(ev) {
    setUsername(ev.target.value);
  }

  function handleSubmit(ev) {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(setData);
    ev.preventDefault();
  }

  return (
    <div className="container">
      <h1 style={{ alignSelf: "center" }}>Search GitHub Profiles</h1>
      <input
        placeholder="Github username"
        type="text"
        value={username}
        onChange={handleChange}
      />
      <button disabled={!Boolean(username)} onClick={handleSubmit}>
        Submit
      </button>
      {data && <UserSection user={data} />}
    </div>
  );
}

export default App;
