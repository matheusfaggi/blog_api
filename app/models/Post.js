'use strict'
const { Model } = require('sequelize')

class Post extends Model {
    /**
     * 
     * @param { import('sequelize').Sequelize } sequelize 
     * @param { import('sequelize').DataTypes } DataTypes 
     */
    static init(sequelize, DataTypes){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                autoIncrement: false,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING({ length: 255 }),
                allowNull: false,        
            },
            description: {
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
            modelName: 'Post',
            sequelize
        });
        return this
    }

    static associate(models){
        this.belongsTo(models.User, {
          foreignKey: 'user_id',
          as: 'user'
        })
        this.hasMany(models.Like,{
            foreignKey: 'reference_id',
            constraints: false,
            as: 'likes',
            scope: {
                likable: 'post'
            }
        })
    }   
}
module.exports = Post;


