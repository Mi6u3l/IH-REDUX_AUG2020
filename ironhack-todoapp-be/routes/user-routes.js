const express = require('express');
const router = express.Router();

router.get('/loggedUser', (req, res) => {
  const username = req.query.username;
  res.json({ username, type: "Admin"});
});

module.exports = router;