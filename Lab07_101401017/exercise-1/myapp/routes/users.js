var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// POST route
router.post('/', function(req, res) {
    console.log("Received data:", req.body);
    res.send('POST received!');
});

module.exports = router;