const express = require('express');
const router = express.Router();

router.get('/loggedUser', (req, res) => {
  const username = req.query.username;
  const type = req.query.type;

  res.json({ username, type});
});

module.exports = router;