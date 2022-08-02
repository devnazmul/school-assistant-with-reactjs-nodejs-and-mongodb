const express   = require('express');
const router    = express.Router();
const controllers = require('../../controllers').teacher;

router.get('/test',controllers.test)
router.post('/create',controllers.create)
module.exports = router;