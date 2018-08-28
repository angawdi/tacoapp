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
router.put('/:id', function(req, res) {
  db.taco.findById(req.params.id).then(function(taco) {
    if (taco) {
      taco.updateAttributes(req.body).then(function() {
        res.status(200).send({msg: 'success'});
      });
    } else {
      res.status(404).send({msg: 'error'});
    }
  }).catch(function(err) {
    res.status(500).send({msg: 'error'});
  });
});

// DELETE /:id
router.delete('/:id', function(req, res) {
  db.taco.findById(req.params.id).then(function(taco) {
    if (taco) {
      taco.destroy().then(function() {
        res.send({msg: 'success'});
      });
    } else {
      res.status(404).send({msg: 'error'});
    }
  }).catch(function(err) {
    res.status(500).send({msg: 'error'});
  });
});

// POST /
router.post('/', function(req, res) {
  db.taco.create(req.body).then(function(taco) {
    res.redirect('/tacos');
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

module.exports = router;
