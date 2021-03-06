const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  console.log('in the dashboard routes');
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });
    // turn into JSON
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log('posts', posts);
    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
      loggedIn:req.session.loggedIn
    });
  } catch (err) {
    res.redirect('login');
  }
});
// new post
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});
// editing post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;