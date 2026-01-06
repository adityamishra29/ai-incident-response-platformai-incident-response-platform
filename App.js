import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/detect")
      .then(res => res.json())
      .then(data => setStatus(JSON.stringify(data)));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>AI Incident Response Dashboard</h2>
      <p>{status}</p>
    </div>
  );
}

export default App;
