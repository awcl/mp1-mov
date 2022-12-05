const express = require('express');
const cors = require('cors');
const app = express();

const movies = [
  {title: 'Mean Girls', watched: false, toWatch: false},
  {title: 'Hackers', watched: false, toWatch: false},
  {title: 'The Grey', watched: false, toWatch: false},
  {title: 'Sunshine', watched: false, toWatch: false},
  {title: 'Ex Machina', watched: false, toWatch: false}
];

app.use(express.json()).use(cors());

app.get('/', (req, res) => {
  res.status(200).send(movies)
});

app.get('/:query', (req, res) => {
  res.status(200).send(`Queried ${req.params.query}`)
})

app.get('/manage/:mov', (req, res) => {
  res.status(200).send(`Navigated to /manage`)
});

app.listen(3001, () => {console.log(`I'm doing the thing on 3001`)});