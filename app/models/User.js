'use strict'
const { Model } = require('sequelize')
/**
 * 
 * @param { import('sequelize').Sequelize } sequelize 
 * @param { import('sequelize').DataTypes } DataTypes 
 */
class User extends Model {
    
    static init(sequelize, DataTypes){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                autoIncrement: false,
                defaultValue: DataTypes.UUIDV4
              },
              name: {
                type: DataTypes.STRING({ length: 255 }),
                allowNull: false,        
              },
              email: {
                type: DataTypes.TEXT,
                allowNull: false
              },
              created_at: {
                type: DataTypes.DATE,
              },
              updated_at: {
                type: DataTypes.DATE,
              }
        },
        {
            modelName: 'User',
            sequelize
        });
        return this
    }
  static associate(models){
    this.hasMany(models.Post, {
      as: 'posts'
    })
    this.hasMany(models.Like,{
      foreignKey: 'reference_id',
      constraints: false,
      as: 'likes',
      scope: {
        likable: 'user'
      }
    })
  }
}
module.exports = User ;