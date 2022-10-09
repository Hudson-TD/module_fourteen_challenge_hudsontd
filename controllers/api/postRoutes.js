const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'post_text', 'title', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['id'],
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
    .then((returnedPostData) => res.json(returnedPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
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
    .then((returnedPostData) => res.json(returnedPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    post_text: req.body.post_text,
    user_id: req.session.user_id,
  })
    .then((returnedPostData) => res.json(returnedPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
