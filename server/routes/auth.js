const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
      [name, email, passwordHash, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: 'User registration failed' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
  if (user.rows.length === 0 || !(await bcrypt.compare(password, user.rows[0].password_hash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ id: user.rows[0].id, role: user.rows[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user: { id: user.rows[0].id, name: user.rows[0].name, role: user.rows[0].role } });
});

module.exports = router;
