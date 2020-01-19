const express = require('express');

const numberController = require('../controller/number');

const router = express.Router();

router.get("/:number", numberController.spellIt);

module.exports = router;