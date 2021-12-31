const express = require('express');
const app = express();
const router_principles = require('./routes/controller');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/race-teams/team-principles', router_principles);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
