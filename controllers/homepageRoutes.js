const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'post_text', 'title', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    ],
  })
    .then((returnedPostsData) => {
      const posts = returnedPostsData.map((posts) =>
        posts.get({ plain: true })
      );

      res.render('homepage', {
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'post_text', 'title', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    ],
  })
  .then(returnedPostData => {
    if(!returnedPostData) {
      res.status(404).json({message: 'Could not find a post with this id'});
      return;
    }
    const singlePost = returnedPostData.get({plain: true});
    res.render('singlePost', {
      singlePost
    })
  })
});

module.exports = router;
