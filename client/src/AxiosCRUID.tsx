import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosCRUD = () => {
  const [users, setUsers] = useState([]);      // all users
  const [name, setName] = useState('');        // for new user input
  const [editId, setEditId] = useState(null);  // for editing
  const [editName, setEditName] = useState('');

  const API_URL = 'http://localhost:5000/users';

  // READ - Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  // CREATE - Add user
  const addUser = async () => {
    try {
      const response = await axios.post(API_URL, { name });
      setUsers([...users, response.data]);
      setName('');
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  // UPDATE - Edit user
  const updateUser = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { name: editName });
      setUsers(users.map((u) => (u.id === id ? response.data : u)));
      setEditId(null);
      setEditName('');
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  // DELETE - Remove user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ margin: '40px' }}>
      <h2>React CRUD using Axios</h2>

      {/* CREATE */}
      <div>
        <input
          type='text'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addUser}>Add</button>
      </div>

      <hr />

      {/* READ / UPDATE / DELETE */}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {editId === u.id ? (
              <>
                <input
                  type='text'
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={() => updateUser(u.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {u.name}
                <button
                  onClick={() => {
                    setEditId(u.id);
                    setEditName(u.name);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosCRUD;
