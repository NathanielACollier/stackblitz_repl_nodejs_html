import express from 'express';
import {generateTableOfContents} from './server/TOC_Generator';
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send(await generateTableOfContents());
});

// serve the pages
app.use('/pages', express.static('pages'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
