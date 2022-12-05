const express = require('express');
const cors = require('cors');
const app = express();

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'hashahahdskjb'}
];

app.use(express.json()).use(cors());

app.get('/', (req, res) => {
  res.status(200).send(movies)
});

app.get('/:query', (req, res) => {
  res.status(200).send(`Queried ${req.params.query}`)
})

app.listen(3001, () => {console.log(`I'm doing the thing on 3001`)});