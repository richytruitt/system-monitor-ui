import { useState } from "react";
import ContainerCard from "./components/ContainerCard";


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [containers, setContainers] = useState([]);
  const [error, setError] = useState("");

  async function login(event) {
    event.preventDefault();
    setError("");

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      setError("Login failed");
      return;
    }

    const data = await response.json();

    setToken(data.access_token);
    fetchContainers(data.access_token);
  }

  async function fetchContainers(authToken) {
    const response = await fetch("/docker/containers", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      setError("Failed to load containers");
      return;
    }

    const data = await response.json();
    setContainers(data);
  }

  return (
    <>
      <h1>Docker Dashboard</h1>

      {!token && (
        <form onSubmit={login}>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />

          <button type="submit">Login</button>
        </form>
      )}

      {error && <p>{error}</p>}

      {token && (
        <button onClick={() => fetchContainers(token)}>
          Refresh
        </button>
      )}

      {containers.map((container) => (
        <ContainerCard
          key={container.id}
          container={container}
        />
      ))}
    </>
  );
}

export default App;