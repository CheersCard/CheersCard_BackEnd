import express from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// PostgreSQL connection setup
const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: Number(process.env.PGPORT),
});

// Connect to PostgreSQL
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, PostgreSQL with TypeScript!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
