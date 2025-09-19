import { useEffect, useState } from "react";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl text-amber-500">Frontend</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App
