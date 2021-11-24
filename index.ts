import express from 'express';
import {generateTableOfContents} from './server/TOC_Generator';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(generateTableOfContents());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
