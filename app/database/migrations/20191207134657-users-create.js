'use strict';

module.exports = {
  /**
   * @param { import('sequelize').QueryInterface } queryInterface
   * @param { import('sequelize').DataTypes } Sequelize 
   */
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false
      },
      name: {
        type: Sequelize.STRING({ length: 255 }),
        allowNull: false,        
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    })   
  },
  /**
   * @param { import('sequelize').QueryInterface } queryInterface
   * @param { import('sequelize').DataTypes } Sequelize 
   */
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
