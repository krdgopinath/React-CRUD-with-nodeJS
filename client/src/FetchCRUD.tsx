import React, { useEffect, useState } from 'react';

const FetchCRUD = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState(null);

  // 🟢 READ — Fetch users on load
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🟡 CREATE — Add user
  const handleAddUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: "", email: "" });
        fetchUsers();
      }
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // 🟠 UPDATE — Edit existing user
  const handleUpdateUser = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setEditId(null);
        setFormData({ name: "", email: "" });
        fetchUsers();
      }
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // 🔴 DELETE — Remove user
  const handleDeleteUser = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>React CRUD using Fetch (Async/Await)</h2>

      {/* Input Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {editId ? (
          <button onClick={() => handleUpdateUser(editId)}>Update</button>
        ) : (
          <button onClick={handleAddUser}>Add</button>
        )}
      </div>

      {/* Display Data */}
      <table border="1" cellPadding="10">
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => {
                    setEditId(user.id);
                    setFormData({ name: user.name, email: user.email });
                  }}>
                    Edit
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="4">No users found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FetchCRUD;
