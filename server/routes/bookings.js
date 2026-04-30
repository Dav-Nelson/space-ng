const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Create a booking
router.post('/', async (req, res) => {
  const { user_id, venue_id, start_time, end_time, total_price } = req.body;
  
  // Check for availability
  try {
    const conflict = await pool.query(
      `SELECT * FROM bookings 
       WHERE venue_id = $1 
       AND status = 'confirmed'
       AND ($2, $3) OVERLAPS (start_time, end_time)`,
      [venue_id, start_time, end_time]
    );

    if (conflict.rows.length > 0) {
      return res.status(409).json({ error: 'Venue is already booked for this time slot' });
    }

    const result = await pool.query(
      'INSERT INTO bookings (user_id, venue_id, start_time, end_time, total_price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, venue_id, start_time, end_time, total_price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
});

module.exports = router;
