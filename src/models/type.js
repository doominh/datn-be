'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Type.hasMany(models.Appointment, {foreignKey: 'type_id'});
        }
    }
    Type.init({
        type_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type_name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Type',
        tableName: 'type'
    });
    return Type;
};