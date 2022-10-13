const router = require('express').Router();

const homeRoutes = require('./homepageRoutes');
const dashboardRoutes = require('./dashboardRoutes')
const apiRoutes = require('./api')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;