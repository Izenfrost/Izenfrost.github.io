const express = require('express');
const winston = require('winston');
const app = express();
const levels = { 
    error: 0, 
    info: 1
}
const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
});

var current_time = () => new Date().toString();


app.set('view engine', 'pug')

app.get('/blogs', function(req, res) {
    logger.info(current_time() + ' GET request to: ' + req.originalUrl);
    const articles = [{title: 'First title', body: 'First body' }, {title: 'Second title', body: 'Second title' }];
    res.json(articles);
});

app.get('/blogs/:id', function(req, res) {
    logger.info(current_time() + ' GET request to: ' + req.originalUrl);
    const article = {title: 'First title', body: 'First body' };
    res.json(article);
});

app.post('/blogs', function(req, res) {
    logger.info(current_time() + ' POST request to: ' + req.originalUrl);
    const article = {title: 'Title successful created', body: 'Body successful created' };
    res.json(article);
});

app.put('/blogs/:id', function(req, res) {
    logger.info(current_time() + ' PUT request to: ' + req.originalUrl);
    const article = {title: 'Title successful updated', body: 'Body successful updated' };
    res.json(article);
});

app.delete('/blogs/:id', function(req, res) {
    logger.info(current_time() + ' DELETE request to: ' + req.originalUrl);
    const article = {title: 'Title successful deleted', body: 'Body successful deleted' };
    res.json(article);
});

app.use(function(req, res) {
    console.log('Invalid route: ' + req.originalUrl);
    logger.error(current_time() + ' Invalid route: ' + req.originalUrl);
    const error = { title: 'Invalid route', message: 'No route matches for ' + req.originalUrl };
    res.render('welcome_page', error);
});

app.listen(8000, () => console.log('Listening app on port 8000'));