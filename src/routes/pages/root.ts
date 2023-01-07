import path from 'path';

import express, { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).header('Content-Type', 'text/html').send(`<h4>💊 RESTful API boilerplate</h4>`);
});

const favicon = express.static('/misc/heisenberg.png');

router.get('/favicon.ico', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Length', favicon.length);
  res.setHeader('Content-Type', 'image/x-icon');
  res.setHeader('Cache-Control', 'public, max-age=2592000'); // expires after a month
  res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString());

  //res.sendFile(path.join(__dirname + '/misc/icons8-bookmark-16.png'));
  res.end(favicon);
  //res.end();
});

export default router;
