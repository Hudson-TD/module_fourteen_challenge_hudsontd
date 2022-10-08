const router = require('express').Router();
const homeRoutes = require('./homepageRoutes');
const apiRoutes = require('./api')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;