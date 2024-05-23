import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3 || name.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
      return;
    }

    if (description.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Elegi un color de 6 letras o mas</h1>
      <Form
        name={name}
        description={description}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onSubmit={handleSubmit}
      />
      {submitted && !error && <Card name={name} description={description} />}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
