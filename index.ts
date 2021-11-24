import express from 'express';
import {generateTableOfContents} from './server/TOC_Generator';
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send(await generateTableOfContents());
});

/*
serve pages
 + For info on setting etag to false see this: https://stackoverflow.com/questions/32154656/does-express-static-cache-files-in-the-memory
*/
app.use('/pages', express.static('pages', {
  etag: false // prevent the browser cacheing because of HTTP 304("not modified")
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
