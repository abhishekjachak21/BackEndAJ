const express = require('express');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  // Extract data from the request body
  const { name, email } = req.body;

  // Simple validation (check if fields are provided)
  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }

  // Here, you would typically save the data to a database, but for now, we'll just return a confirmation message
  res.status(200).send(`Form submitted successfully! \n Name: ${name}, Email: ${email}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
