'use strict';

const Sequelize = require('sequelize');
const config = require('../database/index');
const sequelize = new Sequelize(config);

const User =  require('./User')
const Post =  require('./Post')
const Like =  require('./Like')



const models = {
  User: User.init(sequelize,Sequelize),
  Post: Post.init(sequelize,Sequelize),
  Like: Like.init(sequelize,Sequelize),
}

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

module.exports = {
  ...models,
  sequelize
}
