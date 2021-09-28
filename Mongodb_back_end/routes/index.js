const express = require('express');
const router = express.Router();

const short = require('../src/controller/shortContrller');

router.get('/shortlist/:short',short.shortlist)
router.post('/shortadd',short.shortinsert)

module.exports = router;
