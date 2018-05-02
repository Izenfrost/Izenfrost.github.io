const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../models/post');

router.get('/', function(req, res, next) {
    Post.find(function(err, posts) {
        if(err) return next(err);
        res.json(posts);
    });
});

router.get('/:id', function(req, res, next) {
    Post.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/', function(req, res, next) {
    Post.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        post.updated_at = Date.now;
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
