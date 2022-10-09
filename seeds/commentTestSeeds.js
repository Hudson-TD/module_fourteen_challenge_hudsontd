const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This project is very hard :(",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Rabbits rabbits rabbits",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Pepperoni Pizza is whats for dinner",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "I like turtle",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

seedComments();