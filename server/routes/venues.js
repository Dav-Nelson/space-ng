const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

router.get('/', async (req, res) => {
  const venues = await pool.query('SELECT * FROM venues');
  res.json(venues.rows);
});

router.post('/', async (req, res) => {
  const { host_id, name, description, location, hourly_rate, capacity, amenities, photos } = req.body;
  const result = await pool.query(
    'INSERT INTO venues (host_id, name, description, location, hourly_rate, capacity, amenities, photos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [host_id, name, description, location, hourly_rate, capacity, amenities, photos]
  );
  res.status(201).json(result.rows[0]);
});

module.exports = router;
