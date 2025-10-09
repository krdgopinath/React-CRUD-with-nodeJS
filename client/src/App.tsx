import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import apikey from "./test";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    customerId: "",
    firstName: "",
    lastName: "",
    email: "",
  });

 
  // ✅ Fetch all users
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/users");
      setUsers(res.data);
      setFilteredUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  // ✅ Handle input changes
  const handleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // ✅ Open modal for Add
  const handleAdd = () => {
    setUserData({ customerId: "", firstName: "", lastName: "", email: "" });
    setIsModalOpen(true);
  };

  // ✅ Open modal for Edit
  const handleEdit = (user) => {
    setUserData(user);
    setIsModalOpen(true);
  };

  // ✅ Close modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  // ✅ Add or Update user
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (userData.customerId === "") {
        // Add new user
        const res = await axios.post("http://localhost:8000/users", userData);
        setUsers(res.data);
        setFilteredUsers(res.data);
      } else {
        // Update user
        const res = await axios.patch(
          `http://localhost:8000/users/${userData.customerId}`,
          userData
        );
        setUsers(res.data);
        setFilteredUsers(res.data);
      }

      handleClose();
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  // ✅ Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this user?")) return;

    try {
      const res = await axios.delete(`http://localhost:8000/users/${id}`);
      setUsers(res.data);
      setFilteredUsers(res.data);
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  // ✅ Search users
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setFilteredUsers(
      users.filter(
        (u) =>
          u.firstName.toLowerCase().includes(value) ||
          u.lastName.toLowerCase().includes(value)
      )
    );
  };

  // ✅ Load users on mount
  useEffect(() => {
    console.log(apikey);
    getUsers();
  }, []);

  return (
    <div className="container">
      <h3>CRUD Application</h3>

      <div className="inputsearch">
        <input
          type="search"
          onChange={handleSearch}
          placeholder="Search by name..."
        />
        <button className="btn green" onClick={handleAdd}>
          Add Record
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u, i) => (
            <tr key={u.customerId}>
              <td>{i + 1}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>
                <button className="btn green" onClick={() => handleEdit(u)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn red"
                  onClick={() => handleDelete(u.customerId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>
              {userData.customerId === "" ? "Add User" : "Edit User"}
            </h2>

            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleData}
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleData}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleData}
              />
            </div>

            <button className="btn green" onClick={handleSave}>
              {userData.customerId === "" ? "Add" : "Update"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
