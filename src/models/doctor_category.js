'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DoctorCategory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DoctorCategory.belongsTo(models.Doctor, {foreignKey: 'doctor_id'});
            DoctorCategory.belongsTo(models.Category, {foreignKey: 'category_id'});
        }
    }
    DoctorCategory.init({
        doctor_category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        doctor_id: DataTypes.STRING(10),
        category_id: DataTypes.STRING(10)
    }, {
        sequelize,
        modelName: 'DoctorCategory',
        tableName: 'doctor_category'
    });
    return DoctorCategory;
};