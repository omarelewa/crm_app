const express = require('express');
const { Account } = require('../models');

const router = express.Router();

// Create account
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newAccount = await Account.create({ name, email });
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create account' });
  }
});

// List accounts
router.get('/', async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve accounts' });
  }
});

// Update account
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const account = await Account.findByPk(id);
    if (account) {
      await account.update({ name, email });
      res.status(200).json(account);
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update account' });
  }
});

// Delete account
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const account = await Account.findByPk(id);
    if (account) {
      await account.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete account' });
  }
});

module.exports = router;
