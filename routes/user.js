var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Express REST API USER');
});

module.exports = router;
