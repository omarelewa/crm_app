const express = require('express');
const router = express.Router();

// Temporary in-memory storage for accounts
let accounts = [];

// Create account
router.post('/', (req, res) => {
    const { name, email } = req.body;
    const id = accounts.length + 1;
    const newAccount = { id, name, email };
    accounts.push(newAccount);
    res.status(201).json(newAccount);
});

module.exports = router;
