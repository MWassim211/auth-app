const express = require('express');
const path = require('path');
let router = express.Router();

router.get('/', function(_req, res, _next) {
    res.render('users', { title: 'TIW4 -- LOGON' })
});


module.exports = router;
