import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = import.meta.env.VITE_BACKEND_URL;

  const handelSubmit = async () => {
    console.log(email, password);

    const res = await axios.post(`${url}/auth/login`, {
      email,
      password,
    });

    if (res?.data?.status) {
      alert(res?.data?.message);
    } else {
      alert("Login failed");
    }

    console.log(res);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handelSubmit}>Login</button>
    </div>
  );
}

export default App;
