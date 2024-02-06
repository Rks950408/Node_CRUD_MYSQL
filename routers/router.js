// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/create', (req, res) => {
  const { name, email } = req.body;
  controller.createUser(name, email, (err, result) => {
    if(err) throw err;
    res.send('Student added successfully');
  });
});

router.get('/users', (req, res) => {
  controller.getUsers((err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.put('/update/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  controller.updateUser(userId, name, email, (err, result) => {
    if (err) throw err;
    res.send('User updated successfully');
  });
});

router.delete('/delete/:id', (req, res) => {
  const userId = req.params.id;
  controller.deleteUser(userId, (err, result) => {
    if (err) throw err;
    res.send('User deleted successfully');
  });
});

module.exports = router;