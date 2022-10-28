const router = require('express').Router();
const homeRoutes = require('./home');
const blogRoutes = require('./blog-routes')
const commentRoutes = require('./comment-routes')

router.use('/home', homeRoutes);
router.use('/blogs', blogRoutes)
router.use('/comment', commentRoutes)

module.exports = router;
