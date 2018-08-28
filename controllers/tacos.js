var express = require('express');
var db = require('./../models');
var router = express.Router();

// GET /
router.get('/', function(req, res) {
  db.taco.findAll().then(function(tacos) {
    res.render('tacos/index', {tacos: tacos});
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

// GET /new


// GET /:id/edit


// GET /:id


// PUT /:id


// DELETE /:id


// POST /
router.post('/', function(req, res) {
  db.taco.create(req.body).then(function(taco) {
    res.redirect('/tacos');
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

module.exports = router;
