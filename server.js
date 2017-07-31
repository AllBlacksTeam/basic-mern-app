import express from 'express';

const myServer = express();

myServer.use(express.static('public'));

myServer.get('/', (req, res) => {
  res.render('index.html');
});

myServer.listen(3000, () => {
  console.log('myServer listening on port 3000');
});
