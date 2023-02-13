const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
app.use(checkWorkingHours);
app.use(express.static('public'));
