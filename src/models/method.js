'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Method extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Method.hasMany(models.Bill, {foreignKey: 'method_id'});
        }
    }
    Method.init({
        method_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        method_name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Method',
        tableName: 'method'
    });
    return Method;
};