const router = require('express').Router();

const homeRoutes = require('./homepageRoutes');

router.use('/', homeRoutes);

module.exports = router;
