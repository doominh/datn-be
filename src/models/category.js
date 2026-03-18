'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Category.hasMany(models.Service, {foreignKey: 'category_id'});
            Category.belongsToMany(models.Doctor, {through: models.DoctorCategory, foreignKey: 'category_id'});
        }
    }
    Category.init({
        category_id: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        category_name: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Category',
        tableName: 'category'
    });
    return Category;
};