const db = require("../dbConfig/dbConfig");

const createUser = (name, email, callback) => {
  const sql = 'INSERT students (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], callback);
};

const getUsers = (callback) => {
  const sql = 'SELECT * FROM students';
  db.query(sql, callback);
};

const updateUser = (userId, name, email, callback) => {
  const sql = 'UPDATE students SET name=?, email=? WHERE id=?';
  db.query(sql, [name, email, userId], callback);
};

const deleteUser = (userId, callback) => {
  const sql = 'DELETE FROM students WHERE id=?';
  db.query(sql, [userId], callback);
};


module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};