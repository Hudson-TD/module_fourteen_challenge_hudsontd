const { User } = require('../models');

const userData = [
  {
    username: "Cassie",
    password: "password1234"
  },
  {
    username: "Josh",
    password: "password1234"
  },
  {
    username: "Steven",
    password: "password1234"
  },
  {
    username: "Emily",
    password: "password1234"
  },
  {
    username: "John",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

seedUsers();