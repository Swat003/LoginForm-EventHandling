import React, { useState } from "react";

function App() {
  const [greetings, setGreetings] = useState("Hello ");
  const [mousedOver, setMousedOver] = useState(false);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  function handleClick() {
    setGreetings("Greetings ");
  }

  function handleMouseOver() {
    setMousedOver(true);
  }

  function handleMouseOut() {
    setMousedOver(false);
  }
  function handleChange(event) {
    setfName(event.target.value);
  }

  function handledChange(event) {
    setlName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        {greetings}
        {fname}
        {lname}
      </h1>
      <input onChange={handleChange} type="text" placeholder="first name?" />
      <input onChange={handledChange} type="text" placeholder="last name?" />
      <button
        style={{ backgroundColor: mousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
