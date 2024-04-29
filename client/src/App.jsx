import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/api/names");

    setUserName(response.data.name);
  };
  return (
    <div>
      Hello react
      <h1>{userName}</h1>
    </div>
  );
}

export default App;
