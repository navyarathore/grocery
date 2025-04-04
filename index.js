const express = require('express');
const app = express();
const PORT = 3000;

const groceryRoutes = require('./groceryRoutes');

app.use(express.json());
app.use('/api/groceries', groceryRoutes);

app.get('/', (req, res) => {
  res.send('Smart Grocery List API is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
