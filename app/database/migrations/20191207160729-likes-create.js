'use strict';

module.exports = {
  /**
   * @param { import('sequelize').QueryInterface } queryInterface
   * @param { import('sequelize').DataTypes } Sequelize 
   */
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('likes',{
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false
      },
      reference_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      likable: {
        type: Sequelize.STRING({ length: 45 }),
        allowNull: false,
      },
      owner_id: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
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
    return queryInterface.dropTable('likes')
  }
};
