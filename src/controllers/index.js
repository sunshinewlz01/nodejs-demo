let express = require('express');
let logger = require('../utils/logger');

let router = express.Router();
router.use('/demo-test', function (req, res, next) {
    res.render('demo',{pageTitle:'Node.js+Express demo'});
});

module.exports = router;
