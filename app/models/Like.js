'use strict'
const { Model } = require('sequelize')

class Like extends Model {
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
            likable: {
                type: DataTypes.STRING({ length: 45}),
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
            },
            updated_at: {
                type: DataTypes.DATE,
            }
        },
        {
            modelName: 'Like',
            sequelize
        });
        return this
    }

    static associate(models){
        this.belongsTo(models.User, {
          foreignKey: 'owner_id',
          as: 'owner'
        });

        this.belongsTo(models.Post,{
            foreignKey: 'reference_id',
            as: 'post',
            constraints: false
        });

        this.belongsTo(models.User,{
            foreignKey: 'reference_id',
            as: 'user',
            constraints: false
        });
    }
}
module.exports = Like;


