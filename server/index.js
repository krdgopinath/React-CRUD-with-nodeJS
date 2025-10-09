const express = require("express");
const users = require("./sample.json");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(express.json());
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:5173", // your React app
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

// ✅ GET all users
app.get("/users", (req, res) => {
  return res.json(users);
});

// ✅ ADD new user
app.post("/users", (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: "Incomplete information" });
  }

  // Generate a new unique ID
  const newId = "CUST" + String(users.length + 1).padStart(3, "0");

  const newUser = { customerId: newId, firstName, lastName, email };
  users.push(newUser);

  fs.writeFile("./sample.json", JSON.stringify(users, null, 2), (err) => {
    if (err) return res.status(500).json({ message: "Error saving user" });
    res.json(users);
  });
});

// ✅ UPDATE user
app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email } = req.body;

  const index = users.findIndex((u) => u.customerId === id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update the user data
  users[index] = { ...users[index], firstName, lastName, email };

  fs.writeFile("./sample.json", JSON.stringify(users, null, 2), (err) => {
    if (err) return res.status(500).json({ message: "Error updating user" });
    res.json(users);
  });
});

// ✅ DELETE user
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const filteredUsers = users.filter((user) => user.customerId !== id);

  fs.writeFile("./sample.json", JSON.stringify(filteredUsers, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error deleting user" });
    }
    return res.json(filteredUsers);
  });
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
