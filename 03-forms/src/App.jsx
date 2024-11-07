import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Marcel");
  const [role, setRole] = useState("Teacher");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      name,
      role,
      phone,
      email,
      password,
    };

    console.log(userData);

    setUsers([...users, userData]);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            type="text"
          />
          <label htmlFor="role">Role:</label>
          <input
            onChange={(e) => setRole(e.target.value)}
            value={role}
            id="role"
            type="text"
          />
          <label htmlFor="phone">Phone:</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            id="phone"
            type="tel"
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            type="password"
          />
          <input type="text" placeholder="This is the username" />
          <button type="submit">Submit</button>
        </form>

        <div>
          {/*  <h2>Values of the form</h2>
          <p>Name: {name}</p>
          <p>Role: {role}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p> */}

          <h2>Users:</h2>

          <ul>
            {users.map((user, index) => {
              return (
                <li key={index}>
                  <p>Name: {user.name}</p>
                  <p>Role: {user.role}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Email: {user.email}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
