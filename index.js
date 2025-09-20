const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/attendance', (req, res) => {
  res.json({ message: 'Attendance endpoint working' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
