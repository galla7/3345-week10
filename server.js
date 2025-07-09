const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Item = mongoose.model('Item', { name: String });

app.post('/items', async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.status(201).json(item);
});

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
