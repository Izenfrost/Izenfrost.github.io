const express = require('express');
const app = express();

app.get('/blogs', function(req, res) {
    const articles = [{title: 'First title', body: 'First body' }, {title: 'Second title', body: 'Second title' }];
    res.json(articles);
});

app.get('/blogs/:id', function(req, res) {
    const article = {title: 'First title', body: 'First body' };
    res.json(article);
});

app.use(function(req, res) {
    console.log('Error route: ' + req.originalUrl);
    const error = { title: 'No route matches', description: 'No route matches for ' + req.originalUrl };
    res.json(error);
});

app.listen(8000, () => console.log('Listening app on port 8000'));