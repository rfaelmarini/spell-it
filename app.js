const express = require('express');

const movieRoutes = require("./src/routes/number");
const PORT = process.env.PORT || 8000;
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use("/number", movieRoutes);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

module.exports = app;